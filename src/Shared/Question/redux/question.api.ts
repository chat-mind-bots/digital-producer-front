import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

import { IQuestionState } from "./question.slice";
import { IQuestionDTO } from "../types/question-dto.type";
import { QuestionToDtoServiceObject } from "../services/data/question-to-dto.service";
import { QuestionFromDtoServiceObject } from "../services/data/question-from-dto.service";

export interface GetQuestionApiProps {
	authToken: string;
	idQuestion?: string;
}

export interface CreateQuestionApiProps extends QuestionDataType {
	authToken: string;
}

export interface UpdateQuestionApiProps extends QuestionDataType {
	authToken: string;
	idQuestion?: string;
}

export interface RemoveLessonApiProps {
	authToken: string;
	id?: string;
}

export interface AddQuestionToTestApiProps {
	authToken: string;
	idQuestion: string;
	idTest: string;
}

export interface QuestionDataType {
	data: IQuestionState;
}

export const questionApi = createApi({
	reducerPath: "question/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),

	endpoints: (build) => ({
		createQuestion: build.mutation<IQuestionState, CreateQuestionApiProps>({
			query: ({ authToken, data }) => ({
				url: "/test/question",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: {
					number_of_points_to_pass: 0, // удалить это
					...QuestionToDtoServiceObject(removeStatusToDtoService(data)),
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IQuestionDTO, meta) => {
				return setStatusToDtoService(
					QuestionFromDtoServiceObject(response),
					meta
				);
			},
		}),

		getQuestion: build.mutation<IQuestionState, GetQuestionApiProps>({
			query: ({ authToken, idQuestion }) => ({
				url: `/test/question/${idQuestion}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IQuestionDTO, meta) => {
				return setStatusToDtoService(
					QuestionFromDtoServiceObject(response),
					meta
				);
			},
		}),

		updateQuestion: build.mutation<IQuestionState, UpdateQuestionApiProps>({
			query: ({ authToken, data, idQuestion }) => ({
				url: `/test/question/${idQuestion}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: QuestionToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IQuestionDTO, meta) => {
				return setStatusToDtoService(
					QuestionFromDtoServiceObject(response),
					meta
				);
			},
		}),

		removeQuestion: build.mutation<IQuestionState, RemoveLessonApiProps>({
			query: ({ authToken, id }) => ({
				url: `/test/question/${id}`,
				method: HttpMethods.DELETE,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IQuestionDTO, meta) => {
				return setStatusToDtoService(
					QuestionFromDtoServiceObject(response),
					meta
				);
			},
		}),

		addQuestionToCourse: build.mutation<
			IQuestionState,
			AddQuestionToTestApiProps
		>({
			query: ({ authToken, idQuestion, idTest }) => ({
				url: `/test/${idTest}/question`,
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					"question-id": idQuestion,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IQuestionDTO, meta) => {
				return setStatusToDtoService(
					QuestionFromDtoServiceObject(response),
					meta
				);
			},
		}),
	}),
});

export const {
	useCreateQuestionMutation,
	useAddQuestionToCourseMutation,
	useUpdateQuestionMutation,
	useRemoveQuestionMutation,
	useGetQuestionMutation,
} = questionApi;
