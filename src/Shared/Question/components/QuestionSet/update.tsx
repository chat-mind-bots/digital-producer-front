import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { ReactComponent as IcoSettings } from "Icons/Settings2.svg";
import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import Loader from "../../../../Components/UI-KIT/Loader";
import {
	GetQuestionApiProps,
	useGetQuestionMutation,
	useRemoveQuestionMutation,
	useUpdateQuestionMutation,
} from "../../redux/question.api";
import { IQuestionState } from "../../redux/question.slice";
import QuestionSettingsBodyWindow from "../../../../Components/ModalWindows/Body/QuestionSettingsBodyWindow";

type LessonSetProps = Pick<GetQuestionApiProps, "idQuestion"> &
	Pick<CourseResultType, "refetch">;

export const QuestionUpdate: FC<LessonSetProps> = ({ idQuestion, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getQuestion, question] = useGetQuestionMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateQuestion, resultUpdateQuestion] = useUpdateQuestionMutation();

	const [removeQuestion, resultRemoveQuestion] = useRemoveQuestionMutation();

	const update = useCallback(
		(res: IQuestionState) =>
			updateQuestion({
				...queryAuth,
				data: res,
				idQuestion: idQuestion,
			}),
		[updateQuestion]
	);

	const remove = useCallback(
		(id: string) =>
			removeQuestion({
				...queryAuth,
				id,
			}),
		[removeQuestion]
	);

	useEffect(() => {
		if (resultUpdateQuestion.status === QueryStatus.fulfilled) {
			if (
				resultUpdateQuestion.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateQuestion.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд вопрос изменился");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateQuestion.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateQuestion]);

	useEffect(() => {
		if (resultRemoveQuestion.status === QueryStatus.fulfilled) {
			if (
				resultRemoveQuestion.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveQuestion.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд вопрос удален");
				setOpen(false);
				refetch && refetch();
			} else {
				resultRemoveQuestion.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveQuestion]);

	useEffect(() => {
		if (open) {
			getQuestion({
				...queryAuth,
				idQuestion: idQuestion,
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
				title={"Созданние урока "}
			>
				<>
					{question.data ? (
						<QuestionSettingsBodyWindow
							initialValues={question.data}
							sendData={async (data: IQuestionState) => {
								return update(data);
							}}
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
