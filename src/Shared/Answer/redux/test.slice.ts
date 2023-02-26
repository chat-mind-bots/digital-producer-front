import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";

export enum IAnswersEnum {
	id = "id",
	key = "key",
	value = "value",
	statusCode = "statusCode",
}

export interface IAnswersState {
	[IAnswersEnum.id]: string;
	[IAnswersEnum.key]: string;
	[IAnswersEnum.value]: string;

	[IAnswersEnum.statusCode]?: RequestStatuses;
}

export const initialAnswersState: IAnswersState = {
	[IAnswersEnum.id]: "",
	[IAnswersEnum.key]: "",
	[IAnswersEnum.value]: "",

	[IAnswersEnum.statusCode]: RequestStatuses.PENDING,
};

export const answersSlice = createSlice({
	name: "answers",
	initialState: initialAnswersState,
	reducers: {
		undefined() {
			return initialAnswersState;
		},
	},
});

export const answersActions = answersSlice.actions;
export const answersReducer = answersSlice.reducer;
