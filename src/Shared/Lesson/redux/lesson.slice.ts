import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "../../../RequestStatuses";
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
	tests = "tests",
	createdAt = "createdAt",
	updatedAt = "updatedAt",

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
	[ILessonEnum.tests]?: ITestState[];
	[ILessonEnum.createdAt]?: string;
	[ILessonEnum.updatedAt]?: string;

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
	[ILessonEnum.tests]: [],
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
