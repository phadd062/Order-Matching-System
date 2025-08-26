import "./buttonUnstyles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BannerEN from "images/banner2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

type FormCreateValues = {
	username: string;
	password: string;
};

const Login = () => {
	const client = useHttpClient();
	const navigate = useNavigate();
	const [showPage, setShowPage] = useState(false);
	const [error, setError] = useState("");
	const [disableSubmit, setDisableSubmit] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		setFocus,
		formState: { errors },
	} = useForm<FormCreateValues>();

	const nextLocation = "/orders";

	useEffect(() => {
		const loginClient = async () => {
			const isAuthenticated = await client.isAuthenticated();
			if (isAuthenticated) navigate(nextLocation);
			else setShowPage(true);
		};
		loginClient();
	}, [navigate, client]);

	const loginSubmitHandler: SubmitHandler<FormCreateValues> = (data) => {
		const fetchToken = async () => {
			setDisableSubmit(true);
			const loginStatus = await client.login(data.username, data.password);
			if (loginStatus === 200) navigate(nextLocation);
			else {
				setError("Your username and password didn't match. Please try again");
				reset({ username: "", password: "" });
				setFocus("username");
				setDisableSubmit(false);
			}
		};
		fetchToken();
	};

	const toggleCreateUserHandler = () => navigate("/user/create");

	return (
		<>
			{showPage && (
				<>
					<div className="container-fluid">
						<div
							className="
                d-flex
                justify-content-between
                flex-wrap flex-md-nowrap
                align-items-center
                pt-3
                pb-2
                mb-3
                border-bottom
            "
						>
							<div className="container">
								<div className="row">
									<div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xxl-4 mt-2 mb-2">
										<h2>Order Matching System</h2>
									</div>
									<div
										className="
                            col-12 col-sm-4 col-md-6 col-lg-7 col-xxl-8
                            d-flex
                            justify-content-end
                        "
									>
										<button
											className="nav-link unstyled-lang-button"
											onClick={toggleCreateUserHandler}
										>
											<FontAwesomeIcon icon={faUserPlus} /> Create User
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="row mb-5">
							<div className="col-12 d-flex justify-content-center d-none d-sm-block">
								<img src={BannerEN} className="img-fluid w-100" />
							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-10 col-sm-7 col-md-5 col-lg-4 col-xxl-3 mx-auto">
								<form
									onSubmit={handleSubmit(loginSubmitHandler)}
									autoComplete="off"
								>
									<div className="row align-items-center mb-3">
										<div className="col-xxl-12">
											<Form.Control
												type="text"
												placeholder="Username"
												{...register("username", { required: true })}
												className={errors.username ? "is-invalid" : ""}
											/>
											{errors.username && (
												<Form.Text className="text-danger">
													{"Username is required"}
												</Form.Text>
											)}
										</div>
									</div>

									<div className="row align-items-center mb-4">
										<div className="col-xxl-12 mb-2">
											<Form.Control
												type="password"
												placeholder={"Password"}
												{...register("password", { required: true })}
												className={errors.password ? "is-invalid" : ""}
											/>
											{errors.password && (
												<Form.Text className="text-danger">
													{"Password is required"}
												</Form.Text>
											)}
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-12 d-grid">
											<Button type="submit" disabled={disableSubmit}>
												{disableSubmit && "Verifying credentials..."}
												{!disableSubmit && "Login"}
											</Button>
										</div>
									</div>

									<div className="row">
										<div className="col-12">
											<div style={{ color: "red" }}>
												<p>{error}</p>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Login;
