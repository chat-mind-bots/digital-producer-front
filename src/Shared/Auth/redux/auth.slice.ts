import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { IPhotos } from "Shared/Auth/types/user-photos.type";
import {
	LocalStorageMethodEnum,
	localStorageService,
} from "Utils/local-storage.service";

export interface IAuthUserState {
	token?: string;
	id: string;
	tgId: number;
	firstName: string;
	username?: string;
	type?: string;
	role: UserRoleEnum[];
	photos?: IPhotos;
}

export const initialAuthState: IAuthUserState = {
	id: "",
	tgId: 0,
	role: [],
	firstName: "",
	type: "",
	username: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state, action: PayloadAction<IAuthUserState>) {
			localStorageService(LocalStorageMethodEnum.SET, {
				key: "auth",
				data: action.payload.token,
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
