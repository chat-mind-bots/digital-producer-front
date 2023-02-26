import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "../../../RequestStatuses";
import { IDocumentState } from "../../Document/redux/document.slice";
import { IModuleState } from "../../Module/redux/module.slice";
import { INoteState } from "../../Note/redux/note.slice";
import { IOwnerState } from "../../Owner/redux/owner.slice";
import { IPriceState } from "../../Price/redux/price.slice";
import { ITagState } from "../../Tag/redux/tag.slice";

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
	[ICourseEnum.status]: number;
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
	[ICourseEnum.status]: 202,
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
