import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "Constants/RequestStatuses";

import { IQuestionState } from "../../Question/redux/question.slice";

export enum ITestEnum {
	id = "id",
	name = "name",
	description = "description",
	duration = "duration",
	lessonId = "lessonId",
	questions = "questions",

	message = "message",
	statusCode = "statusCode",
}

export interface ITestState {
	[ITestEnum.id]: string;
	[ITestEnum.name]: string;
	[ITestEnum.description]: string;
	[ITestEnum.duration]?: number;
	[ITestEnum.lessonId]: string;
	[ITestEnum.questions]: IQuestionState[];

	[ITestEnum.message]?: string[];
	[ITestEnum.statusCode]?: RequestStatuses;
}

export const initialTestState: ITestState = {
	[ITestEnum.id]: "",
	[ITestEnum.name]: "",
	[ITestEnum.description]: "",
	[ITestEnum.duration]: undefined,
	[ITestEnum.lessonId]: "",
	[ITestEnum.questions]: [],

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
