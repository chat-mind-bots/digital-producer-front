import React, { FC, useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import Colors from "../../../../Constants/Colors";
import Button from "../../../../Components/UI-KIT/Atoms/Button";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import {
	EnrollToCourseApiProps,
	useEnrollToCourseMutation,
} from "../../redux/course.api";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";

export const EnrollToCourse: FC<
	Pick<CourseResultType, "refetch"> &
		Pick<EnrollToCourseApiProps, "idCourse"> & {
			disabled?: boolean;
			setLoading: (e: boolean) => void;
		}
> = ({ refetch, idCourse, disabled, setLoading }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [enrollToCourse, resultEnrollToCourse] = useEnrollToCourseMutation();

	const enroll = useCallback(
		(idCourse: string) => {
			setLoading(true);
			enrollToCourse({
				...queryAuth,
				idCourse: idCourse,
			});
		},
		[enrollToCourse]
	);

	useEffect(() => {
		if (resultEnrollToCourse.status === QueryStatus.fulfilled) {
			if (
				resultEnrollToCourse.data?.statusCode === RequestStatuses.SUCCESS ||
				resultEnrollToCourse.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Курс успешно добавлен в 'Мои курсы'");
				refetch && refetch();
				setTimeout(() => setLoading(false), 2000);
			} else {
				setLoading(false);
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
				disabled={disabled}
			/>
		</>
	);
};
