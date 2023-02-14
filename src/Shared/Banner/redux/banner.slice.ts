import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";
import { ITag } from "Shared/Types/tag.type";

export interface IBannerState {
	id: string;
	title: string;
	type: string;
	role: string;
	urlButton: string;
	textButton: string;
	styleButton: string;
	name: string;
	description: string;
	image: string;
	isThirdPartySource: boolean;
	tags: ITag[];
	createdAt: string;
	updatedAt: string;
	statusCode?: RequestStatuses.PENDING;
}

export const initialAuthState: IBannerState = {
	id: "",
	title: "",
	type: "",
	role: "",
	urlButton: "",
	textButton: "",
	styleButton: "",
	name: "",
	description: "",
	image: "",
	isThirdPartySource: false,
	tags: [
		{
			id: 0,
			name: "",
			background: "",
			color: "",
		},
	],
	createdAt: "",
	updatedAt: "",
	statusCode: RequestStatuses.PENDING,
};

export const bannerSlice = createSlice({
	name: "banner",
	initialState: initialAuthState,
	reducers: {
		undefined() {
			return initialAuthState;
		},
	},
});

export const bannerActions = bannerSlice.actions;
export const bannerReducer = bannerSlice.reducer;
