import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const PROXY = "http://127.0.0.1:8080";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: { chunkSizeWarningLimit: 3000 },
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		proxy: {
			"/api": PROXY,
			"/en/api": PROXY,
			"/fr/api": PROXY,
			"/token": PROXY,
			"/fseismain": PROXY,
		},
	},
	resolve: {
		alias: {
			components: path.resolve("src/components/"),
			images: path.resolve("src/images"),
			layout: path.resolve("src/layout"),
			pages: path.resolve("src/pages"),
			store: path.resolve("src/store"),
			utils: path.resolve("src/utils"),
		},
	},
});
