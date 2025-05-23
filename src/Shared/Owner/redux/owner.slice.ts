import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "Constants/RequestStatuses";

export enum IOwnerEnum {
	id = "id",
	firstName = "firstName",
	username = "username",
	photos = "photos",

	statusCode = "statusCode",
}

export interface IOwnerState {
	[IOwnerEnum.id]?: string;
	[IOwnerEnum.firstName]?: string;
	[IOwnerEnum.username]?: string;
	[IOwnerEnum.photos]?: { big: string };

	[IOwnerEnum.statusCode]?: RequestStatuses;
}

export const initialOwnerState: IOwnerState = {
	[IOwnerEnum.id]: "",
	[IOwnerEnum.firstName]: "",
	[IOwnerEnum.username]: "",
	[IOwnerEnum.statusCode]: RequestStatuses.PENDING,
};

export const ownerSlice = createSlice({
	name: "owner",
	initialState: initialOwnerState,
	reducers: {
		undefined() {
			return initialOwnerState;
		},
	},
});

export const ownerActions = ownerSlice.actions;
export const ownerReducer = ownerSlice.reducer;
