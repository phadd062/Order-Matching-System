import {
	assetNameExactFromJSON,
	hubListFromJSON,
	departmentListFromJSON,
	assetNumberFromJSON,
	cityListFromJSON,
	provinceListFromJSON,
	UnspscListFromJSON,
	buildingListFromJSON,
	roomListFromJSON,
	manufacturerListFromJSON,
	groupDivisionFromJSON,
	modelNumberListFromJSON,
	keyContactListFromJSON,
	assetDecisionListFromJSON,
	costingCategoriesFromJSON,
	functionalityFromJSON,
} from "./searchLabelTypes";

export const fetchAssetNameExact = (
	assetNameExactData: assetNameExactFromJSON[],
	lang: string,
) => {
	const countryOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "name_fr" : "name_en";
	assetNameExactData.forEach((item: assetNameExactFromJSON) => {
		countryOptions.push({
			value: item.id,
			label: item[title],
		});
	});
	return countryOptions;
};

export const fetchHubList = (hubData: hubListFromJSON[], lang: string) => {
	const hubOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "hub_name_fr" : "hub_name_en";
	const abbr = lang === "fr" ? "abbr_fr" : "abbr_en";
	hubData.forEach((item: hubListFromJSON) => {
		hubOptions.push({
			value: item.id,
			label: `${item[title]} (${item[abbr]})`,
		});
	});
	return hubOptions;
};

export const fetchDepartmentList = (
	departmentData: departmentListFromJSON[],
	lang: string,
) => {
	const departmentOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "applied_title_fr" : "applied_title_en";
	const abbr = lang === "fr" ? "abbr_fr" : "abbr_en";
	departmentData.forEach((item: departmentListFromJSON) => {
		departmentOptions.push({
			value: item.id,
			label: `${item[title]} (${item[abbr]})`,
		});
	});
	return departmentOptions;
};

export const fetchGroupDivisionList = (
	groupDivisionData: groupDivisionFromJSON[],
) => {
	const groupDivisionOptions: {
		value: string;
		label: string;
	}[] = [];
	groupDivisionData.forEach((item: groupDivisionFromJSON) => {
		groupDivisionOptions.push({
			value: item.group_division,
			label: String(item.group_division),
		});
	});
	return groupDivisionOptions;
};

export const fetchAssetNumber = (assetNumberData: assetNumberFromJSON[]) => {
	const assetNumberOptions: {
		value: number;
		label: string;
	}[] = [];
	assetNumberData.forEach((item: assetNumberFromJSON) => {
		assetNumberOptions.push({
			value: item.asset_number,
			label: String(item.asset_number),
		});
	});
	return assetNumberOptions;
};

export const fetchUnspscList = (
	unspscData: UnspscListFromJSON[],
	lang: string,
) => {
	const unspscOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "UNSPSC_Title_fr" : "UNSPSC_Title_en";
	unspscData.forEach((item: UnspscListFromJSON) => {
		unspscOptions.push({
			value: item.id,
			label: `${item.UNSPSC_Code} (${item[title]})`,
		});
	});
	return unspscOptions;
};

export const fetchProvinceList = (
	provinceData: provinceListFromJSON[],
	lang: string,
) => {
	const countryOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "province_name_fr" : "province_name_en";
	const abbr = lang === "fr" ? "abbr_fr" : "abbr_en";
	provinceData.forEach((item: provinceListFromJSON) => {
		countryOptions.push({
			value: item.id,
			label: `${item[title]} (${item[abbr]})`,
		});
	});
	return countryOptions;
};

export const fetchCityList = (
	provinceData: cityListFromJSON[],
	lang: string,
) => {
	const cityOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "city_name_fr" : "city_name_en";
	const province_title =
		lang === "fr" ? "province_name_fr" : "province_name_en";
	provinceData.forEach((item: cityListFromJSON) => {
		cityOptions.push({
			value: item.id,
			label: `${item[title]} (${item["province"][province_title]})`,
		});
	});
	return cityOptions;
};

export const fetchBuildingList = (
	provinceData: buildingListFromJSON[],
	lang: string,
) => {
	const buildingOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "building_name_fr" : "building_name_en";
	provinceData.forEach((item: buildingListFromJSON) => {
		buildingOptions.push({
			value: item.id,
			label: item[title],
		});
	});
	return buildingOptions;
};

export const fetchRoomList = (roomData: roomListFromJSON[], lang: string) => {
	const roomOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "room_name_fr" : "room_name_en";
	roomData.forEach((item: roomListFromJSON) => {
		roomOptions.push({
			value: item.id,
			label: item[title],
		});
	});
	return roomOptions;
};

export const fetchManufacturerList = (
	manufacturerData: manufacturerListFromJSON[],
) => {
	const manufacturerOptions: {
		value: number;
		label: string;
	}[] = [];
	manufacturerData.forEach((item: manufacturerListFromJSON) => {
		manufacturerOptions.push({
			value: item.id,
			label: item.manufacturer,
		});
	});
	return manufacturerOptions;
};

export const fetchModelNumberList = (
	modelNumberData: modelNumberListFromJSON[],
) => {
	const modelNumberOptions: {
		value: number;
		label: string;
	}[] = [];
	modelNumberData.forEach((item: modelNumberListFromJSON) => {
		modelNumberOptions.push({
			value: item.id,
			label: item.model_number,
		});
	});
	return modelNumberOptions;
};

export const fetchKeyContactList = (
	keyContactData: keyContactListFromJSON[],
) => {
	const keyContactOptions: {
		value: number;
		label: string;
	}[] = [];
	keyContactData.forEach((item: keyContactListFromJSON) => {
		keyContactOptions.push({
			value: item.id,
			label: `${item.last_name}, ${item.first_name}`,
		});
	});
	return keyContactOptions;
};

export const fetchAssetDecisionList = (
	assetDecisionData: assetDecisionListFromJSON[],
	lang: string,
) => {
	const assetDecisionOptions: {
		value: number;
		label: string;
	}[] = [];
	const title = lang === "fr" ? "asset_decision_fr" : "asset_decision_en";
	assetDecisionData.forEach((item: assetDecisionListFromJSON) => {
		assetDecisionOptions.push({
			value: item.id,
			label: item[title],
		});
	});
	return assetDecisionOptions;
};

export const fetchCostingCategoriesList = (
	costingCategoriesData: costingCategoriesFromJSON[],
	lang: string,
) => {
	const costingCategoriesOptions: {
		value: number;
		label: string;
	}[] = [];
	const title =
		lang === "fr" ? "costing_categories_fr" : "costing_categories_en";
	costingCategoriesData.forEach((item: costingCategoriesFromJSON) => {
		costingCategoriesOptions.push({
			value: item.id,
			label: item[title],
		});
	});
	return costingCategoriesOptions;
};

export const fetchEquipmentSpecificationList = (
	equipmentSpecificationData: string[],
	lang: string,
	tm: any,
) => {
	const equipmentSpecificationOptions: {
		value: string;
		label: string;
	}[] = [];
	equipmentSpecificationData.forEach((item: string) => {
		equipmentSpecificationOptions.push({
			value: item,
			label: tm[item][lang],
		});
	});
	return equipmentSpecificationOptions;
};

export const fetchVibrationSensitivitiesList = (
	vibrationSensitivitiesData: string[],
	lang: string,
	tm: any,
) => {
	const vibrationSensitivitiesOptions: {
		value: string;
		label: string;
	}[] = [];
	vibrationSensitivitiesData.forEach((item: string) => {
		vibrationSensitivitiesOptions.push({
			value: item,
			label: tm[item][lang],
		});
	});
	return vibrationSensitivitiesOptions;
};

export const fetchFinancialInfoList = (
	financialInfoData: string[],
	lang: string,
	tm: any,
) => {
	const financialInfoOptions: {
		value: string;
		label: string;
	}[] = [];
	financialInfoData.forEach((item: string) => {
		financialInfoOptions.push({
			value: item,
			label: tm[item][lang],
		});
	});
	return financialInfoOptions;
};

export const fetchMechanicalInfoList = (
	mechanicalInfoData: string[],
	lang: string,
	tm: any,
) => {
	const mechanicalInfoOptions: {
		value: string;
		label: string;
	}[] = [];
	mechanicalInfoData.forEach((item: string) => {
		mechanicalInfoOptions.push({
			value: item,
			label: tm[item][lang],
		});
	});
	return mechanicalInfoOptions;
};

export const fetchFunctionality = (
	functionalityData: functionalityFromJSON[],
) => {
	const functionalityOptions: {
		value: string;
		label: string;
	}[] = [];
	functionalityData.forEach((item: functionalityFromJSON) => {
		functionalityOptions.push({
			value: item.functionality,
			label: String(item.functionality),
		});
	});
	return functionalityOptions;
};
