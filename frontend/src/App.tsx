import { Routes, Route } from "react-router-dom";
import LoadingProvider from "./store/loadingContext/LoadingProvider";
import Login from "./pages/login/Login";
import RoutesComponent from "./pages/routes/root/RoutesComponent";
import MustBeAuthenticated from "pages/helper/MustBeAuthenticated";
import CreateAccount from "pages/login/CreateAccount";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/user/create" element={<CreateAccount />} />
			<Route
				path="*"
				element={
					<MustBeAuthenticated>
						<LoadingProvider>
							<RoutesComponent />
						</LoadingProvider>
					</MustBeAuthenticated>
				}
			/>
		</Routes>
	);
};

export default App;
