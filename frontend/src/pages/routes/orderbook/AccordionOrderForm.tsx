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
						<Accordion.Body>Form goes here</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Col>
		</Row>
	);
};

export default AccordionOrderForm;
