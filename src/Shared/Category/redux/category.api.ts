import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import ServerResponse from "Types/ServerResponse/pagination";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";
import { getApiUrlService } from "Utils/get-api-url.service";

import { ICategoryState } from "./category.slice";
import { ICategoryDTO } from "../types/category-dto.type";
import {
	categoryFromDtoServiceArray,
	categoryFromDtoServiceObject,
} from "../services/data/category-from-dto.service";
import { categoryToDtoServiceObject } from "../services/data/category-to-dto.service";

export interface GetCategoriesApiProps {
	authToken: string;
}

export interface GetCategoryApiProps {
	authToken: string;
	idCategory?: string;
}

export interface DeleteCategoryApiProps {
	authToken: string;
	id?: string;
}

export interface CreateCategoryApiProps extends CategoryApiPropsSet {
	authToken: string;
}

export interface EditCategoryApiProps extends CategoryApiPropsSet {
	authToken: string;
}

export interface CategoryApiPropsSet {
	data: ICategoryState;
}

export interface CategoriesApiPropsSet {
	data: ICategoryState[];
}

export const categoryApi = createApi({
	reducerPath: "category/api",
	baseQuery: fetchBaseQuery({
		baseUrl: getApiUrlService(),
	}),
	endpoints: (build) => ({
		getCategories: build.query<
			ServerResponse<ICategoryState[]>,
			GetCategoriesApiProps
		>({
			query: ({ authToken }) => ({
				url: "/course/category",
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			transformResponse: (response: ServerResponse<ICategoryDTO[]>, meta) => {
				const { data, ...other } = response;

				return setStatusToDtoService(
					{
						data: categoryFromDtoServiceArray(data),
						...other,
					},
					meta
				);
			},
		}),

		getCategory: build.mutation<ICategoryState, GetCategoryApiProps>({
			query: ({ authToken, idCategory }) => ({
				url: `/course/category/${idCategory}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ICategoryDTO, meta) => {
				return setStatusToDtoService(
					categoryFromDtoServiceObject(response),
					meta
				);
			},
		}),

		createCategory: build.mutation<ICategoryState, CreateCategoryApiProps>({
			query: ({ authToken, data }) => ({
				url: "/course/category",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: categoryToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ICategoryDTO, meta) => {
				return setStatusToDtoService(
					categoryFromDtoServiceObject(response),
					meta
				);
			},
		}),

		updateCategory: build.mutation<ICategoryState, EditCategoryApiProps>({
			query: ({ authToken, data }) => ({
				url: `/course/category/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: categoryToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ICategoryDTO, meta) =>
				setStatusToDtoService(categoryFromDtoServiceObject(response), meta),
		}),

		deleteCategory: build.mutation<ICategoryState, DeleteCategoryApiProps>({
			query: ({ authToken, id }) => ({
				url: `/course/category/${id}`,
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

			transformResponse: (response: ICategoryDTO, meta) => {
				return setStatusToDtoService(
					categoryFromDtoServiceObject(response),
					meta
				);
			},
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCategoryMutation,
	useCreateCategoryMutation,
	useUpdateCategoryMutation,
	useDeleteCategoryMutation,
} = categoryApi;
