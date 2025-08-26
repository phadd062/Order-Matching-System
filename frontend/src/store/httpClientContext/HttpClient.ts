import { AuthenticationError, isString } from "utils/helpers";

const TOKEN_STORAGE_KEY = "token";

const LOGIN_TOKEN_URL = "/api/auth/authenticate";
const CREATE_USER_URL = "/api/auth/register";

interface ResponseData {
	data?: any;
	clientError?: any;
	responseOK?: any;
}

export default class HttpClient {
	#navigateFunc: (url: string, arg: object) => void;
	#searchUrl: string;

	constructor(navigateFunc: (url: string) => void, searchUrl: string) {
		this.#navigateFunc = navigateFunc;
		this.#searchUrl = searchUrl;
	}

	queryFetch = async (url: string) => {
		const isAuthenticated = await this.isAuthenticated();
		if (!isAuthenticated) {
			this.#handleAuthFailure();
			throw new Error("Authentication failed");
		}
		const authHeaders = await this.#getAuthHeaders();
		const headers = { ...authHeaders, "Content-Type": "application/json" };

		const response = await fetch(url, {
			headers: headers,
			method: "get",
		});
		if (!response.ok) throw new Error("Network response was not ok");
		return response.json();
	};
	rawGet = async (url: string) => {
		return this.#request(url, {
			method: "GET",
			raw: true,
		}) as Promise<Response>;
	};
	rawExport = async (url: string, body: any) => {
		const isAuthenticated = await this.isAuthenticated();
		if (!isAuthenticated) {
			this.#handleAuthFailure();
			throw new Error("Authentication failed");
		}
		const authHeaders = await this.#getAuthHeaders();
		const headers = { ...authHeaders, "Content-Type": "application/json" };

		const response = await fetch(url, {
			headers: headers,
			method: "POST",
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			const errorData = await response.text();
			throw new Error("Network response was not ok");
		}

		return response;
	};
	get = async (url: string) => {
		return this.#request(url, { method: "GET" }) as ResponseData;
	};
	post = async (url: string, body: any) => {
		return this.#request(url, { method: "POST" }, body) as ResponseData;
	};
	put = async (url: string, body: any) => {
		return this.#request(url, { method: "PUT" }, body) as ResponseData;
	};
	delete = async (url: string) => {
		// API delete endpoints are not uniform (returning 200 and 204) so we force clients to interact with the raw response
		return this.#request(url, {
			method: "DELETE",
			raw: true,
		}) as Promise<Response>;
	};
	logout = () => {
		this.#clearTokens();
		this.navigateToLogin();
	};
	login = async (username: string, password: string): Promise<number> => {
		const response = await fetch(LOGIN_TOKEN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		if (response.ok) {
			const data = await response.json();
			localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
		}
		return response.status;
	};
	createUser = async (
		firstname: string,
		lastname: string,
		username: string,
		password: string,
	) => {
		try {
			const response = await fetch(CREATE_USER_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstname,
					lastname,
					username,
					password,
				}),
			});

			const data = await response.json();
			return { data, clientError: undefined, responseOK: response.ok };
		} catch (e) {
			this.#handleFetchFailure(e);
			return { data: undefined, clientError: e };
		}
	};
	navigateToLogin = () => {
		this.#navigateFunc("/login", {
			state: this.#searchUrl.slice(3),
			replace: true,
		});
	};
	isAuthenticated = async (): Promise<Boolean> => {
		if (this.#hasValidToken()) return true;
		return false;
	};

	#request = async (
		url: string,
		options: { raw?: boolean; method?: "PUT" | "GET" | "DELETE" | "POST" } = {},
		body: any = null,
	) => {
		const isAuthenticated = await this.isAuthenticated();
		if (!isAuthenticated) {
			this.#handleAuthFailure();
			return {
				data: undefined,
				clientError: new AuthenticationError("Not authenticated"),
			};
		}

		const authHeaders = await this.#getAuthHeaders();
		let bodyArg: any;
		if (body) bodyArg = isString(body) ? body : JSON.stringify(body);
		try {
			const response = await fetch(url, {
				headers: { ...authHeaders, "Content-Type": "application/json" },
				method: options.method || "get",
				body: bodyArg,
			});

			if (options.raw) return response;
			const data = await response.json();
			return { data, clientError: undefined, responseOK: response.ok };
		} catch (e) {
			this.#handleFetchFailure(e);
			return { data: undefined, clientError: e };
		}
	};
	#handleFetchFailure = (err: any) => console.error(err);
	#handleAuthFailure = () => {
		this.#clearTokens();
		this.navigateToLogin();
	};
	#getAuthHeaders = async () => {
		const token = await this.#getToken();
		return { Authorization: `Bearer ${token}` };
	};
	#getToken = async () => {
		if (this.#hasValidToken()) return this.#getTokenFromLocalStorage();
		throw new AuthenticationError("No valid token");
	};
	#hasValidToken = () => {
		const token = this.#getTokenFromLocalStorage();
		if (!token) return false;
		return true;
	};
	#getTokenFromLocalStorage = () => localStorage.getItem(TOKEN_STORAGE_KEY);
	#clearTokens = () => localStorage.removeItem(TOKEN_STORAGE_KEY);
}
