import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";

export enum ISubCategoryEnum {
	id = "id",
	title = "title",
	tagsColor = "tagsColor",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	category = "category",
	categoryId = "categoryId",

	message = "message",
	statusCode = "statusCode",
}

export interface ISubCategoryState {
	[ISubCategoryEnum.id]: string;
	[ISubCategoryEnum.title]: string;
	[ISubCategoryEnum.tagsColor]: string;
	[ISubCategoryEnum.createdAt]: string;
	[ISubCategoryEnum.updatedAt]: string;
	[ISubCategoryEnum.category]: string; // хз поч в апи get категории выдается category
	[ISubCategoryEnum.categoryId]?: string;

	[ISubCategoryEnum.message]?: string[];
	[ISubCategoryEnum.statusCode]?: RequestStatuses;
}

export const initialSubCategoryState: ISubCategoryState = {
	[ISubCategoryEnum.id]: "",
	[ISubCategoryEnum.title]: "",
	[ISubCategoryEnum.tagsColor]: "",
	[ISubCategoryEnum.createdAt]: "",
	[ISubCategoryEnum.updatedAt]: "",
	[ISubCategoryEnum.category]: "",

	[ISubCategoryEnum.statusCode]: RequestStatuses.PENDING,
};

export const subCategorySlice = createSlice({
	name: "subCategory",
	initialState: initialSubCategoryState,
	reducers: {
		undefined() {
			return initialSubCategoryState;
		},
	},
});

export const subCategoryActions = subCategorySlice.actions;
export const subCategoryReducer = subCategorySlice.reducer;
