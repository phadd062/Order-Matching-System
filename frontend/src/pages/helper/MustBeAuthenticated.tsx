import { useState, useEffect, ReactElement } from "react";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";
import { useNavigate } from "react-router-dom";
import LoadingGlobal from "pages/loading/LoadingGlobal";

const MustBeAuthenticated = ({ children }: { children: ReactElement }) => {
	const [isLoading, setIsLoading] = useState(true);
	const client = useHttpClient();
	const navigate = useNavigate();

	useEffect(() => {
		const checkLogin = async () => {
			const isLoggedIn = await client.isAuthenticated();
			if (!isLoggedIn) client.navigateToLogin();
			else setIsLoading(false);
		};
		checkLogin();
	}, [client, navigate]);

	if (isLoading) return <LoadingGlobal />;
	return children;
};

export default MustBeAuthenticated;
