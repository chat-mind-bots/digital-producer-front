import { createSlice } from "@reduxjs/toolkit";

import RequestStatuses from "Constants/RequestStatuses";

export enum IPriceEnum {
	actual = "actual",
	discount = "discount",

	statusCode = "statusCode",
}

export interface IPriceState {
	[IPriceEnum.actual]: number;
	[IPriceEnum.discount]: number;

	[IPriceEnum.statusCode]?: RequestStatuses;
}

export const initialPriceState: IPriceState = {
	[IPriceEnum.actual]: 0,
	[IPriceEnum.discount]: 0,
	[IPriceEnum.statusCode]: RequestStatuses.PENDING,
};

export const priceSlice = createSlice({
	name: "price",
	initialState: initialPriceState,
	reducers: {
		undefined() {
			return initialPriceState;
		},
	},
});

export const priceActions = priceSlice.actions;
export const priceReducer = priceSlice.reducer;
