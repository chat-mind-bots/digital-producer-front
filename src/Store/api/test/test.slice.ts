import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoursesType } from "Types/Course";

const LS_FAV_KEY = "rfk";
const initialState: GithubState = {
	favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

interface GithubState {
	favourites: string[];
}

export const testSlice = createSlice({
	name: "course",
	initialState,
	reducers: {
		addCourse(state, action: PayloadAction<CoursesType>) {
			state.favourites.push("ударить по " + action.payload);
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
		},
		removeCourse(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter((f) => f !== action.payload);
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
		},
	},
});

export const testActions = testSlice.actions;
export const testReducer = testSlice.reducer;
