import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "../../../Constants/RequestStatuses";
import { IDocumentState } from "../../Document/redux/document.slice";
import { IModuleState } from "../../Module/redux/module.slice";
import { INoteState } from "../../Note/redux/note.slice";
import { IOwnerState } from "../../Owner/redux/owner.slice";
import { IPriceState } from "../../Price/redux/price.slice";
import { ITagState } from "../../Tag/redux/tag.slice";
import { CoursesStatuses } from "./course.api";
import { IAuthUserState } from "../../Auth/redux/auth.slice";

export enum ICourseEnum {
	id = "id",
	name = "name",
	description = "description",
	image = "image",
	video = "video",
	isEnrolled = "isEnrolled",
	isFree = "isFree",
	language = "language",
	status = "status",
	price = "price",
	levelDifficulty = "levelDifficulty",
	logicNumber = "logicNumber",
	tags = "tags",
	notes = "notes",
	documents = "documents",
	owner = "owner",
	category = "category",
	subCategory = "subCategory",
	modules = "modules",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	moduleLength = "moduleLength",
	lessonLength = "lessonLength",
	students = "students",
	studentsTotal = "studentsTotal",

	statusCode = "statusCode",
	message = "message",
}

export interface ICourseState {
	[ICourseEnum.id]: string;
	[ICourseEnum.name]: string;
	[ICourseEnum.description]: string;
	[ICourseEnum.image]: string;
	[ICourseEnum.video]: string;
	[ICourseEnum.isFree]: boolean;
	[ICourseEnum.isEnrolled]: boolean;
	[ICourseEnum.language]: string;
	[ICourseEnum.status]?: CoursesStatuses;
	[ICourseEnum.price]?: IPriceState;
	[ICourseEnum.levelDifficulty]: number;
	[ICourseEnum.logicNumber]?: number;
	[ICourseEnum.tags]: ITagState[];
	[ICourseEnum.notes]?: INoteState[];
	[ICourseEnum.documents]?: IDocumentState[];
	[ICourseEnum.owner]?: IOwnerState;
	[ICourseEnum.subCategory]: string;
	[ICourseEnum.category]?: string;
	[ICourseEnum.modules]: IModuleState[];
	[ICourseEnum.createdAt]: string;
	[ICourseEnum.updatedAt]: string;
	[ICourseEnum.moduleLength]: number;
	[ICourseEnum.lessonLength]: number;
	[ICourseEnum.students]: IAuthUserState[];
	[ICourseEnum.studentsTotal]: number;

	[ICourseEnum.message]?: string[];
	[ICourseEnum.statusCode]?: RequestStatuses;
}

export const initialCourseState: ICourseState = {
	[ICourseEnum.id]: "",
	[ICourseEnum.name]: "",
	[ICourseEnum.description]: "",
	[ICourseEnum.image]: "",
	[ICourseEnum.video]: "",
	[ICourseEnum.isFree]: false,
	[ICourseEnum.isEnrolled]: false,
	[ICourseEnum.language]: "",
	[ICourseEnum.status]: undefined,
	[ICourseEnum.price]: undefined,
	[ICourseEnum.levelDifficulty]: 2,
	[ICourseEnum.logicNumber]: undefined,
	[ICourseEnum.tags]: [],
	[ICourseEnum.notes]: undefined,
	[ICourseEnum.documents]: [],
	[ICourseEnum.owner]: undefined,
	[ICourseEnum.subCategory]: "",
	[ICourseEnum.category]: "",
	[ICourseEnum.modules]: [],
	[ICourseEnum.createdAt]: "",
	[ICourseEnum.updatedAt]: "",
	[ICourseEnum.moduleLength]: 0,
	[ICourseEnum.lessonLength]: 0,
	[ICourseEnum.students]: [],
	[ICourseEnum.studentsTotal]: 0,

	[ICourseEnum.statusCode]: RequestStatuses.PENDING,
};

export const courseSlice = createSlice({
	name: "banner",
	initialState: initialCourseState,
	reducers: {
		undefined() {
			return initialCourseState;
		},
	},
});

export const courseActions = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
