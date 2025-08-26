import { StylesConfig } from "react-select";

const selectLabelSearchStyle = ({
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
		option: (styles, { data }) => {
			return {
				...styles,
				backgroundColor: data.color,
			};
		},
	};
	return colourStyles;
};

export default selectLabelSearchStyle;
