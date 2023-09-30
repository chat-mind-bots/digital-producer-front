import * as process from "process";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

import { lessonFromDtoServiceObject } from "../services/data/lesson-from-dto.service";
import { ILessonDTO } from "../types/lesson-dto.type";
import { ILessonState } from "./lesson.slice";
import { lessonToDtoServiceObject } from "../services/data/lesson-to-dto.service";

export interface GetLessonApiProps {
	authToken: string;
	id?: string;
}

export interface CreateLessonApiProps extends LessonDataType {
	authToken: string;
}

export interface RemoveLessonApiProps {
	authToken: string;
	id?: string;
}

export interface AddLessonToModuleApiProps {
	authToken: string;
	idLesson: string;
	idModule: string;
}

export interface LessonDataType {
	data: ILessonState;
}

export const lessonApi = createApi({
	reducerPath: "lesson/api",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_MODE === "LOCAL" ? "http" : "https"}://${
			process.env.REACT_APP_API_URL
		}`,
	}),
	endpoints: (build) => ({
		getLesson: build.mutation<ILessonState, GetLessonApiProps>({
			query: ({ authToken, id }) => ({
				url: `/course/lesson/${id}`,
				method: HttpMethods.GET,
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

		createLesson: build.mutation<ILessonState, CreateLessonApiProps>({
			query: ({ authToken, data }) => ({
				url: "/course/lesson",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: {
					number_of_points_to_pass: 0, // удалить это
					...lessonToDtoServiceObject(removeStatusToDtoService(data)),
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

		updateLesson: build.mutation<ILessonState, CreateLessonApiProps>({
			query: ({ authToken, data }) => ({
				url: `/course/lesson/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: lessonToDtoServiceObject(removeStatusToDtoService(data)),

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

		removeLesson: build.mutation<ILessonState, RemoveLessonApiProps>({
			query: ({ authToken, id }) => ({
				url: `/course/lesson/${id}`,
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

		addLessonToModule: build.mutation<ILessonState, AddLessonToModuleApiProps>({
			query: ({ authToken, idLesson, idModule }) => ({
				url: `/course/module/${idModule}/lesson`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					"lesson-id": idLesson,
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
	}),
});

export const {
	useGetLessonMutation,
	useCreateLessonMutation,
	useAddLessonToModuleMutation,
	useUpdateLessonMutation,
	useRemoveLessonMutation,
} = lessonApi;
