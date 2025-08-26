export type searchFieldValue = {
	value: number;
	label: string;
};

export type searchFieldValueString = {
	value: string;
	label: string;
};

export type assetNameExactFromJSON = {
	id: number;
	name_en: string;
	name_fr: string;
};

export type hubListFromJSON = {
	id: number;
	abbr_en: string;
	abbr_fr: string;
	hub_name_en: string;
	hub_name_fr: string;
};

export type departmentListFromJSON = {
	id: number;
	abbr_en: string;
	abbr_fr: string;
	applied_title_en: string;
	applied_title_fr: string;
};

export type groupDivisionFromJSON = {
	group_division: string;
};

export type assetNumberFromJSON = {
	asset_number: number;
};

export type UnspscListFromJSON = {
	id: number;
	UNSPSC_Code: number;
	UNSPSC_Title_en: string;
	UNSPSC_Title_fr: string;
};

export type provinceListFromJSON = {
	id: number;
	abbr_en: string;
	abbr_fr: string;
	province_name_en: string;
	province_name_fr: string;
};

export type cityListFromJSON = {
	id: number;
	province: {
		province_name_en: string;
		province_name_fr: string;
	};
	city_name_en: string;
	city_name_fr: string;
};

export type buildingListFromJSON = {
	id: number;
	building_name_en: string;
	building_name_fr: string;
};

export type roomListFromJSON = {
	id: number;
	room_name_en: string;
	room_name_fr: string;
};

export type manufacturerListFromJSON = {
	id: number;
	manufacturer: string;
};

export type modelNumberListFromJSON = {
	id: number;
	model_number: string;
};

export type keyContactListFromJSON = {
	id: number;
	first_name: string;
	last_name: string;
};

export type assetDecisionListFromJSON = {
	id: number;
	asset_decision_en: string;
	asset_decision_fr: string;
};

export type costingCategoriesFromJSON = {
	id: number;
	costing_categories_en: string;
	costing_categories_fr: string;
};

export type functionalityFromJSON = {
	functionality: string;
};
