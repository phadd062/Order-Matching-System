import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";
import PageTitle from "pages/layout/PageTitle";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, ButtonGroup, ButtonToolbar, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FormGroupControl from "pages/helper/FormGroupControl";

type FormValues = {
	firstname: string;
	lastname: string;
	username: string;
	password: string;
};

const CreateAccount = () => {
	const [submitDisabled, setSubmitDisabled] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setError,
	} = useForm<FormValues>();
	const navigate = useNavigate();
	const client = useHttpClient();

	const backList = () => navigate("../search/");

	const AccountSubmitHandler: SubmitHandler<FormValues> = (data) => {
		setSubmitDisabled(true);

		const fetchPost = async () => {
			const response = await client.createUser(
				data.firstname,
				data.lastname,
				data.username,
				data.password,
			);
			if (response.responseOK) navigate("/login");
			if (response.clientError) {
				setError("username", { message: "This username is not available." });
				setSubmitDisabled(false);
			}
		};
		fetchPost();
	};

	return (
		<Row className="m-3">
			<PageTitle>
				<h2>Create User</h2>
			</PageTitle>

			<Row className="mt-3">
				<Col>
					<Form onSubmit={handleSubmit(AccountSubmitHandler)}>
						<Row>
							<FormGroupControl
								errors={errors.firstname}
								label="First Name"
								id="firstname"
								type="text"
								className="col-2 mb-3"
								register={{
									...register("firstname", {
										required: "This field is required",
									}),
								}}
							/>

							<FormGroupControl
								errors={errors.lastname}
								label="Last Name"
								id="lastname"
								type="text"
								className="col-2 mb-3"
								register={{
									...register("lastname", {
										required: "This field is required",
									}),
								}}
							/>

							<FormGroupControl
								errors={errors.username}
								label="Username"
								id="username"
								type="text"
								className="col-3 mb-3"
								register={{
									...register("username", {
										required: "This field is required",
									}),
								}}
							/>

							<FormGroupControl
								errors={errors.password}
								label="Password"
								id="password"
								type="password"
								className="col-5 mb-3"
								register={{
									...register("password", {
										required: "This field is required",
									}),
								}}
							/>

							<ButtonToolbar aria-label="Toolbar with button groups">
								<ButtonGroup className="me-2">
									<Button onClick={backList}>
										<FontAwesomeIcon icon={faArrowLeft} /> Go Back
									</Button>
								</ButtonGroup>
								<ButtonGroup>
									<Button
										variant="primary"
										type="submit"
										disabled={submitDisabled}
									>
										{submitDisabled && <Spinner animation="border" size="sm" />}{" "}
										Add User Account
									</Button>
								</ButtonGroup>
							</ButtonToolbar>
						</Row>
					</Form>
				</Col>
			</Row>
		</Row>
	);
};

export default CreateAccount;
