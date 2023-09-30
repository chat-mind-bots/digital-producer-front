import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setStatusToDtoService } from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

import { IAuthUserState } from "../../Auth/redux/auth.slice";
import { IAuthUserDTO } from "../../Auth/types/user-dto.type";
import {
	userFromDtoService,
	userFromDtoServiceArray,
} from "../../Auth/services/data/user-from-dto.service";
import ServerResponse from "../../../Types/ServerResponse/pagination";
import { UserRoleEnum } from "../../Auth/types/role.enum";

export interface CreateDocumentApiProps extends UserApiPropsSet {
	authToken: string;
}

export interface GetUserApiProps {
	authToken: string;
	q?: string;
}

export interface UpgradeRoleApiProps {
	authToken: string;
	role: UserRoleEnum;
	type: "UP" | "DOWN";
	id: string;
}

export interface UserApiPropsSet {
	data: IAuthUserState[];
}

export const userApi = createApi({
	reducerPath: "users/api",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_MODE === "LOCAL" ? "http" : "https"}://${
			process.env.REACT_APP_API_URL
		}`,
	}),
	endpoints: (build) => ({
		getUsers: build.query<ServerResponse<IAuthUserState[]>, GetUserApiProps>({
			query: ({ authToken, q }) => ({
				url: "/user",
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				params: {
					limit: 1115,
					offset: 0,
					q: q,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ServerResponse<IAuthUserDTO[]>, meta) => {
				const { data, ...other } = response;

				return setStatusToDtoService(
					{
						data: userFromDtoServiceArray(data),
						...other,
					},
					meta
				);
			},
		}),

		upgradeRole: build.mutation<IAuthUserState, UpgradeRoleApiProps>({
			query: ({ authToken, role, type, id }) => ({
				url: `/user/${
					type === "UP" ? "upgrade-to-" : "beat-from-"
				}${role.toLowerCase()}/${id}`,
				method: HttpMethods.POST,
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

			transformResponse: (response: IAuthUserDTO, meta) => {
				return setStatusToDtoService(userFromDtoService(response, ""), meta);
			},
		}),

		getUsersByName: build.mutation<IAuthUserState, GetUserApiProps>({
			query: ({ authToken, q }) => ({
				url: "/user/by-username",
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				params: {
					limit: 1115,
					offset: 0,
					q: q,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IAuthUserDTO, meta) => {
				return setStatusToDtoService(userFromDtoService(response, ""), meta);
			},
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetUsersByNameMutation,
	useUpgradeRoleMutation,
} = userApi;
