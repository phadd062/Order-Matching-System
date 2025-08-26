import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";
import PageTitle from "./PageTitle";
import AccordionOrderForm from "./AccordionOrderForm";
import TopRightSearchButtons from "./TopRightSearchButtons";

type Order = {
	id: number;
	price: number;
	quantity: number;
	originalQuantity: number;
	type: string;
	timestamp: Date;
};

const Orderbook = () => {
	const client = useHttpClient();

	const [rowDataBuyOrders, setRowDataBuyOrders] = useState<Order[]>([]);
	const [rowDataSellOrders, setRowDataSellOrders] = useState<Order[]>([]);
	const [rowDataOrderbook, setRowDataOrderbook] = useState<Order[]>([]);
	const [rowDataFilled, setRowDataFilled] = useState<Order[]>([]);
	const [colDefs] = useState<ColDef<Order>[]>([
		{ field: "id", width: 75 },
		{ field: "price", width: 100 },
		{ field: "quantity", width: 100 },
		{ field: "type", width: 100 },
		{
			field: "timestamp",
			headerName: "Created Date/Time",
			flex: 1,
			valueFormatter: (params) => {
				const date = new Date(params.value);
				return date.toLocaleString();
			},
		},
	]);

	const [colDefsFilled] = useState<ColDef<Order>[]>([
		{ field: "id", width: 75 },
		{ field: "price", width: 100 },
		{ field: "originalQuantity", headerName: "Quantity", width: 100 },
		{ field: "type", width: 100 },
		{
			field: "timestamp",
			headerName: "Created Date/Time",
			flex: 1,
			valueFormatter: (params) => {
				const date = new Date(params.value);
				return date.toLocaleString();
			},
		},
	]);

	const fetchBuyOrders = async () => {
		const res = await client.get("/api/orders/type?buyorsell=buy");
		setRowDataBuyOrders(res.data);
	};

	const fetchSellOrders = async () => {
		const res = await client.get("/api/orders/type?buyorsell=sell");
		setRowDataSellOrders(res.data);
	};

	const fetchOrderbook = async () => {
		const res = await client.get("/api/orders/orderbook");
		setRowDataOrderbook(res.data);
	};

	const fetchFilledOrders = async () => {
		const res = await client.get("/api/orders/filled");
		setRowDataFilled(res.data);
	};

	const fetchAll = () => {
		fetchBuyOrders();
		fetchSellOrders();
		fetchOrderbook();
		fetchFilledOrders();
	};

	useEffect(() => fetchAll(), []);

	return (
		<>
			<PageTitle>
				<h1 className="h2">Order Matching System</h1>
				<TopRightSearchButtons fetchOrders={fetchAll} />
			</PageTitle>
			<AccordionOrderForm fetchOrders={fetchAll} />
			<Row>
				<Col>
					<h1>Bid</h1>
					<div className="ag-theme-alpine" style={{ height: 250 }}>
						<AgGridReact rowData={rowDataBuyOrders} columnDefs={colDefs} />
					</div>
				</Col>
				<Col>
					<h1>Ask</h1>
					<div className="ag-theme-alpine" style={{ height: 250 }}>
						<AgGridReact rowData={rowDataSellOrders} columnDefs={colDefs} />
					</div>
				</Col>
			</Row>
			<Row className="mt-4 mb-2">
				<Col>
					<h1>Orderbook</h1>
					<div className="ag-theme-alpine" style={{ height: 250 }}>
						<AgGridReact rowData={rowDataOrderbook} columnDefs={colDefs} />
					</div>
				</Col>
				<Col>
					<h1>Filled Orders</h1>
					<div className="ag-theme-alpine" style={{ height: 250 }}>
						<AgGridReact rowData={rowDataFilled} columnDefs={colDefsFilled} />
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Orderbook;
