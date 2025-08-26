import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
	faCode,
	faCircleInfo,
	faBars,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";

const Sidebar = () => {
	const [sidebarExpand, setSidebarExpand] = useState(true);
	const client = useHttpClient();

	return (
		<>
			<aside id="sidebar" className={sidebarExpand ? "expand" : ""}>
				<div className="d-flex">
					<button
						onClick={() => setSidebarExpand(!sidebarExpand)}
						className="toggle-btn"
						type="button"
					>
						<FontAwesomeIcon size="lg" icon={faBars} />
					</button>
					<div className="sidebar-logo">
						<a style={{ cursor: "default" }}>Order Matching</a>
					</div>
				</div>
				<ul className="sidebar-nav">
					<li className="sidebar-item">
						<NavLink className="sidebar-link" to="/orders">
							<Row className="fw-medium fs-6">
								<Col xs={2}>
									<FontAwesomeIcon icon={faCode} />
								</Col>
								<Col xs={10}>
									<span>Orderbook</span>
								</Col>
							</Row>
						</NavLink>
					</li>
					<li className="sidebar-item">
						<NavLink className="sidebar-link" to="/about">
							<Row className="fw-medium fs-6">
								<Col xs={2}>
									<FontAwesomeIcon icon={faCircleInfo} />
								</Col>
								<Col xs={10}>
									<span>About</span>
								</Col>
							</Row>
						</NavLink>
					</li>
					<li className="sidebar-item">
						<a
							onClick={() => client.logout()}
							style={{ cursor: "pointer" }}
							className="sidebar-link"
						>
							<Row className="fw-medium fs-6">
								<Col xs={2}>
									<FontAwesomeIcon icon={faSignOutAlt} />
								</Col>
								<Col xs={10}>
									<span>Logout</span>
								</Col>
							</Row>
						</a>
					</li>
				</ul>
			</aside>
		</>
	);
};

export default Sidebar;
