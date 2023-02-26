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

export interface CreateTestApiProps extends TestDataType {
	authToken: string;
}

export interface GetTestApiProps {
	authToken: string;
	id?: string;
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

export const testApi = createApi({
	reducerPath: "test/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (build) => ({
		getTest: build.mutation<ITestState, GetTestApiProps>({
			query: ({ authToken, id }) => ({
				url: `/test/${id}`,
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
	}),
});

export const {
	useGetTestMutation,
	useCreateTestMutation,
	useAddTestToLessonMutation,
	useUpdateTestMutation,
	useRemoveTestMutation,
} = testApi;
