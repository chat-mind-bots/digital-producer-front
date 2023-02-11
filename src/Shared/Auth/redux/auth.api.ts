import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IAuthUserDTO } from "Shared/Auth/types/user-dto.type";
import { userFromDtoService } from "Shared/Auth/services/data/user-from-dto.service";
import { IAuthUserState } from "Shared/Auth/redux/auth.slice";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";

export const authApi = createApi({
	reducerPath: "auth/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (build) => ({
		getUserInfo: build.query<IAuthUserState, string>({
			query: (authToken: string) => ({
				url: "/auth",
				method: "post",
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			transformResponse: (response: IAuthUserDTO, meta, arg: string) => {
				if (meta && meta.response) {
					response.statusCode = meta.response.status;
				}

				return userFromDtoService(response, arg);
			},
		}),
	}),
});

export const { useGetUserInfoQuery } = authApi;
