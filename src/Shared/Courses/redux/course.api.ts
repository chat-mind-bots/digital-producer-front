import * as process from "process";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import {
	courseFromDtoServiceArray,
	courseFromDtoServiceObject,
} from "Shared/Courses/services/data/course-from-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import ServerResponse from "Types/ServerResponse/pagination";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

import { ICourseDTO } from "../types/course-dto.type";
import { ICourseState } from "./course.slice";
import { courseToDtoServiceObject } from "../services/data/course-to-dto.service";

export enum CoursesStatuses {
	IN_PROGRESS = "IN_PROGRESS",
	IN_REVIEW = "IN_REVIEW",
	APPROVED = "APPROVED",
	NOT_ACTIVE = "NOT_ACTIVE",
	AVAILABLE = "AVAILABLE",
}

export enum CoursesCreatedAt {
	createdAt = "createdAt",
}

export interface GetCoursesApiProps {
	authToken: string;
	subCategoryId?: string[];
	ownerId?: string[];
	enrolledUserId?: string[];
	status?: CoursesStatuses;
	sortBy?: CoursesCreatedAt;
	q?: string;
	hideBought?: boolean;
}

export interface GetCourseApiProps {
	authToken: string;
	idCourse?: string;
}

export interface EnrollToCourseApiProps {
	authToken: string;
	idCourse?: string;
}

export interface EnrollAnotherUserToCourseApiProps {
	authToken: string;
	idCourse?: string;
	idUsers?: string[];
}

export interface RemoveCourseApiProps {
	authToken: string;
	id?: string;
}

export interface UpdateCourseApiProps extends CourseApiPropsSet {
	authToken: string;
}

export interface UpdateCourseStatusApiProps {
	authToken: string;
	status?: CoursesStatuses;
	idCourse: string;
}

export interface CreateCourseApiProps extends CourseApiPropsSet {
	authToken: string;
}

export interface CourseApiPropsSet {
	data: ICourseState;
}

enum TagTypesEnum {
	COURSES = "COURSES",
}

export const courseApi = createApi({
	reducerPath: "course/api",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_MODE === "LOCAL" ? "http" : "https"}://${
			process.env.REACT_APP_API_URL
		}`,
	}),
	tagTypes: [TagTypesEnum.COURSES],
	endpoints: (build) => ({
		getCourses: build.query<ServerResponse<ICourseState[]>, GetCoursesApiProps>(
			{
				query: ({
					authToken,
					subCategoryId,
					ownerId,
					enrolledUserId,
					status,
					sortBy,
					hideBought,
				}) => ({
					url: "/course",
					method: HttpMethods.GET,
					headers: {
						Authorization: `Bearer ${authToken}`,
					},
					params: {
						limit: 1115,
						offset: 0,
						"sub-category-id": subCategoryId,
						"owner-id": ownerId,
						"enrolled-user-id": enrolledUserId,
						"sort-by": sortBy,
						"hide-bought": hideBought,

						status: status,
					},
					validateStatus: (response, result) => {
						logout(response.status as RequestStatusesType);

						return result;
					},
				}),
				providesTags: [TagTypesEnum.COURSES],
				transformResponse: (response: ServerResponse<ICourseDTO[]>, meta) => {
					const { data, ...other } = response;

					return setStatusToDtoService(
						{
							data: courseFromDtoServiceArray(data),
							...other,
						},
						meta
					);
				},
			}
		),

		getSearchCourses: build.mutation<
			ServerResponse<ICourseState[]>,
			GetCoursesApiProps
		>({
			query: ({
				authToken,
				subCategoryId,
				ownerId,
				enrolledUserId,
				status,
				sortBy,
				q,
			}) => ({
				url: "/course",
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					limit: 1115,
					offset: 0,
					"sub-category-id": subCategoryId,
					"owner-id": ownerId,
					"enrolled-user-id": enrolledUserId,
					"sort-by": sortBy,
					q: q,
					status: status,
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			transformResponse: (response: ServerResponse<ICourseDTO[]>, meta) => {
				const { data, ...other } = response;

				return setStatusToDtoService(
					{
						data: courseFromDtoServiceArray(data),
						...other,
					},
					meta
				);
			},
		}),

		getCourse: build.query<ICourseState, GetCourseApiProps>({
			query: ({ authToken, idCourse }) => ({
				url: `/course/${idCourse}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),

		getCourseMut: build.mutation<ICourseState, GetCourseApiProps>({
			query: ({ authToken, idCourse }) => ({
				url: `/course/${idCourse}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),

		enrollToCourse: build.mutation<ICourseState, EnrollToCourseApiProps>({
			query: ({ authToken, idCourse }) => ({
				url: `/course/${idCourse}/enroll`,
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			invalidatesTags: [TagTypesEnum.COURSES],

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),

		enrollAnotherUserToCourse: build.mutation<
			ICourseState,
			EnrollAnotherUserToCourseApiProps
		>({
			query: ({ authToken, idCourse, idUsers }) => ({
				url: `/course/${idCourse}/enroll-another-user`,
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					"user-id": idUsers,
				},
				invalidatesTags: [TagTypesEnum.COURSES],

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),

		createCourse: build.mutation<ICourseState, CreateCourseApiProps>({
			query: ({ authToken, data }) => ({
				url: "/course",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: courseToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),

		updateCourse: build.mutation<ICourseState, UpdateCourseApiProps>({
			query: ({ authToken, data }) => ({
				url: `/course/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: courseToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			invalidatesTags: [TagTypesEnum.COURSES],

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),

		updateCourseStatus: build.mutation<
			ICourseState,
			UpdateCourseStatusApiProps
		>({
			query: ({ authToken, status, idCourse }) => ({
				url: `/course/${idCourse}/update-course-status`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					status: status,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			invalidatesTags: [TagTypesEnum.COURSES],

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),

		removeCourse: build.mutation<ICourseState, RemoveCourseApiProps>({
			query: ({ authToken, id }) => ({
				url: `/course/${id}`,
				method: HttpMethods.DELETE,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),
			invalidatesTags: [TagTypesEnum.COURSES],

			transformResponse: (response: ICourseDTO, meta) => {
				return setStatusToDtoService(
					courseFromDtoServiceObject(response),
					meta
				);
			},
		}),
	}),
});

export const {
	useUpdateCourseMutation,
	useGetCoursesQuery,
	useGetCourseQuery,
	useLazyGetCourseQuery,
	useCreateCourseMutation,
	useGetCourseMutMutation,
	useRemoveCourseMutation,
	useEnrollToCourseMutation,
	useEnrollAnotherUserToCourseMutation,
	useUpdateCourseStatusMutation,

	useGetSearchCoursesMutation,
} = courseApi;
