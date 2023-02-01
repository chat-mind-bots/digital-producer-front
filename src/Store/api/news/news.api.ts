import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ServerResponse from 'Types/ServerResponse/pagination';
import { NewsType } from 'Types/News';
import { NewsData, NewsIdData } from './moks';
import { NewsIdType } from 'Types/NewsId';

export const newsApi = createApi({
  reducerPath: 'news/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getNews: build.query<NewsType, string>({
      query: (type: string) => ({
        url: `/search/users`,
        params: {
          q: type,
        },
      }),
      transformResponse: (response: ServerResponse<NewsType>) => {
        return NewsData.data as NewsType;
      },
    }),
    getNewsId: build.query<NewsIdType, number>({
      query: (id: number) => ({
        url: `/search/users`,
        params: {
          q: 'q',
        },
      }),
      transformResponse: (response: NewsIdType) => {
        return NewsIdData as NewsIdType;
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsIdQuery } = newsApi;
