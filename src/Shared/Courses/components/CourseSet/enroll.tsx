import React, { FC, useCallback, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import Colors from "../../../../Colors";
import Button from "../../../../Components/UI-KIT/Atoms/Button";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import {
	EnrollToCourseApiProps,
	useEnrollToCourseMutation,
} from "../../redux/course.api";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import ModalToaster from "../../../../Components/ModalWindows/WrappersModalWindows/ModalToaster";

export const EnrollToCourse: FC<
	Pick<CourseResultType, "refetch"> & Pick<EnrollToCourseApiProps, "idCourse">
> = ({ refetch, idCourse }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [enrollToCourse, resultEnrollToCourse] = useEnrollToCourseMutation();

	const enroll = useCallback(
		(idCourse: string) =>
			enrollToCourse({
				...queryAuth,
				idCourse: idCourse,
			}),
		[enrollToCourse]
	);

	useEffect(() => {
		if (resultEnrollToCourse.status === QueryStatus.fulfilled) {
			if (
				resultEnrollToCourse.data?.statusCode === RequestStatuses.SUCCESS ||
				resultEnrollToCourse.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд Курс куплен");
				refetch && refetch();
			} else {
				resultEnrollToCourse.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultEnrollToCourse]);

	return (
		<>
			<Button
				title={"Участвовать"}
				padding={"11px 28px"}
				fontSize={"14px"}
				lineHeight={"20px"}
				fontWeight={"600"}
				background={Colors.BLUE}
				color={Colors.WHITE}
				backgroundAnimation={Colors.BLUE_DARK}
				colorHover={Colors.WHITE}
				width={"100%"}
				onClick={() => (idCourse ? enroll(idCourse) : toast.error("Ошибка id"))}
			/>

			<ModalToaster>
				<Toaster
					position="bottom-left"
					reverseOrder={false}
				/>
			</ModalToaster>
		</>
	);
};
