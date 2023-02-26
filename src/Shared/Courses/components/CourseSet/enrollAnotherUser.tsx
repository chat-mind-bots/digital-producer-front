import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import {
	EnrollAnotherUserToCourseApiProps,
	useEnrollAnotherUserToCourseMutation,
} from "../../redux/course.api";
import { useGetCategoriesQuery } from "../../../Category/redux/category.api";
import Loader from "../../../../Components/UI-KIT/Loader";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import EnrollAnotherUserSettingsBodyWindow from "../../../../Components/ModalWindows/Body/EnrollAnotherUserSettingsBodyWindow";
import { useGetUsersMMutation } from "../../../User/redux/user.api";
import StudentsCreate from "../../../../Components/UI-KIT/StudentsTable/create";

export const EnrollAnotherUserToCourse: FC<
	Pick<CourseResultType, "refetch"> &
		Pick<EnrollAnotherUserToCourseApiProps, "idCourse">
> = ({ refetch, idCourse }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const { data } = useGetCategoriesQuery(queryAuth);

	const [enrollAnotherUserToCourse, resultEnrollAnotherUserToCourse] =
		useEnrollAnotherUserToCourseMutation();

	const [getUser, resultGetUser] = useGetUsersMMutation();

	const getUsers = useCallback(
		(nameUser: string) => {
			getUser({ ...queryAuth, q: nameUser });
		},
		[enrollAnotherUserToCourse]
	);

	const enrollAnotherUser = useCallback(
		(idUsers: string) => {
			enrollAnotherUserToCourse({
				...queryAuth,
				idCourse: idCourse,
				idUsers: [idUsers],
			});
		},
		[enrollAnotherUserToCourse]
	);

	useEffect(() => {
		if (resultGetUser.status === QueryStatus.fulfilled) {
			if (
				resultGetUser.data?.statusCode === RequestStatuses.SUCCESS ||
				resultGetUser.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				if (resultGetUser.data.data.length === 1) {
					toast.success("Все гуд пользовватель найден");
					setOpen(false);
					enrollAnotherUser(resultGetUser.data.data[0].id);
				} else {
					toast.error("Ошибка: пользовватель не найден");
				}
			} else {
				toast.error("Ошибка: с запросом ");
			}
		}
	}, [resultGetUser]);

	useEffect(() => {
		if (resultEnrollAnotherUserToCourse.status === QueryStatus.fulfilled) {
			if (
				resultEnrollAnotherUserToCourse.data?.statusCode ===
					RequestStatuses.SUCCESS ||
				resultEnrollAnotherUserToCourse.data?.statusCode ===
					RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд пользовватель добаввлен в курс");
				setOpen(false);
				refetch && refetch();
			} else {
				resultEnrollAnotherUserToCourse.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultEnrollAnotherUserToCourse]);

	return (
		<>
			<StudentsCreate onClick={() => setOpen(true)} />

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"добавление юзера  "}
				>
					{data?.data ? (
						<EnrollAnotherUserSettingsBodyWindow
							initialValues={{ name: "" }}
							sendData={async (data: string) => {
								return getUsers(data);
							}}
							handleClose={() => setOpen(false)}
						/>
					) : (
						<Loader />
					)}
				</WindowFormik>
			)}

			<ModalToaster>
				<Toaster
					position="bottom-left"
					reverseOrder={false}
				/>
			</ModalToaster>
		</>
	);
};
