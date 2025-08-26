export const ACTIONS = {
	ISLOADINGGLOBALSPECIFIC: "isLoadingGlobalSpecific",
	ISHEADERSIDEBARHIDDEN: "isHeaderSidebarHidden",
	ISHEADERSIDEBARHIDDENSPECIFIC: "isHeaderSidebarHiddenSpecfic",
};

export const reducerInitial = {
	isLoadingGlobal: true,
	isHeaderSidebarHidden: false,
};

export const reducer = (state: any, action: { type: string; payload: any }) => {
	switch (action.type) {
		case ACTIONS.ISLOADINGGLOBALSPECIFIC:
			return {
				...state,
				isLoadingGlobal: action.payload.changeTo,
			};
		case ACTIONS.ISHEADERSIDEBARHIDDEN:
			return {
				...state,
				isHeaderSidebarHidden: !state.isHeaderSidebarHidden,
			};
		case ACTIONS.ISHEADERSIDEBARHIDDENSPECIFIC:
			return {
				...state,
				isHeaderSidebarHidden: action.payload.changeTo,
			};

		default:
			return state;
	}
};
