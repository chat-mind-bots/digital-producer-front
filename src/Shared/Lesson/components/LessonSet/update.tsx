import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { ReactComponent as IcoSettings } from "Icons/Settings2.svg";
import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import LessonSettingsBodyWindow from "../../../../Components/ModalWindows/Body/LessonSettingsBodyWindow";
import { ILessonState } from "../../redux/lesson.slice";
import {
	AddLessonToModuleApiProps,
	GetLessonApiProps,
	useGetLessonMutation,
	useRemoveLessonMutation,
	useUpdateLessonMutation,
} from "../../redux/lesson.api";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import Loader from "../../../../Components/UI-KIT/Loader";

type LessonSetProps = Pick<AddLessonToModuleApiProps, "idLesson"> &
	Pick<CourseResultType, "refetch">;

export const LessonUpdate: FC<LessonSetProps> = ({ idLesson, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetLessonApiProps = {
		authToken: auth.token ?? "",
	};

	const [getLesson, lesson] = useGetLessonMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateLesson, resultUpdateLesson] = useUpdateLessonMutation();

	const [removeLesson, resultRemoveLesson] = useRemoveLessonMutation();

	const update = useCallback(
		(res: ILessonState) =>
			updateLesson({
				...queryAuth,
				data: res,
			}),
		[updateLesson]
	);

	const remove = useCallback(
		(id: string) =>
			removeLesson({
				...queryAuth,
				id,
			}),
		[updateLesson]
	);

	useEffect(() => {
		if (resultUpdateLesson.status === QueryStatus.fulfilled) {
			if (
				resultUpdateLesson.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateLesson.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Урок изменен");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateLesson.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateLesson]);

	useEffect(() => {
		if (resultRemoveLesson.status === QueryStatus.fulfilled) {
			if (
				resultRemoveLesson.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveLesson.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Урок удален");
				setOpen(false);
				refetch && refetch();
			} else {
				resultRemoveLesson.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveLesson]);

	useEffect(() => {
		if (open) {
			getLesson({
				...queryAuth,
				id: idLesson,
			});
		}
	}, [open]);

	return (
		<>
			<IcoSettings
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					setOpen(true);
				}}
			/>

			{/*MODAL WINDOW_______________________*/}
			<WindowFormik
				handleClose={() => setOpen(false)}
				isOpen={open}
				title={"Редактирование урока"}
			>
				<>
					{lesson.data ? (
						<LessonSettingsBodyWindow
							initialValues={lesson.data}
							sendData={async (data: ILessonState) => {
								return update(data);
							}}
							// handleClose={() => setOpen(false)}
							remove={async (e: string) => remove(e)}
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
