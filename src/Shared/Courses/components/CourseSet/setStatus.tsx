import React, {
	Children,
	cloneElement,
	FC,
	useCallback,
	useEffect,
} from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import {
	GetCourseApiProps,
	UpdateCourseStatusApiProps,
	useUpdateCourseStatusMutation,
} from "../../redux/course.api";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";

export const CourseSetStatus: FC<
	Pick<UpdateCourseStatusApiProps, "status" | "idCourse"> &
		Pick<CourseResultType, "refetch"> & {
			id?: string;
			setLoader: (e: boolean) => void;
		} & Record<"children", React.ReactElement>
> = ({ refetch, children, status, idCourse, id, setLoader }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetCourseApiProps = {
		authToken: auth.token ?? "",
	};

	const [updateStatusCourse, resultUpdateStatusCourse] =
		useUpdateCourseStatusMutation();

	const updateStatus = useCallback(() => {
		setLoader(true);
		updateStatusCourse({
			...queryAuth,
			idCourse,
			status,
		});
	}, [updateStatusCourse]);

	useEffect(() => {
		if (resultUpdateStatusCourse.status === QueryStatus.fulfilled) {
			if (
				resultUpdateStatusCourse.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateStatusCourse.data?.statusCode ===
					RequestStatuses.SUCCESS_201
			) {
				toast.success("Статус курса изменен");
				setTimeout(() => setLoader(false), 2000);
				refetch && refetch();
			} else {
				resultUpdateStatusCourse.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
					setTimeout(() => setLoader(false), 2000);
				});
			}
		}
	}, [resultUpdateStatusCourse]);

	return (
		<>
			<span
				id={id}
				onClick={() => updateStatus()}
			>
				{Children.toArray(children).map((child) =>
					cloneElement(child as React.ReactElement<CourseResultType>, {})
				)}
			</span>
		</>
	);
};
