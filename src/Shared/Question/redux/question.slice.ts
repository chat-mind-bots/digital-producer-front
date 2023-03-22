import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "Constants/RequestStatuses";

import { IAnswerState } from "../../Answer/redux/answer.slice";

export enum IQuestionEnum {
	id = "id",
	name = "name",
	description = "description",
	question = "question",
	answers = "answers",
	rightAnswers = "rightAnswers",
	rightAnswer = "rightAnswer",
	isMultiply = "isMultiply",

	message = "message",
	statusCode = "statusCode",
}

export interface IQuestionState {
	[IQuestionEnum.id]: string;
	[IQuestionEnum.name]: string;
	[IQuestionEnum.description]: string;
	[IQuestionEnum.question]?: string;
	[IQuestionEnum.answers]: IAnswerState[];
	[IQuestionEnum.rightAnswer]?: string;
	[IQuestionEnum.rightAnswers]?: string[];
	[IQuestionEnum.isMultiply]?: boolean;

	[IQuestionEnum.message]?: string[];
	[IQuestionEnum.statusCode]?: RequestStatuses;
}

export const initialQuestionState: IQuestionState = {
	[IQuestionEnum.id]: "",
	[IQuestionEnum.name]: "",
	[IQuestionEnum.description]: "",
	[IQuestionEnum.question]: "",
	[IQuestionEnum.answers]: [],
	[IQuestionEnum.rightAnswer]: undefined,
	[IQuestionEnum.rightAnswers]: undefined,
	[IQuestionEnum.isMultiply]: false,

	[IQuestionEnum.statusCode]: RequestStatuses.PENDING,
};

export const questionSlice = createSlice({
	name: "question",
	initialState: initialQuestionState,
	reducers: {
		undefined() {
			return initialQuestionState;
		},
	},
});

export const questionActions = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
