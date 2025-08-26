import { ReactNode, useCallback, useReducer } from "react";
import LoadingContext from "./LoadingContext";
import { ACTIONS, reducer, reducerInitial } from "./reducer";

const LoadingProvider = ({ children }: { children: ReactNode }) => {
	const [loadingState, dispatchLoadingState] = useReducer(
		reducer,
		reducerInitial,
	);

	const toggleSidebar = () => {
		dispatchLoadingState({ type: ACTIONS.ISHEADERSIDEBARHIDDEN, payload: {} });
	};

	const setIsHeaderSidebarHiddenSpecific = useCallback((changeTo: boolean) => {
		dispatchLoadingState({
			type: ACTIONS.ISHEADERSIDEBARHIDDENSPECIFIC,
			payload: { changeTo: changeTo },
		});
	}, []);

	const setIsLoadingGlobalSpecific = useCallback((changeTo: boolean) => {
		dispatchLoadingState({
			type: ACTIONS.ISLOADINGGLOBALSPECIFIC,
			payload: { changeTo: changeTo },
		});
	}, []);

	const ContextObject = {
		isLoadingGlobal: loadingState.isLoadingGlobal,
		setIsLoadingGlobalSpecific: setIsLoadingGlobalSpecific,
		isHeaderSidebarHidden: loadingState.isHeaderSidebarHidden,
		setIsHeaderSidebarHidden: toggleSidebar,
		setIsHeaderSidebarHiddenSpecific: setIsHeaderSidebarHiddenSpecific,
	};

	return (
		<LoadingContext.Provider value={ContextObject}>
			{children}
		</LoadingContext.Provider>
	);
};

export default LoadingProvider;
