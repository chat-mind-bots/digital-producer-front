import React, { FC, Children, cloneElement } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "Hooks/redux";
import CourseResultType from "Components/UI-KIT/Course/course-props.type";
import Loader from "Components/UI-KIT/Loader";

import { GetCourseApiProps, useGetCourseQuery } from "../../redux/course.api";

type CourseGetProps = Record<"children", React.ReactElement<CourseResultType>>;

const CourseGet: FC<CourseGetProps> = ({ children }) => {
	const { id } = useParams();
	const auth = useAppSelector((state) => state.auth);
	const query: GetCourseApiProps = {
		authToken: auth.token ?? "",
		idCourse: id,
	};
	const { data, refetch } = useGetCourseQuery(query);

	return data ? (
		<>
			{Children.toArray(children).map((child) =>
				cloneElement(child as React.ReactElement<CourseResultType>, {
					result: data,
					refetch: refetch,
				})
			)}
		</>
	) : (
		<Loader />
	);
};

export default CourseGet;
