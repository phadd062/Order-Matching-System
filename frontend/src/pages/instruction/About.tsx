import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
	faBalanceScale,
	faChartLine,
	faDivide,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
	return (
		<>
			<h2 className="mt-3">About the Order Matching System</h2>
			<section className="mt-4">
				<p>
					The <span className="fw-bold">Order Matching System</span> is a
					web-based application designed to simulate a simple financial market.
					It allows users to create and match buy/sell orders through a live
					orderbook.
				</p>
			</section>
			<section className="mt-4">
				<p className="mb-2">Key Features:</p>
				<ul>
					<li>
						<FontAwesomeIcon icon={faPenToSquare} />{" "}
						<span className="fw-bold">Real-time Order Creation</span>
					</li>
					<p className="mb-1">
						Users can place buy or sell orders with customizable price and
						quantity.
					</p>
					<li>
						<FontAwesomeIcon icon={faBalanceScale} />{" "}
						<span className="fw-bold">Automated Order Matching Engine</span>
					</li>
					<p className="mb-1">
						Orders are matched automatically based on price-time priority -
						simulating how real exchanges work.
					</p>
					<li>
						<FontAwesomeIcon icon={faChartLine} />{" "}
						<span className="fw-bold">Live Orderbook and Trade History</span>
					</li>
					<p className="mb-1">
						All active orders are displayed in real time, along with a list of
						completed trades.
					</p>
					<li>
						<FontAwesomeIcon icon={faDivide} />{" "}
						<span className="fw-bold">Partial Fills Supported</span>
					</li>
					<p className="mb-1">
						Orders can be partially matched - any unfilled quantity remains in
						the book.
					</p>
				</ul>
			</section>
			<section className="mt-5">
				<p>Use Cases:</p>
				<ul>
					<li>Educational tool for learning about financial markets.</li>
					<li>Prototype for building exchange systems.</li>
					<li>Backend matching logic demo for financial applications.</li>
				</ul>
			</section>
		</>
	);
};

export default About;
