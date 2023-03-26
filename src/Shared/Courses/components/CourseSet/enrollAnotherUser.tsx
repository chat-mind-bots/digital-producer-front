import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import {
	EnrollAnotherUserToCourseApiProps,
	useEnrollAnotherUserToCourseMutation,
} from "../../redux/course.api";
import { useGetCategoriesQuery } from "../../../Category/redux/category.api";
import Loader, { AbsoluteLoader } from "../../../../Components/UI-KIT/Loader";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import EnrollAnotherUserSettingsBodyWindow from "../../../../Components/ModalWindows/Body/EnrollAnotherUserSettingsBodyWindow";
import { useGetUsersByNameMutation } from "../../../User/redux/user.api";
import StudentsCreate from "../../../../Components/UI-KIT/StudentsTable/create";

export const EnrollAnotherUserToCourse: FC<
	Pick<CourseResultType, "refetch"> &
		Pick<EnrollAnotherUserToCourseApiProps, "idCourse">
> = ({ refetch, idCourse }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};
	const [loaderWindow, setLoaderWindow] = useState<boolean>(false);

	const [open, setOpen] = useState<boolean>(false);

	const { data } = useGetCategoriesQuery(queryAuth);

	const [enrollAnotherUserToCourse, resultEnrollAnotherUserToCourse] =
		useEnrollAnotherUserToCourseMutation();

	const [getUser, resultGetUser] = useGetUsersByNameMutation();

	const getUsers = useCallback(
		(nameUser: string) => {
			setLoaderWindow(true);
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
				if (resultGetUser.data) {
					toast.success("Пользователь найден");
					setLoaderWindow(false);
					setOpen(false);
					enrollAnotherUser(resultGetUser.data.id);
				} else {
					toast.error("Ошибка: пользователь не найден");
					setLoaderWindow(false);
				}
			} else {
				toast.error("Ошибка: пользователь не найден");
				setLoaderWindow(false);
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
				toast.success("Пользователь добавлен в курс");
				setOpen(false);
				refetch && refetch();
				setLoaderWindow(false);
			} else {
				setLoaderWindow(false);
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
					title={"Добавление пользователя в курс"}
				>
					<>
						{loaderWindow && <AbsoluteLoader />}
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
					</>
				</WindowFormik>
			)}
		</>
	);
};
