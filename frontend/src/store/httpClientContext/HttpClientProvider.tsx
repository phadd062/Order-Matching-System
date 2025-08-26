import { ReactNode, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HttpClientContext from "./HttpClientContext";
import HttpClient from "./HttpClient";

export default function ClientProvider({ children }: { children: ReactNode }) {
	const navigate = useNavigate();
	const location = useLocation();
	const searchUrl = `${location.pathname}${location.search}`;
	const client = useMemo(
		() => new HttpClient(navigate, searchUrl),
		[navigate, location],
	);
	return (
		<HttpClientContext.Provider value={client}>
			{children}
		</HttpClientContext.Provider>
	);
}
