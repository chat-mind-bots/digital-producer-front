import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "RequestStatuses";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { ButtonSwitchStyleEnum } from "Components/ButtonSwitchStyle/button-switch-style.enum";

import { ITagState } from "../../Tag/redux/tag.slice";

export enum IBannerEnum {
	id = "id",
	title = "title",
	type = "type",
	role = "role",
	urlButton = "urlButton",
	textButton = "textButton",
	styleButton = "styleButton",
	name = "name",
	description = "description",
	image = "image",
	isThirdPartySource = "isThirdPartySource",
	tags = "tags",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	statusCode = "statusCode",
	message = "message",
}

export interface IBannerState {
	[IBannerEnum.id]: string;
	[IBannerEnum.title]: string;
	[IBannerEnum.type]?: BannerEnum;
	[IBannerEnum.role]?: UserRoleEnum;
	[IBannerEnum.urlButton]: string;
	[IBannerEnum.textButton]: string;
	[IBannerEnum.styleButton]?: ButtonSwitchStyleEnum;
	[IBannerEnum.name]: string;
	[IBannerEnum.description]: string;
	[IBannerEnum.image]: string;
	[IBannerEnum.isThirdPartySource]: boolean;
	[IBannerEnum.tags]: ITagState[];
	[IBannerEnum.createdAt]: string;
	[IBannerEnum.updatedAt]: string;
	[IBannerEnum.statusCode]?: RequestStatuses;
	[IBannerEnum.message]?: string[];
}

export const initialBannerState: IBannerState = {
	[IBannerEnum.id]: "",
	[IBannerEnum.title]: "",
	[IBannerEnum.type]: undefined,
	[IBannerEnum.role]: undefined,
	[IBannerEnum.urlButton]: "",
	[IBannerEnum.textButton]: "",
	[IBannerEnum.styleButton]: undefined,
	[IBannerEnum.name]: "",
	[IBannerEnum.description]: "",
	[IBannerEnum.image]: "",
	[IBannerEnum.isThirdPartySource]: false,
	[IBannerEnum.tags]: [
		{
			id: "0",
			name: "",
			background: "",
			color: "",
		},
	],
	[IBannerEnum.createdAt]: "",
	[IBannerEnum.updatedAt]: "",
	[IBannerEnum.statusCode]: RequestStatuses.PENDING,
};

export const bannerSlice = createSlice({
	name: "banner",
	initialState: initialBannerState,
	reducers: {
		undefined() {
			return initialBannerState;
		},
	},
});

export const bannerActions = bannerSlice.actions;
export const bannerReducer = bannerSlice.reducer;
