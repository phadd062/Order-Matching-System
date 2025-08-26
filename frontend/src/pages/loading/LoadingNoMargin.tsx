import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingNoMargin = ({ size }: { size?: number }) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setError(true), 10000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Col>
			<div className="d-flex flex-column align-items-center">
				<ClipLoader size={size || 75} />
				{error && (
					<h6 className="mt-3">
						Taking longer than expected. Contact administrator!
					</h6>
				)}
			</div>
		</Col>
	);
};

export default LoadingNoMargin;
