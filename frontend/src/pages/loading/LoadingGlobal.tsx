import Col from "react-bootstrap/Col";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingGlobal = ({ size }: { size?: number }) => {
	return (
		<Col>
			<div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
				<ClipLoader size={size || 200} />
			</div>
		</Col>
	);
};

export default LoadingGlobal;
