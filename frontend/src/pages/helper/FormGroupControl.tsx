import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const FormGroupControl = ({
	label,
	id,
	errors,
	register,
	type,
	className,
}: {
	label: string;
	id: string;
	errors: any;
	register: {};
	type: string;
	className: string;
}) => {
	return (
		<Form.Group controlId={id} className={className}>
			<Form.Label>{label}</Form.Label>
			<Col>
				<Form.Control
					className={errors && "is-invalid"}
					{...register}
					type={type}
				/>
				{errors && (
					<Form.Text className="text-danger">{errors.message}</Form.Text>
				)}
			</Col>
		</Form.Group>
	);
};

export default FormGroupControl;
