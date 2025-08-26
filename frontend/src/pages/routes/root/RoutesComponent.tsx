import { Routes, Route, Navigate } from "react-router-dom";
import { useLoadingContext } from "store/loadingContext/LoadingContext";
import LoadingGlobal from "pages/loading/LoadingGlobal";
import {
	AllCommunityModule,
	ModuleRegistry,
	provideGlobalGridOptions,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import Orderbook from "../orderbook/Orderbook";
import Add from "pages/instruction/Add";

const RoutesComponent = () => {
	const { isLoadingGlobal, isHeaderSidebarHidden, setIsLoadingGlobalSpecific } =
		useLoadingContext();

	ModuleRegistry.registerModules([AllCommunityModule]);
	provideGlobalGridOptions({ theme: "legacy" });

	useEffect(() => {
		setTimeout(() => setIsLoadingGlobalSpecific(false), 500);
	}, []);

	return (
		<>
			{isLoadingGlobal && <LoadingGlobal size={200} />}
			{!isLoadingGlobal && (
				<div className="wrapper">
					{!isHeaderSidebarHidden && <Sidebar />}
					<div className="main ps-3 pe-3">
						<main className={""}>
							<Routes>
								<Route path="*" element={<Navigate to="/orders" />} />
								<Route path="orders" element={<Orderbook />} />
								<Route path="about" element={<Add />} />
							</Routes>
						</main>
					</div>
				</div>
			)}
		</>
	);
};

export default RoutesComponent;
