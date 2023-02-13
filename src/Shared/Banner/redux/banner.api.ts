import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IBannerDTO } from "Shared/Banner/types/banner-dto.type";
import { setStatusToDtoService } from "Shared/services/set-status-to-dto.service";
import { bannerFromDtoService } from "Shared/Banner/services/data/banner-from-dto.service";
import { IBannerState } from "Shared/Banner/redux/banner.slice";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import ServerResponse from "Types/ServerResponse/pagination";

export interface BannerApiProps extends BannerApiQuery {
	authToken: string;
}

export interface BannerApiQuery {
	role: UserRoleEnum;
}

export const bannerApi = createApi({
	reducerPath: "banner/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (build) => ({
		getBanner: build.query<ServerResponse<IBannerState[]>, BannerApiProps>({
			query: ({ authToken, role }) => ({
				url: "/banner",
				method: "get",
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
			transformResponse: (response: ServerResponse<IBannerDTO[]>, meta) => {
				const { data, ...other } = response;

				return setStatusToDtoService(
					{
						data: bannerFromDtoService(data),
						...other,
					},
					meta
				);
			},
		}),
	}),
});

export const { useGetBannerQuery } = bannerApi;
