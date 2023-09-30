import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

import { ITestState } from "./test.slice";
import { ITestDTO } from "../types/test-dto.type";
import { TestFromDtoServiceObject } from "../services/data/test-from-dto.service";
import { TestToDtoServiceObject } from "../services/data/test-to-dto.service";
import { UserRoleEnum } from "../../Auth/types/role.enum";

export interface CreateTestApiProps extends TestDataType {
	authToken: string;
}

export interface GetTestApiProps {
	authToken: string;
	idTest?: string;
	role?: UserRoleEnum;
}

export interface ProgressTestApiProps extends TestProgressDataType {
	authToken: string;
	idTest?: string;
}

export interface UpdateTestApiProps extends TestDataType {
	authToken: string;
}

export interface AddTestToLessonApiProps {
	authToken: string;
	idLesson: string;
	idTest: string;
}

export interface RemoveTestApiProps {
	authToken: string;
	id?: string;
}

export interface TestDataType {
	data: ITestState;
}

export interface TestProgressDataType {
	data: {
		duration: number;
		status: "IN_PROGRESS" | "DONE";
		answers?: {
			question: string;
			answer_key: string[];
		}[];
	};
}

export const testApi = createApi({
	reducerPath: "test/api",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_MODE === "LOCAL" ? "http" : "https"}://${
			process.env.REACT_APP_API_URL
		}`,
	}),
	endpoints: (build) => ({
		getTest: build.query<ITestState, GetTestApiProps>({
			query: ({ authToken, idTest, role }) => ({
				url:
					role === UserRoleEnum.USER
						? `/test/${idTest}/for-user`
						: `/test/${idTest}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ITestDTO, meta) => {
				return setStatusToDtoService(TestFromDtoServiceObject(response), meta);
			},
		}),

		getTestM: build.mutation<ITestState, GetTestApiProps>({
			query: ({ authToken, idTest }) => ({
				url: `/test/${idTest}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ITestDTO, meta) => {
				return setStatusToDtoService(TestFromDtoServiceObject(response), meta);
			},
		}),

		createTest: build.mutation<ITestState, CreateTestApiProps>({
			query: ({ authToken, data }) => ({
				url: "/test",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: TestToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ITestDTO, meta) => {
				return setStatusToDtoService(TestFromDtoServiceObject(response), meta);
			},
		}),

		updateTest: build.mutation<ITestState, UpdateTestApiProps>({
			query: ({ authToken, data }) => ({
				url: `/test/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: TestToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ITestDTO, meta) => {
				return setStatusToDtoService(TestFromDtoServiceObject(response), meta);
			},
		}),

		removeTest: build.mutation<ITestState, RemoveTestApiProps>({
			query: ({ authToken, id }) => ({
				url: `/test/${id}`,
				method: HttpMethods.DELETE,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ITestDTO, meta) => {
				return setStatusToDtoService(TestFromDtoServiceObject(response), meta);
			},
		}),

		addTestToLesson: build.mutation<ITestState, AddTestToLessonApiProps>({
			query: ({ authToken, idLesson, idTest }) => ({
				url: `/course/lesson/${idLesson}/test`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					"test-id": idTest,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ITestDTO, meta) => {
				return setStatusToDtoService(TestFromDtoServiceObject(response), meta);
			},
		}),

		progressTest: build.mutation<any, ProgressTestApiProps>({
			query: ({ authToken, idTest, data }) => ({
				url: `/test/${idTest}/progress`,
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: data,

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: ITestDTO, meta) => {
				return setStatusToDtoService(TestFromDtoServiceObject(response), meta);
			},
		}),
	}),
});

export const {
	useGetTestQuery,
	useCreateTestMutation,
	useAddTestToLessonMutation,
	useUpdateTestMutation,
	useRemoveTestMutation,
	useGetTestMMutation,
	useProgressTestMutation,
} = testApi;
