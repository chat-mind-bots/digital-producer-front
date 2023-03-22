import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { IPhotos } from "Shared/Auth/types/user-photos.type";
import {
	LocalStorageMethodEnum,
	localStorageService,
} from "Utils/local-storage.service";
import RequestStatuses from "RequestStatuses";

export interface IAuthUserState {
	token?: string;
	id: string;
	tgId: number;
	firstName: string;
	username?: string;
	type?: string;
	role: UserRoleEnum[];
	photos?: IPhotos;
	statusCode?: RequestStatuses;
}

export const initialAuthState: IAuthUserState = {
	id: "",
	tgId: 0,
	role: [],
	firstName: "",
	type: "",
	username: "",
	statusCode: RequestStatuses.PENDING,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state, action: PayloadAction<IAuthUserState>) {
			action.payload.statusCode === RequestStatuses.SUCCESS_201 &&
				localStorageService(LocalStorageMethodEnum.SET, {
					key: "auth",
					data: action.payload.token,
				});

			action.payload.statusCode === RequestStatuses.SUCCESS_201 &&
				localStorageService(LocalStorageMethodEnum.SET, {
					key: "role",
					data: JSON.stringify(action.payload.role),
				});

			return {
				...state,
				...action.payload,
			};
		},
		logout() {
			return initialAuthState;
		},
	},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
