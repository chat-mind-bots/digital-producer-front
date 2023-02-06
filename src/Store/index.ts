import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "Shared/Auth/redux/auth.api";
import { authReducer } from "Shared/Auth/redux/auth.slice";

import { courseApi } from "./api/course/course.api";
import { courseReducer } from "./api/course/course.slice";
import { newsApi } from "./api/news/news.api";
import { newsReducer } from "./api/news/news.slice";
import { testApi } from "./api/test/test.api";
import { testReducer } from "./api/test/test.slice";

const allMySliceReducersReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	auth: authReducer,

	[courseApi.reducerPath]: courseApi.reducer,
	course: courseReducer,

	[newsApi.reducerPath]: newsApi.reducer,
	news: newsReducer,

	[testApi.reducerPath]: testApi.reducer,
	test: testReducer,
});

export const store = configureStore({
	reducer: allMySliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			authApi.middleware,
			courseApi.middleware,
			newsApi.middleware,
			testApi.middleware
		),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
