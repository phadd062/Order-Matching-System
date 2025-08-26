import { AuthenticationError } from "./helpers";

class ConvertUnit {
	#num: number;

	constructor(number: number) {
		this.#num = number;
	}

	convertToMonthFrom = (unit: "month" | "year") => {
		switch (unit) {
			case "month":
				return this.#num;
			case "year":
				return this.#num * 12;
			default:
				throw new AuthenticationError("Conversion not valid");
		}
	};
}

export default ConvertUnit;
