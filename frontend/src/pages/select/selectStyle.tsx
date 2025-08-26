const selectStyle = (errorsObj: {
	includeError: boolean;
	errors: {} | undefined;
}) => {
	const { includeError, errors } = errorsObj;
	const isRed = errors && includeError;

	return {
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
	};
};

export default selectStyle;
