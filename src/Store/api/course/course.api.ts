import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CoursesType } from "Types/Course";
import { CourseIdType } from "Types/CourseId";

import { CourseIdData, CoursesData } from "./moks";

export const courseApi = createApi({
	reducerPath: "course/api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com/",
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		getCourses: build.query<CoursesType, string>({
			query: (type: string) => ({
				url: "/search/users",
				params: {
					q: type,
					// type: search,
				},
			}),
			transformResponse: () => {
				return CoursesData.data as CoursesType;
			},
		}),
		getCourseId: build.query<CourseIdType, number>({
			query: () => ({
				url: "/search/users",
				params: {
					q: "q",
					// type: search,
				},
			}),
			transformResponse: () => {
				return CourseIdData as CourseIdType;
			},
		}),
	}),
});

export const { useGetCoursesQuery, useGetCourseIdQuery } = courseApi;
