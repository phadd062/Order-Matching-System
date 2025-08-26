import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HttpClientProvider from "./store/httpClientContext/HttpClientProvider";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<BrowserRouter>
			<HttpClientProvider>
				<App />
			</HttpClientProvider>
		</BrowserRouter>
	</StrictMode>,
);
