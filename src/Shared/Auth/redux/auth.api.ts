import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setStatusToDtoService } from "Shared/Http/services/set-status-to-dto.service";
import { IAuthUserDTO } from "Shared/Auth/types/user-dto.type";
import { userFromDtoService } from "Shared/Auth/services/data/user-from-dto.service";
import { IAuthUserState } from "Shared/Auth/redux/auth.slice";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

export const authApi = createApi({
	reducerPath: "auth/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (build) => ({
		getUserInfo: build.query<IAuthUserState, string>({
			query: (authToken: string) => ({
				url: "/auth",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			transformResponse: (response: IAuthUserDTO, meta, arg: string) =>
				setStatusToDtoService(userFromDtoService(response, arg), meta),
		}),
	}),
});

export const { useGetUserInfoQuery } = authApi;
