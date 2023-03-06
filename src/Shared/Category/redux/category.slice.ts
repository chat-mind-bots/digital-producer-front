import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";

import { ISubCategoryState } from "../../SubCategory/redux/subCategory.slice";

export enum ICategoryEnum {
	id = "id",
	title = "title",
	tagsColor = "tagsColor",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	subCategories = "subCategories",

	message = "message",
	statusCode = "statusCode",
}

export interface ICategoryState {
	[ICategoryEnum.id]: string;
	[ICategoryEnum.title]: string;
	[ICategoryEnum.tagsColor]: string;
	[ICategoryEnum.createdAt]: string;
	[ICategoryEnum.updatedAt]: string;
	[ICategoryEnum.subCategories]?: ISubCategoryState[];

	[ICategoryEnum.message]?: string[];
	[ICategoryEnum.statusCode]?: RequestStatuses;
}

export const initialCategoryState: ICategoryState = {
	[ICategoryEnum.id]: "",
	[ICategoryEnum.title]: "",
	[ICategoryEnum.tagsColor]: "",
	[ICategoryEnum.createdAt]: "",
	[ICategoryEnum.updatedAt]: "",
	[ICategoryEnum.subCategories]: [],

	[ICategoryEnum.statusCode]: RequestStatuses.PENDING,
};

export const categorySlice = createSlice({
	name: "category",
	initialState: initialCategoryState,
	reducers: {
		undefined() {
			return initialCategoryState;
		},
	},
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
