import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

import { INewsState } from "./news.slice";
import { INewsDTO } from "../types/news-dto.type";
import {
	newsFromDtoServiceObject,
	newsFromDtoServiceArray,
} from "../services/data/news-from-dto.service";
import { newsToDtoServiceObject } from "../services/data/news-to-dto.service";
import ServerResponse from "../../../Types/ServerResponse/pagination";
import { UserRoleEnum } from "../../Auth/types/role.enum";

export interface CreateNewsApiProps extends NewsApiPropsSet {
	authToken: string;
}

export interface GetNewsApiProps {
	authToken: string;
	idNews?: string;
}

export interface GetNewsesApiProps {
	authToken: string;
	role?: UserRoleEnum;
}

export interface UpdateNewsApiProps {
	authToken: string;
	data: INewsState;
}

export interface NewsApiPropsSet {
	data: INewsState;
}

export interface DeleteNewsApiProps {
	authToken: string;
	id?: string;
}

enum TagTypesEnum {
	NEWS = "NEWS",
}

export const newsApi = createApi({
	reducerPath: "news/api",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_MODE === "LOCAL" ? "http" : "https"}://${
			process.env.REACT_APP_API_URL
		}`,
	}),
	tagTypes: [TagTypesEnum.NEWS],
	endpoints: (build) => ({
		getNews: build.query<INewsState, GetNewsApiProps>({
			query: ({ authToken, idNews }) => ({
				url: `/news/${idNews}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: INewsDTO, meta) => {
				return setStatusToDtoService(newsFromDtoServiceObject(response), meta);
			},
		}),

		getNewses: build.query<ServerResponse<INewsState[]>, GetNewsesApiProps>({
			query: ({ authToken, role }) => ({
				url: "/news",
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					limit: 1115,
					offset: 0,
					role: role,
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			providesTags: [TagTypesEnum.NEWS],
			transformResponse: (response: ServerResponse<INewsDTO[]>, meta) => {
				const { data, ...other } = response;

				return setStatusToDtoService(
					{
						data: newsFromDtoServiceArray(data),
						...other,
					},
					meta
				);
			},
		}),

		createNews: build.mutation<INewsState, CreateNewsApiProps>({
			query: ({ authToken, data }) => ({
				url: "/news",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: newsToDtoServiceObject(removeStatusToDtoService(data)),
				data,

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			invalidatesTags: [TagTypesEnum.NEWS],
			transformResponse: (response: INewsDTO, meta) => {
				return setStatusToDtoService(newsFromDtoServiceObject(response), meta);
			},
		}),

		getNewsMut: build.mutation<INewsState, GetNewsApiProps>({
			query: ({ authToken, idNews }) => ({
				url: `/news/${idNews}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: INewsDTO, meta) => {
				return setStatusToDtoService(newsFromDtoServiceObject(response), meta);
			},
		}),

		updateNews: build.mutation<INewsState, UpdateNewsApiProps>({
			query: ({ authToken, data }) => ({
				url: `/news/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: newsToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			invalidatesTags: [TagTypesEnum.NEWS],
			transformResponse: (response: INewsDTO, meta) =>
				setStatusToDtoService(newsFromDtoServiceObject(response), meta),
		}),

		deleteNews: build.mutation<INewsState, DeleteNewsApiProps>({
			query: ({ authToken, id }) => ({
				url: `/news/${id}`,
				method: HttpMethods.DELETE,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			invalidatesTags: [TagTypesEnum.NEWS],
			transformResponse: (response: INewsDTO, meta) => {
				return setStatusToDtoService(newsFromDtoServiceObject(response), meta);
			},
		}),
	}),
});

export const {
	useGetNewsMutMutation,
	useDeleteNewsMutation,
	useUpdateNewsMutation,
	useGetNewsQuery,
	useGetNewsesQuery,
	useCreateNewsMutation,
} = newsApi;
