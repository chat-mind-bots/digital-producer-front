import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "../../../RequestStatuses";
import { ILessonState } from "../../Lesson/redux/lesson.slice";
import { IOwnerState } from "../../Owner/redux/owner.slice";

export enum IModuleEnum {
	id = "id",
	createdAt = "createdAt",
	lessons = "lessons",
	logicNumber = "logicNumber",
	name = "name",
	owner = "owner",
	updatedAt = "updatedAt",

	statusCode = "statusCode",
	message = "message",
}

export interface IModuleState {
	[IModuleEnum.id]?: string;
	[IModuleEnum.createdAt]?: string;
	[IModuleEnum.lessons]?: ILessonState[];
	[IModuleEnum.logicNumber]?: number;
	[IModuleEnum.name]?: string;
	[IModuleEnum.owner]?: IOwnerState;
	[IModuleEnum.updatedAt]?: string;

	[IModuleEnum.message]?: string[];
	[IModuleEnum.statusCode]?: RequestStatuses;
}

export const initialModuleState: IModuleState = {
	[IModuleEnum.id]: "",
	[IModuleEnum.createdAt]: "",
	[IModuleEnum.lessons]: [],
	[IModuleEnum.logicNumber]: undefined,
	[IModuleEnum.name]: "",
	[IModuleEnum.owner]: undefined,
	[IModuleEnum.updatedAt]: "",
	[IModuleEnum.statusCode]: RequestStatuses.PENDING,
};

export const moduleSlice = createSlice({
	name: "module",
	initialState: initialModuleState,
	reducers: {
		undefined() {
			return initialModuleState;
		},
	},
});

export const moduleActions = moduleSlice.actions;
export const moduleReducer = moduleSlice.reducer;
