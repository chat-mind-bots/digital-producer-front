import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "../../../Constants/RequestStatuses";
import { IDocumentState } from "../../Document/redux/document.slice";
import { IOwnerState } from "../../Owner/redux/owner.slice";
import { ITestState } from "../../Test/redux/test.slice";

export enum ILessonEnum {
	image = "image",
	levelDifficulty = "levelDifficulty",
	logicNumber = "logicNumber",
	name = "name",
	id = "id",
	description = "description",
	video = "video",
	documents = "documents",
	owner = "owner",
	test = "test",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	totalPoints = "totalPoints",
	totalQuestions = "totalQuestions",
	testStatus = "testStatus",

	message = "message",
	statusCode = "statusCode",
}

export interface ILessonState {
	[ILessonEnum.id]: string;
	[ILessonEnum.image]: string;
	[ILessonEnum.levelDifficulty]: number;
	[ILessonEnum.logicNumber]?: number;
	[ILessonEnum.name]: string;
	[ILessonEnum.description]: string;
	[ILessonEnum.video]: string;
	[ILessonEnum.documents]?: IDocumentState[];
	[ILessonEnum.owner]?: IOwnerState;
	[ILessonEnum.test]?: ITestState;
	[ILessonEnum.createdAt]?: string;
	[ILessonEnum.updatedAt]?: string;
	[ILessonEnum.totalPoints]?: number;
	[ILessonEnum.totalQuestions]?: number;
	[ILessonEnum.testStatus]?: any;

	[ILessonEnum.message]?: string[];
	[ILessonEnum.statusCode]?: RequestStatuses;
}

export const initialLessonState: ILessonState = {
	[ILessonEnum.image]: "",
	[ILessonEnum.levelDifficulty]: 2,
	[ILessonEnum.logicNumber]: undefined,
	[ILessonEnum.name]: "",
	[ILessonEnum.id]: "",
	[ILessonEnum.description]: "",
	[ILessonEnum.video]: "",
	[ILessonEnum.documents]: [],
	[ILessonEnum.owner]: undefined,
	[ILessonEnum.test]: undefined,
	[ILessonEnum.createdAt]: "",
	[ILessonEnum.updatedAt]: "",

	[ILessonEnum.statusCode]: RequestStatuses.PENDING,
};

export const lessonSlice = createSlice({
	name: "lesson",
	initialState: initialLessonState,
	reducers: {
		undefined() {
			return initialLessonState;
		},
	},
});

export const lessonActions = lessonSlice.actions;
export const lessonReducer = lessonSlice.reducer;
