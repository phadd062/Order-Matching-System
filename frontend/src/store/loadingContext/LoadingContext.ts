import { useContext, createContext } from "react";

const LoadingContext = createContext<any>(null);
export default LoadingContext;

export const useLoadingContext = () => {
	const loading = useContext(LoadingContext);
	if (loading) return loading;
	throw new Error("useLoadingContext must be used within a LoadingProvider");
};
