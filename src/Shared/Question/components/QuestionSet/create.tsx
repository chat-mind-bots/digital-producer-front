import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import {
	AddQuestionToTestApiProps,
	useAddQuestionToCourseMutation,
	useCreateQuestionMutation,
} from "../../redux/question.api";
import {
	initialQuestionState,
	IQuestionState,
} from "../../redux/question.slice";
import TestCardProducer from "../../../../Components/UI-KIT/TestCard/Producer";
import QuestionSettingsBodyWindow from "../../../../Components/ModalWindows/Body/QuestionSettingsBodyWindow";

type TestCreateProps = Pick<CourseResultType, "refetch"> &
	Pick<AddQuestionToTestApiProps, "idTest">;

export const QuestionCreate: FC<TestCreateProps> = ({ idTest, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const [createQuestion, resultCreateQuestion] = useCreateQuestionMutation();
	const [addQuestionToTest, resultAddQuestionToTest] =
		useAddQuestionToCourseMutation();

	const create = useCallback(
		(res: IQuestionState) =>
			createQuestion({
				...queryAuth,
				data: res,
			}),
		[createQuestion]
	);

	useEffect(() => {
		if (resultCreateQuestion.status === QueryStatus.fulfilled) {
			if (
				resultCreateQuestion.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateQuestion.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				const query: AddQuestionToTestApiProps = {
					...queryAuth,
					idQuestion: resultCreateQuestion.data.id,
					idTest: idTest,
				};
				toast.success("Все гуд вопрос создался");
				addQuestionToTest(query);
			} else {
				resultCreateQuestion.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateQuestion]);

	useEffect(() => {
		if (resultAddQuestionToTest.status === QueryStatus.fulfilled) {
			if (
				resultAddQuestionToTest.data?.statusCode === RequestStatuses.SUCCESS ||
				resultAddQuestionToTest.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд вопрос привязался");
				setOpen(false);
				refetch && refetch();
			} else {
				resultAddQuestionToTest.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultAddQuestionToTest]);

	return (
		<>
			<TestCardProducer onClick={() => setOpen(true)} />

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Созданние вопроса для теста "}
				>
					<QuestionSettingsBodyWindow
						initialValues={initialQuestionState}
						sendData={async (data: IQuestionState) => {
							return create(data);
						}}
						handleClose={() => setOpen(false)}
					/>
				</WindowFormik>
			)}

			{/*MODAL WINDOW_______________________*/}

			<ModalToaster>
				<Toaster
					position="bottom-left"
					reverseOrder={false}
				/>
			</ModalToaster>
		</>
	);
};
