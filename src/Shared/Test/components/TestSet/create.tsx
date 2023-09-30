import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import {
	AddTestToLessonApiProps,
	useCreateTestMutation,
} from "../../redux/test.api";
import { initialTestState, ITestState } from "../../redux/test.slice";
import TestSettingsBodyWindow from "../../../../Components/ModalWindows/Body/TestSettingsBodyWindow";
import TestCardProducer from "../../../../Components/UI-KIT/TestCard/Producer";
import { AbsoluteLoader } from "../../../../Components/UI-KIT/Loader";

type TestCreateProps = Pick<CourseResultType, "refetch"> &
	Pick<AddTestToLessonApiProps, "idLesson">;

export const TestCreate: FC<TestCreateProps> = ({ idLesson, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};
	const [loaderWindow, setLoaderWindow] = useState<boolean>(false);

	const [open, setOpen] = useState<boolean>(false);

	const [createTest, resultCreateTest] = useCreateTestMutation();

	const create = useCallback(
		(res: ITestState) => {
			setLoaderWindow(true);
			createTest({
				...queryAuth,
				data: { ...res, lessonId: idLesson },
			});
		},
		[createTest]
	);

	useEffect(() => {
		if (resultCreateTest.status === QueryStatus.fulfilled) {
			if (
				resultCreateTest.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateTest.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Тест создан");
				setOpen(false);
				setLoaderWindow(false);
				refetch && refetch();
			} else {
				resultCreateTest.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateTest]);

	return (
		<>
			<TestCardProducer onClick={() => setOpen(true)} />

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Создание теста"}
				>
					<>
						{loaderWindow && <AbsoluteLoader />}
						<TestSettingsBodyWindow
							initialValues={initialTestState}
							sendData={async (data: ITestState) => {
								return create(data);
							}}
							handleClose={() => setOpen(false)}
						/>
					</>
				</WindowFormik>
			)}

			{/*MODAL WINDOW_______________________*/}
		</>
	);
};
