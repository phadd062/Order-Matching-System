import { useLoadingContext } from "store/loadingContext/LoadingContext";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEyeSlash,
	faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";

const TopRightSearchButtons = ({
	fetchOrders,
}: {
	fetchOrders: () => void;
}) => {
	const client = useHttpClient();
	const { isHeaderSidebarHidden, setIsHeaderSidebarHidden } =
		useLoadingContext();

	const resetAllData = async () => {
		await client.post("/api/orders/reset", {});
		fetchOrders();
	};

	return (
		<div className="btn-toolbar mb-2 mb-md-0">
			<div className="btn-group me-2">
				<Button
					variant="outline-secondary"
					className="shadow-none"
					onClick={setIsHeaderSidebarHidden}
				>
					<FontAwesomeIcon icon={faEyeSlash} />{" "}
					{isHeaderSidebarHidden ? "Show Sidebar" : "Hide Sidebar"}
				</Button>
				<Button variant="outline-danger" onClick={resetAllData}>
					<FontAwesomeIcon icon={faTriangleExclamation} /> Reset Data
				</Button>
			</div>
		</div>
	);
};

export default TopRightSearchButtons;
