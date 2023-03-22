import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "Constants/RequestStatuses";

export enum INoteEnum {
	name = "name",
	value = "value",
	statusCode = "statusCode",
}

export interface INoteState {
	[INoteEnum.name]: string;
	[INoteEnum.value]: string;

	[INoteEnum.statusCode]?: RequestStatuses;
}

export const initialNoteState: INoteState = {
	[INoteEnum.name]: "",
	[INoteEnum.value]: "",
	[INoteEnum.statusCode]: RequestStatuses.PENDING,
};

export const noteSlice = createSlice({
	name: "note",
	initialState: initialNoteState,
	reducers: {
		undefined() {
			return initialNoteState;
		},
	},
});

export const noteActions = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
