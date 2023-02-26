import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";

export enum ITagEnum {
	id = "id",
	name = "name",
	background = "background",
	color = "color",

	statusCode = "statusCode",
}

export interface ITagState {
	[ITagEnum.id]: string;
	[ITagEnum.name]: string;
	[ITagEnum.background]: string;
	[ITagEnum.color]: string;

	[ITagEnum.statusCode]?: RequestStatuses;
}

export const initialTagState: ITagState = {
	[ITagEnum.id]: "",
	[ITagEnum.name]: "",
	[ITagEnum.background]: "",
	[ITagEnum.color]: "",

	[ITagEnum.statusCode]: RequestStatuses.PENDING,
};

export const tagSlice = createSlice({
	name: "tag",
	initialState: initialTagState,
	reducers: {
		undefined() {
			return initialTagState;
		},
	},
});

export const tagActions = tagSlice.actions;
export const tagReducer = tagSlice.reducer;
