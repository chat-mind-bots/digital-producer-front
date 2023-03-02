import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "Shared/Auth/redux/auth.api";
import { authReducer } from "Shared/Auth/redux/auth.slice";
import { bannerApi } from "Shared/Banner/redux/banner.api";
import { bannerReducer } from "Shared/Banner/redux/banner.slice";
import { courseApi } from "Shared/Courses/redux/course.api";
import { courseReducer } from "Shared/Courses/redux/course.slice";
import { lessonApi } from "Shared/Lesson/redux/lesson.api";
import { lessonReducer } from "Shared/Lesson/redux/lesson.slice";
import { moduleApi } from "Shared/Module/redux/module.api";
import { moduleReducer } from "Shared/Module/redux/module.slice";
import { categoryApi } from "Shared/Category/redux/category.api";
import { categoryReducer } from "Shared/Category/redux/category.slice";
import { documentApi } from "Shared/Document/redux/document.api";
import { documentReducer } from "Shared/Document/redux/document.slice";
import { subCategoryApi } from "Shared/SubCategory/redux/subCategory.api";
import { subCategoryReducer } from "Shared/SubCategory/redux/subCategory.slice";
import { userApi } from "Shared/User/redux/user.api";
import { userReducer } from "Shared/User/redux/user.slice";
import { testApi } from "Shared/Test/redux/test.api";
import { testReducer } from "Shared/Test/redux/test.slice";
import { questionApi } from "Shared/Question/redux/question.api";
import { questionReducer } from "Shared/Question/redux/question.slice";
import { newsApi } from "Shared/News/redux/news.api";
import { newsReducer } from "Shared/News/redux/news.slice";

const allMySliceReducersReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	auth: authReducer,

	[bannerApi.reducerPath]: bannerApi.reducer,
	banner: bannerReducer,

	[courseApi.reducerPath]: courseApi.reducer,
	course: courseReducer,

	[lessonApi.reducerPath]: lessonApi.reducer,
	lesson: lessonReducer,

	[moduleApi.reducerPath]: moduleApi.reducer,
	module: moduleReducer,

	[categoryApi.reducerPath]: categoryApi.reducer,
	category: categoryReducer,

	[documentApi.reducerPath]: documentApi.reducer,
	document: documentReducer,

	[subCategoryApi.reducerPath]: subCategoryApi.reducer,
	subCategory: subCategoryReducer,

	[userApi.reducerPath]: userApi.reducer,
	user: userReducer,

	[newsApi.reducerPath]: newsApi.reducer,
	news: newsReducer,

	[testApi.reducerPath]: testApi.reducer,
	test: testReducer,

	[questionApi.reducerPath]: questionApi.reducer,
	question: questionReducer,
});

export const store = configureStore({
	reducer: allMySliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			authApi.middleware,
			bannerApi.middleware,
			courseApi.middleware,
			lessonApi.middleware,
			moduleApi.middleware,
			categoryApi.middleware,
			documentApi.middleware,
			subCategoryApi.middleware,
			userApi.middleware,
			testApi.middleware,
			questionApi.middleware,
			userApi.middleware,
			newsApi.middleware
		),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
