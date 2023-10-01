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

import { ISubCategoryDTO } from "../types/subCategory-dto.type";
import {
	subCategoryFromDtoServiceArray,
	subCategoryFromDtoServiceObject,
} from "../services/data/subCategory-from-dto.service";
import { subCategoryToDtoServiceObject } from "../services/data/subCategory-to-dto.service";
import { ISubCategoryState } from "./subCategory.slice";

export interface GetSubCategoriesApiProps {
	authToken: string;
}

export interface GetSubCategoryApiProps {
	authToken: string;
	idSubCategory?: string;
}

export interface DeleteSubCategoryApiProps {
	authToken: string;
	id?: string;
}

export interface CreateSubCategoryApiProps extends SubCategoryApiPropsSet {
	authToken: string;
}

export interface EditCategoryApiProps extends SubCategoryApiPropsSet {
	authToken: string;
}

export interface SubCategoryApiPropsSet {
	data: ISubCategoryState;
}

export const subCategoryApi = createApi({
	reducerPath: "subCategory/api",
	baseQuery: fetchBaseQuery({
		baseUrl: getApiUrlService(),
	}),
	endpoints: (build) => ({
		getSubCategories: build.query<
			ServerResponse<ISubCategoryState[]>,
			GetSubCategoriesApiProps
		>({
			query: ({ authToken }) => ({
				url: "/course/sub-category",
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			transformResponse: (
				response: ServerResponse<ISubCategoryDTO[]>,
				meta
			) => {
				const { data, ...other } = response;

				return setStatusToDtoService(
					{
						data: subCategoryFromDtoServiceArray(data),
						...other,
					},
					meta
				);
			},
		}),

		getSubCategory: build.mutation<ISubCategoryState, GetSubCategoryApiProps>({
			query: ({ authToken, idSubCategory }) => ({
				url: `/course/sub-category/${idSubCategory}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ISubCategoryDTO, meta) => {
				return setStatusToDtoService(
					subCategoryFromDtoServiceObject(response),
					meta
				);
			},
		}),

		createSubCategory: build.mutation<
			ISubCategoryState,
			CreateSubCategoryApiProps
		>({
			query: ({ authToken, data }) => ({
				url: "/course/sub-category",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: subCategoryToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ISubCategoryDTO, meta) => {
				return setStatusToDtoService(
					subCategoryFromDtoServiceObject(response),
					meta
				);
			},
		}),

		updateSubCategory: build.mutation<ISubCategoryState, EditCategoryApiProps>({
			query: ({ authToken, data }) => ({
				url: `/course/sub-category/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: subCategoryToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ISubCategoryDTO, meta) =>
				setStatusToDtoService(subCategoryFromDtoServiceObject(response), meta),
		}),

		deleteSubCategory: build.mutation<
			ISubCategoryState,
			DeleteSubCategoryApiProps
		>({
			query: ({ authToken, id }) => ({
				url: `/course/sub-category/${id}`,
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

			transformResponse: (response: ISubCategoryDTO, meta) => {
				return setStatusToDtoService(
					subCategoryFromDtoServiceObject(response),
					meta
				);
			},
		}),
	}),
});

export const {
	useGetSubCategoriesQuery,
	useGetSubCategoryMutation,
	useCreateSubCategoryMutation,
	useUpdateSubCategoryMutation,
	useDeleteSubCategoryMutation,
} = subCategoryApi;
