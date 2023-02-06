import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NewsType } from "Types/News";
import { NewsIdType } from "Types/NewsId";

import { NewsData, NewsIdData } from "./moks";

export const newsApi = createApi({
	reducerPath: "news/api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com/",
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		getNews: build.query<NewsType, string>({
			query: (type: string) => ({
				url: "/search/users",
				params: {
					q: type,
				},
			}),
			transformResponse: () => {
				return NewsData.data as NewsType;
			},
		}),
		getNewsId: build.query<NewsIdType, number>({
			query: () => ({
				url: "/search/users",
				params: {
					q: "q",
				},
			}),
			transformResponse: () => {
				return NewsIdData as NewsIdType;
			},
		}),
	}),
});

export const { useGetNewsQuery, useGetNewsIdQuery } = newsApi;
