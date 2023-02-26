import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import Loader from "../../../../Components/UI-KIT/Loader";
import {
	GetCourseApiProps,
	useGetCourseMutMutation,
	useRemoveCourseMutation,
	useUpdateCourseMutation,
} from "../../redux/course.api";
import CourseSettingsBodyWindow from "../../../../Components/ModalWindows/Body/CourseSettingsBodyWindow";
import { ICourseState } from "../../redux/course.slice";
import { useGetCategoriesQuery } from "../../../Category/redux/category.api";
import Colors from "../../../../Colors";
import Button from "../../../../Components/UI-KIT/Atoms/Button";

type LessonSetProps = Pick<CourseResultType, "refetch"> &
	Pick<GetCourseApiProps, "idCourse">;

export const CourseUpdate: FC<LessonSetProps> = ({ idCourse, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getCourse, course] = useGetCourseMutMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateCourse, resultUpdateCourse] = useUpdateCourseMutation();

	const [removeCourse, resultRemoveCourse] = useRemoveCourseMutation();

	const { data } = useGetCategoriesQuery(queryAuth);

	const update = useCallback(
		(res: ICourseState) =>
			updateCourse({
				...queryAuth,
				data: res,
			}),
		[updateCourse]
	);

	const remove = useCallback(
		(id: string) =>
			removeCourse({
				...queryAuth,
				id,
			}),
		[updateCourse]
	);

	useEffect(() => {
		if (resultUpdateCourse.status === QueryStatus.fulfilled) {
			if (
				resultUpdateCourse.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateCourse.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд Курс изменился");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateCourse.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateCourse]);

	useEffect(() => {
		if (resultRemoveCourse.status === QueryStatus.fulfilled) {
			if (
				resultRemoveCourse.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveCourse.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд Курс удален");
				refetch && refetch();
				setOpen(false);
			} else {
				resultRemoveCourse.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveCourse]);

	useEffect(() => {
		if (open) {
			getCourse({
				...queryAuth,
				idCourse: idCourse,
			});
		}
	}, [open]);

	return (
		<>
			<Button
				title={"Редактировать"}
				padding={"11px 28px"}
				fontSize={"14px"}
				lineHeight={"20px"}
				fontWeight={"600"}
				background={Colors.BLUE}
				color={Colors.WHITE}
				backgroundAnimation={Colors.BLUE_DARK}
				colorHover={Colors.WHITE}
				width={"100%"}
				onClick={() => {
					setOpen(true);
				}}
			/>

			{/*MODAL WINDOW_______________________*/}
			<WindowFormik
				handleClose={() => setOpen(false)}
				isOpen={open}
				title={"Созданние урока "}
			>
				<>
					{course.data && data?.data ? (
						<CourseSettingsBodyWindow
							initialValues={course.data}
							sendData={async (data: ICourseState) => {
								return update(data);
							}}
							remove={async (e: string) => remove(e)}
							categories={data.data}
						/>
					) : (
						<Loader />
					)}
				</>
			</WindowFormik>

			<ModalToaster>
				<Toaster
					position="bottom-left"
					reverseOrder={false}
				/>
			</ModalToaster>
		</>
	);
};
