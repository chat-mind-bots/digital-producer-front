import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "../../../Constants/RequestStatuses";
import { IBannerEnum } from "../../Banner/redux/banner.slice";
import { ITagState } from "../../Tag/redux/tag.slice";
import { UserRoleEnum } from "../../Auth/types/role.enum";

export enum INewsEnum {
	id = "id",
	name = "name",
	description = "description",
	timeRead = "timeRead",
	role = "role",
	image = "image",
	tags = "tags",
	category = "category",
	categoryId = "categoryId",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	statusCode = "statusCode",
	message = "message",
}

export interface INewsState {
	[INewsEnum.id]: string;
	[INewsEnum.name]: string;
	[INewsEnum.description]: string;
	[INewsEnum.timeRead]?: number;
	[INewsEnum.role]?: UserRoleEnum;
	[INewsEnum.image]: string;
	[INewsEnum.tags]: ITagState[];
	[INewsEnum.category]: string;
	[INewsEnum.categoryId]?: string;
	[INewsEnum.createdAt]: string;
	[INewsEnum.updatedAt]: string;

	[INewsEnum.message]?: string[];
	[INewsEnum.statusCode]?: RequestStatuses;
}

export const initialNewsState: INewsState = {
	[INewsEnum.id]: "",
	[INewsEnum.name]: "",
	[INewsEnum.description]: "",
	[INewsEnum.timeRead]: undefined,
	[INewsEnum.role]: undefined,
	[INewsEnum.image]: "",
	[INewsEnum.tags]: [],
	[INewsEnum.category]: "",
	[INewsEnum.createdAt]: "",
	[INewsEnum.updatedAt]: "",
	[INewsEnum.categoryId]: "",

	[IBannerEnum.statusCode]: RequestStatuses.PENDING,
};

export const newsSlice = createSlice({
	name: "news",
	initialState: initialNewsState,
	reducers: {
		undefined() {
			return initialNewsState;
		},
	},
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
