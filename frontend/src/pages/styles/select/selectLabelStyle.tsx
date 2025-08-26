import { StylesConfig } from "react-select";

const dot = (color = "transparent") => ({
	alignItems: "center",
	display: "flex",

	":before": {
		backgroundColor: color,
		borderRadius: 10,
		content: '" "',
		display: "block",
		marginRight: 8,
		height: 10,
		width: 10,
	},
});

const selectLabelStyle = ({
	includeError,
	errors,
}: {
	includeError: boolean;
	errors: {} | undefined;
}) => {
	const isRed = errors && includeError;
	const colourStyles: StylesConfig<any> = {
		control: (base: any, state: any) => ({
			...base,
			borderColor: isRed
				? "#dc3545"
				: state.isFocused
					? "#86b7fe"
					: "hsl(0, 0%, 80%)",
			boxShadow: null,
			"&:hover": {
				borderColor: isRed
					? "#dc3545"
					: state.isFocused
						? "#86b7fe"
						: "hsl(0, 0%, 80%)",
			},
		}),
		placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
		singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
		option: (styles, { data }) => {
			return {
				...styles,
				backgroundColor: data.color,
			};
		},
	};
	return colourStyles;
};

export default selectLabelStyle;
