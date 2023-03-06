import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { TestIdType } from "Types/TestId";

import { TestIdData } from "./moks";

export const testApi = createApi({
	reducerPath: "BannerList/api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com/",
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		getTestId: build.query<TestIdType, number>({
			query: () => ({
				url: "/search/users",
				params: {
					q: "q",
				},
			}),
			transformResponse: () => {
				return TestIdData as TestIdType;
			},
		}),
	}),
});

export const { useGetTestIdQuery } = testApi;
