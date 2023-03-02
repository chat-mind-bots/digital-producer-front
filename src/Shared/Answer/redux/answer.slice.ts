import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";

export enum IAnswerEnum {
	id = "id",
	key = "key",
	value = "value",

	statusCode = "statusCode",
}

export interface IAnswerState {
	[IAnswerEnum.id]: string;
	[IAnswerEnum.key]: string;
	[IAnswerEnum.value]: string;

	[IAnswerEnum.statusCode]?: RequestStatuses;
}

export const initialAnswerState: IAnswerState = {
	[IAnswerEnum.id]: "",
	[IAnswerEnum.key]: "",
	[IAnswerEnum.value]: "",

	[IAnswerEnum.statusCode]: RequestStatuses.PENDING,
};

export const tagSlice = createSlice({
	name: "tag",
	initialState: initialAnswerState,
	reducers: {
		undefined() {
			return initialAnswerState;
		},
	},
});

export const tagActions = tagSlice.actions;
export const tagReducer = tagSlice.reducer;
