import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "../../../Constants/RequestStatuses";
import { IBannerEnum } from "../../Banner/redux/banner.slice";

export enum IDocumentEnum {
	id = "id",
	createdAt = "createdAt",
	description = "description",
	name = "name",
	owner = "owner",
	updatedAt = "updatedAt",
	url = "url",
	statusCode = "statusCode",
	message = "message",
}

export interface IDocumentState {
	[IDocumentEnum.id]: string;
	[IDocumentEnum.createdAt]: string;
	[IDocumentEnum.description]: string;
	[IDocumentEnum.name]: string;
	[IDocumentEnum.owner]: string;
	[IDocumentEnum.updatedAt]: string;
	[IDocumentEnum.url]: string;

	[IDocumentEnum.message]?: string[];
	[IDocumentEnum.statusCode]?: RequestStatuses;
}

export const initialDocumentState: IDocumentState = {
	[IDocumentEnum.id]: "",
	[IDocumentEnum.createdAt]: "",
	[IDocumentEnum.description]: "",
	[IDocumentEnum.name]: "",
	[IDocumentEnum.owner]: "",
	[IDocumentEnum.updatedAt]: "",
	[IDocumentEnum.url]: "",

	[IBannerEnum.statusCode]: RequestStatuses.PENDING,
};

export const documentSlice = createSlice({
	name: "document",
	initialState: initialDocumentState,
	reducers: {
		undefined() {
			return initialDocumentState;
		},
	},
});

export const documentActions = documentSlice.actions;
export const documentReducer = documentSlice.reducer;
