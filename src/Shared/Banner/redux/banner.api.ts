import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IBannerDTO } from "Shared/Banner/types/banner-dto.type";
import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/services/set-status-to-dto.service";
import {
	bannerFromDtoServiceObject,
	bannerFromDtoServiceArray,
	bannerToDtoServiceObject,
} from "Shared/Banner/services/data/banner-from-dto.service";
import { IBannerEnum, IBannerState } from "Shared/Banner/redux/banner.slice";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import ServerResponse from "Types/ServerResponse/pagination";
import { HttpMethods } from "Shared/HttpMethods/methods-api.enum";

export interface BannerApiProps
	extends Pick<IBannerState, IBannerEnum.role | IBannerEnum.type> {
	id?: string;
	authToken: string;
}

export interface BannerApiPropsSet {
	data: IBannerState;
}

export const bannerApi = createApi({
	reducerPath: "banner/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (build) => ({
		getBanner: build.query<ServerResponse<IBannerState[]>, BannerApiProps>({
			query: ({ authToken, role, type }) => ({
				url: "/banner",
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					limit: 1115,
					offset: 0,
					role: role,
					type: type,
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			transformResponse: (response: ServerResponse<IBannerDTO[]>, meta) => {
				const { data, ...other } = response;

				return setStatusToDtoService(
					{
						data: bannerFromDtoServiceArray(data),
						...other,
					},
					meta
				);
			},
		}),
		editBanner: build.mutation<
			IBannerState,
			BannerApiProps & BannerApiPropsSet
		>({
			query: ({ authToken, data }) => ({
				url: `/banner/${data ? data.id : ""}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: bannerToDtoServiceObject(removeStatusToDtoService(data)),
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IBannerDTO, meta) =>
				setStatusToDtoService(bannerFromDtoServiceObject(response), meta),
		}),
		createBanner: build.mutation<
			IBannerState,
			BannerApiProps & BannerApiPropsSet
		>({
			query: ({ authToken, data }) => ({
				url: "/banner",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: bannerToDtoServiceObject(removeStatusToDtoService(data)),
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IBannerDTO, meta) =>
				setStatusToDtoService(bannerFromDtoServiceObject(response), meta),
		}),
		deleteBanner: build.mutation<IBannerState, BannerApiProps>({
			query: ({ authToken, id }) => ({
				url: `/banner/${id}`,
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

			transformResponse: (response: IBannerDTO, meta) => {
				return setStatusToDtoService(
					bannerFromDtoServiceObject(response),
					meta
				);
			},
		}),
	}),
});

export const {
	useGetBannerQuery,
	useEditBannerMutation,
	useCreateBannerMutation,
	useDeleteBannerMutation,
} = bannerApi;
