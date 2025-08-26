import { useLangContext } from "store/langContext/LangContext";
import { useMainContext } from "store/mainContext/MainContext";

const Soon = () => {
	const { lang } = useLangContext();
	const { tm } = useMainContext();
	return <h2 className="mt-4">{tm.no_data[lang]}</h2>;
};

export default Soon;
