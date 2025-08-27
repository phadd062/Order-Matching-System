import selectStyle from "pages/styles/select/selectStyle";
import { useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";

const EVENTKEYONE = "1";
const EVENTKEYTWO = "2";

type FormValues = {
	price: number;
	quantity: number;
	type: string;
};

type OptionType = {
	label: string;
	value: string;
};

const AccordionOrderForm = ({ fetchOrders }: { fetchOrders: () => void }) => {
	const client = useHttpClient();
	const { register, handleSubmit, control } = useForm<FormValues>();
	const [activeKey, setActiveKey] = useState(EVENTKEYONE);

	const clickedAccordionOne = () => setActiveKey(EVENTKEYONE);
	const clickedAccordionTwo = () => setActiveKey(EVENTKEYTWO);

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		await client.post("/api/orders", data);
		fetchOrders();
	};

	return (
		<Row>
			<Col>
				<Accordion className="mb-3" activeKey={activeKey}>
					<Accordion.Item onClick={clickedAccordionOne} eventKey={EVENTKEYONE}>
						<Accordion.Header>Create Order</Accordion.Header>
						<Accordion.Body>
							<Form onSubmit={handleSubmit(onSubmit)}>
								<Row>
									<Form.Group
										className="col-3 col-xl-4"
										controlId="name_contains"
									>
										<Form.Control
											{...register("price")}
											type="text"
											placeholder="Price"
										/>
									</Form.Group>

									<Form.Group className="col-3" controlId="name_contains">
										<Form.Control
											{...register("quantity")}
											type="text"
											placeholder="Quantity"
										/>
									</Form.Group>

									<Form.Group className="col-3" controlId="order_type">
										<Controller
											name="type"
											control={control}
											rules={{ required: true }}
											render={({ field }) => {
												const options: OptionType[] = [
													{ label: "Buy", value: "Buy" },
													{ label: "Sell", value: "Sell" },
												];
												return (
													<Select<OptionType>
														{...field}
														inputId="order_type"
														menuPortalTarget={document.body}
														isClearable
														isSearchable={false}
														styles={{
															...selectStyle({
																errors: {},
																includeError: false,
															}),
															menuPortal: (base: any) => ({
																...base,
																zIndex: 9999,
															}),
														}}
														options={[
															{ label: "Buy", value: "Buy" },
															{ label: "Sell", value: "Sell" },
														]}
														placeholder="Type"
														value={
															options.find(
																(opt) => opt.value === field.value,
															) || null
														}
														onChange={(selectedOption) =>
															field.onChange(selectedOption?.value)
														}
													/>
												);
											}}
										/>
									</Form.Group>

									<div className="col-3 col-xl-2 d-sm-grid">
										<Button
											className="shadow-none"
											variant="primary"
											type="submit"
										>
											Submit Order
										</Button>
									</div>
								</Row>
							</Form>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item onClick={clickedAccordionTwo} eventKey={EVENTKEYTWO}>
						<Accordion.Header>Example/Instructions/About</Accordion.Header>
						<Accordion.Body>
							<>
								<h4>How to Use the Order Matching System</h4>
								<section className="mt-3">
									<p className="mb-2">
										1. <span className="fw-bold">Create an Order:</span> Use the
										Create Order form at the top of the page.
									</p>
									<ul>
										<li>
											<span className="fw-bold">Price: </span> Enter the price
											at which you want to buy or sell.
										</li>
										<li>
											<span className="fw-bold">Quantity:</span> Specify how
											many units you want to trade.
										</li>
										<li>
											<span className="fw-bold">Type:</span> Choose either Buy
											or Sell.
										</li>
										<li>
											Click <span className="fw-bold">Submit Order</span> to add
											your order to the orderbook.
										</li>
									</ul>
								</section>
								<section className="mt-3">
									<p className="mb-2">
										2. <span className="fw-bold">View the Orderbook:</span> The
										orderbook is divided into two sections.
									</p>
									<ul>
										<li>
											<span className="fw-bold">Bid (Buy Orders):</span> Sorted
											by highest price first.
										</li>
										<li>
											<span className="fw-bold">Ask (Sell Orders):</span> Sorted
											by lowest price first.
										</li>
									</ul>
								</section>
								<section className="mt-3">
									<p className="mb-2">
										3. <span className="fw-bold">Automatic Matching:</span> When
										a buy and sell order have matching prices.
									</p>
									<ul>
										<li>The system automatically executes the trade.</li>
										<li>
											The system moves the matched orders to the Filled Orders
											section.
										</li>
									</ul>
								</section>
								<section className="mt-3">
									<p className="mb-2">
										4. <span className="fw-bold">Reset the Orderbook:</span> Use
										the Reset Data button in the top-right corner to clear all
										data and start fresh.
									</p>
								</section>
							</>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Col>
		</Row>
	);
};

export default AccordionOrderForm;
