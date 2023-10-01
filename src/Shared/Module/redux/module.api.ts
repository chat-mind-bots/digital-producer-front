import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";
import { getApiUrlService } from "Utils/get-api-url.service";

import { IModuleState } from "./module.slice";
import { IModuleDTO } from "../types/module-dto.type";
import { ModuleFromDtoServiceObject } from "../services/data/module-from-dto.service";
import { ModuleToDtoServiceObject } from "../services/data/module-to-dto.service";
import { ILessonDTO } from "../../Lesson/types/lesson-dto.type";
import { lessonFromDtoServiceObject } from "../../Lesson/services/data/lesson-from-dto.service";

export interface GetModuleApiProps {
	authToken: string;
	id?: string;
}

export interface CreateModuleApiProps extends ModuleDataType {
	authToken: string;
}

export interface RemoveModuleApiProps {
	authToken: string;
	id?: string;
}

export interface UpdateModuleApiProps extends ModuleDataType {
	authToken: string;
}

export interface ModuleDataType {
	data: IModuleState;
}

export interface AddModuleToCourseApiProps {
	authToken: string;
	idCourse: string;
	idModule: string;
}

export const moduleApi = createApi({
	reducerPath: "module/api",
	baseQuery: fetchBaseQuery({
		baseUrl: getApiUrlService(),
	}),
	endpoints: (build) => ({
		getModule: build.mutation<IModuleState, GetModuleApiProps>({
			query: ({ authToken, id }) => ({
				url: `/course/module/${id}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IModuleDTO, meta) => {
				return setStatusToDtoService(
					ModuleFromDtoServiceObject(response),
					meta
				);
			},
		}),

		createModule: build.mutation<IModuleState, CreateModuleApiProps>({
			query: ({ authToken, data }) => ({
				url: "/course/module",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: ModuleToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IModuleDTO, meta) => {
				return setStatusToDtoService(
					ModuleFromDtoServiceObject(response),
					meta
				);
			},
		}),

		updateModule: build.mutation<IModuleState, UpdateModuleApiProps>({
			query: ({ authToken, data }) => ({
				url: `/course/module/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: ModuleToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IModuleDTO, meta) => {
				return setStatusToDtoService(
					ModuleFromDtoServiceObject(response),
					meta
				);
			},
		}),

		removeModule: build.mutation<IModuleState, RemoveModuleApiProps>({
			query: ({ authToken, id }) => ({
				url: `/course/module/${id}`,
				method: HttpMethods.DELETE,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ILessonDTO, meta) => {
				return setStatusToDtoService(
					lessonFromDtoServiceObject(response),
					meta
				);
			},
		}),

		addModuleToCourse: build.mutation<IModuleState, AddModuleToCourseApiProps>({
			query: ({ authToken, idModule, idCourse }) => ({
				url: `/course/${idCourse}/module`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					"module-id": idModule,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IModuleDTO, meta) => {
				return setStatusToDtoService(
					ModuleFromDtoServiceObject(response),
					meta
				);
			},
		}),
	}),
});

export const {
	useCreateModuleMutation,
	useAddModuleToCourseMutation,
	useUpdateModuleMutation,
	useGetModuleMutation,
	useRemoveModuleMutation,
} = moduleApi;
