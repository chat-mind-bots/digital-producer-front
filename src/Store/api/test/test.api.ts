import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TestIdData } from "./moks";
import { TestIdType } from "Types/TestId";

export const testApi = createApi({
	reducerPath: "test/api",
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
