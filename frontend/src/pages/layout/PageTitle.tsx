import React from "react";
import { ReactNode } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PageTitle = ({ children }: { children: ReactNode }) => {
	return (
		<Row>
			<Col>
				<div className="d-flex justify-content-between align-items-center flex-wrap pt-3 pb-2 mb-3 border-bottom">
					{children}
				</div>
			</Col>
		</Row>
	);
};

export default PageTitle;
