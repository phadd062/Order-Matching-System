export class AuthenticationError extends Error {}

export const isString = (s: any) => {
	return typeof s === "string" || s instanceof String;
};

export const range = function* (start = 0, stop: number, step = 1) {
	let cur = stop === undefined ? 0 : start;
	let max = stop === undefined ? start : stop;
	for (let i = cur; step < 0 ? i > max : i < max; i += step) yield i;
};

export const convertNumber = (x: number, lang: string) => {
	if (lang === "fr") {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const fetchAssetValues = (data: any, setValue: any) => {
	for (const [key, value] of Object.entries(data)) {
		if (value !== null && value !== undefined) setValue(key, value);
	}
};

export const rowOption = (locationSearch: string) =>
	locationSearch !== "" ? "&" : "?";

export type selectOptionsType = {
	value: number;
	label: string;
};

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const errorMessages = (responseData: any, setError: any) => {
	for (const [key, value] of Object.entries<string[]>(responseData)) {
		const keyError: any = key;
		setError(keyError, {
			type: "string",
			message: value[0],
		});
	}
};
