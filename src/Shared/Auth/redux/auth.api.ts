import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthUserDTO } from "Shared/Auth/types/user-dto.type";
import { userFromDtoService } from "Shared/Auth/services/data/user-from-dto.service";
import { IAuthUserState } from "Shared/Auth/redux/auth.slice";

export const authApi = createApi({
	reducerPath: "auth/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		getUserInfo: build.query<IAuthUserState, string>({
			query: (authToken: string) => ({
				url: "/auth",
				method: "post",
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			}),
			transformResponse: (response: IAuthUserDTO, meta, arg: string) => {
				return userFromDtoService(response, arg);
			},
		}),
	}),
});

export const { useGetUserInfoQuery } = authApi;
