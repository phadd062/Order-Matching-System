import { createContext, useContext } from "react";
import HttpClient from "./HttpClient";

const HttpClientContext = createContext<HttpClient | null>(null);
export default HttpClientContext;

export const useHttpClient = () => {
	const client = useContext(HttpClientContext);
	if (client) return client;
	throw new Error("useClient must be used within a ClientProvider");
};
