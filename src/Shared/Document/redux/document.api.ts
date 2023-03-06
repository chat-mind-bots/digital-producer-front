import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
	removeStatusToDtoService,
	setStatusToDtoService,
} from "Shared/Http/services/set-status-to-dto.service";
import logout from "Utils/Logout";
import RequestStatusesType from "Types/RequestStatusesType";
import { HttpMethods } from "Shared/Http/enum/methods-api.enum";

import { IDocumentState } from "./document.slice";
import { IDocumentDTO } from "../types/document-dto.type";
import { documentFromDtoServiceObject } from "../services/data/document-from-dto.service";
import { documentToDtoServiceObject } from "../services/data/document-to-dto.service";

export interface CreateDocumentApiProps extends DocumentApiPropsSet {
	authToken: string;
}

export interface GetDocumentApiProps {
	authToken: string;
	idDocument: string;
}

export interface UpdateDocumentApiProps {
	authToken: string;
	data: IDocumentState;
}

export interface DocumentApiPropsSet {
	data: IDocumentState;
}

export interface DeleteDocumentApiProps {
	authToken: string;
	id?: string;
}

export interface AddDocumentToLessonApiProps {
	authToken: string;
	idDocument: string;
	idLesson: string;
}

export interface AddDocumentToCourseApiProps {
	authToken: string;
	idDocument: string;
	idCourse: string;
}

export const documentApi = createApi({
	reducerPath: "document/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (build) => ({
		getDocument: build.mutation<IDocumentState, GetDocumentApiProps>({
			query: ({ authToken, idDocument }) => ({
				url: `/document/${idDocument}`,
				method: HttpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IDocumentDTO, meta) => {
				return setStatusToDtoService(
					documentFromDtoServiceObject(response),
					meta
				);
			},
		}),

		createDocument: build.mutation<IDocumentState, CreateDocumentApiProps>({
			query: ({ authToken, data }) => ({
				url: "/document",
				method: HttpMethods.POST,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				body: documentToDtoServiceObject(removeStatusToDtoService(data)),
				data,

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IDocumentDTO, meta) => {
				return setStatusToDtoService(
					documentFromDtoServiceObject(response),
					meta
				);
			},
		}),

		updateDocument: build.mutation<IDocumentState, UpdateDocumentApiProps>({
			query: ({ authToken, data }) => ({
				url: `/document/${data.id}`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: documentToDtoServiceObject(removeStatusToDtoService(data)),

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IDocumentDTO, meta) =>
				setStatusToDtoService(documentFromDtoServiceObject(response), meta),
		}),

		deleteDocument: build.mutation<IDocumentState, DeleteDocumentApiProps>({
			query: ({ authToken, id }) => ({
				url: `/document/${id}`,
				method: HttpMethods.DELETE,
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IDocumentDTO, meta) => {
				return setStatusToDtoService(
					documentFromDtoServiceObject(response),
					meta
				);
			},
		}),

		addDocumentToLesson: build.mutation<
			IDocumentState,
			AddDocumentToLessonApiProps
		>({
			query: ({ authToken, idDocument, idLesson }) => ({
				url: `/course/lesson/${idLesson}/document`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					"document-id": idDocument,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IDocumentDTO, meta) => {
				return setStatusToDtoService(
					documentFromDtoServiceObject(response),
					meta
				);
			},
		}),

		addDocumentToCourse: build.mutation<
			IDocumentState,
			AddDocumentToCourseApiProps
		>({
			query: ({ authToken, idDocument, idCourse }) => ({
				url: `/course/${idCourse}/document`,
				method: HttpMethods.PATCH,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: {
					"document-id": idDocument,
				},

				validateStatus: (response, result) => {
					logout(response.status as RequestStatusesType);

					return result;
				},
			}),

			transformResponse: (response: IDocumentDTO, meta) => {
				return setStatusToDtoService(
					documentFromDtoServiceObject(response),
					meta
				);
			},
		}),
	}),
});

export const {
	useDeleteDocumentMutation,
	useUpdateDocumentMutation,
	useGetDocumentMutation,
	useCreateDocumentMutation,
	useAddDocumentToCourseMutation,
	useAddDocumentToLessonMutation,
} = documentApi;
