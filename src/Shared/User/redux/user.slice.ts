import { createSlice } from "@reduxjs/toolkit";

import { initialAuthState } from "../../Auth/redux/auth.slice";

export const userSlice = createSlice({
	name: "user",
	initialState: initialAuthState,
	reducers: {},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
