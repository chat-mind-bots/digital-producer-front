import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import {
	AddTestToLessonApiProps,
	useAddTestToLessonMutation,
	useCreateTestMutation,
} from "../../redux/test.api";
import { initialTestState, ITestState } from "../../redux/test.slice";
import TestSettingsBodyWindow from "../../../../Components/ModalWindows/Body/TestSettingsBodyWindow";
import TestCardProducer from "../../../../Components/UI-KIT/TestCard/Producer";

type TestCreateProps = Pick<CourseResultType, "refetch"> &
	Pick<AddTestToLessonApiProps, "idLesson">;

export const TestCreate: FC<TestCreateProps> = ({ idLesson, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const [createTest, resultCreateTest] = useCreateTestMutation();
	const [addTestToLesson, resultAddTestToLesson] = useAddTestToLessonMutation();

	const create = useCallback(
		(res: ITestState) =>
			createTest({
				...queryAuth,
				data: res,
			}),
		[createTest]
	);

	useEffect(() => {
		if (resultCreateTest.status === QueryStatus.fulfilled) {
			if (
				resultCreateTest.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateTest.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд  тест создался");
				const query: AddTestToLessonApiProps = {
					...queryAuth,
					idTest: resultCreateTest.data.id as string,
					idLesson: idLesson,
				};
				setOpen(false);
				addTestToLesson(query);
			} else {
				resultCreateTest.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateTest]);

	useEffect(() => {
		if (resultAddTestToLesson.status === QueryStatus.fulfilled) {
			toast.success("Все гуд тест привязался");
			refetch && refetch();
		}
	}, [resultAddTestToLesson]);

	return (
		<>
			<TestCardProducer onClick={() => setOpen(true)} />

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Созданние теста "}
				>
					<TestSettingsBodyWindow
						initialValues={initialTestState}
						sendData={async (data: ITestState) => {
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
