import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";

import { IOwnerState } from "../../Owner/redux/owner.slice";
import { IAnswersState } from "../../Answer/redux/test.slice";

export enum ITestEnum {
	id = "id",
	name = "name",
	description = "description",
	question = "question",
	answers = "answers",
	rightAnswer = "rightAnswer",
	owner = "owner",
	createdAt = "createdAt",
	updatedAt = "updatedAt",

	message = "message",
	statusCode = "statusCode",
}

export interface ITestState {
	[ITestEnum.id]: string;
	[ITestEnum.name]: string;
	[ITestEnum.description]: string;
	[ITestEnum.question]: string;
	[ITestEnum.answers]?: IAnswersState[];
	[ITestEnum.rightAnswer]: string;
	[ITestEnum.owner]?: IOwnerState;
	[ITestEnum.createdAt]?: string;
	[ITestEnum.updatedAt]?: string;

	[ITestEnum.message]?: string[];
	[ITestEnum.statusCode]?: RequestStatuses;
}

export const initialTestState: ITestState = {
	[ITestEnum.id]: "",
	[ITestEnum.name]: "",
	[ITestEnum.description]: "",
	[ITestEnum.question]: "",
	[ITestEnum.answers]: [],
	[ITestEnum.rightAnswer]: "",
	[ITestEnum.owner]: undefined,
	[ITestEnum.createdAt]: "",
	[ITestEnum.updatedAt]: "",

	[ITestEnum.statusCode]: RequestStatuses.PENDING,
};

export const testSlice = createSlice({
	name: "test",
	initialState: initialTestState,
	reducers: {
		undefined() {
			return initialTestState;
		},
	},
});

export const testActions = testSlice.actions;
export const testReducer = testSlice.reducer;
