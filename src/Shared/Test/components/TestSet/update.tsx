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
	AddTestToLessonApiProps,
	useGetTestMutation,
	useRemoveTestMutation,
	useUpdateTestMutation,
} from "../../redux/test.api";
import { ITestState } from "../../redux/test.slice";
import TestSettingsBodyWindow from "../../../../Components/ModalWindows/Body/TestSettingsBodyWindow";

type TestUpdateProps = Pick<AddTestToLessonApiProps, "idTest"> &
	Pick<CourseResultType, "refetch">;

export const TestUpdate: FC<TestUpdateProps> = ({ idTest, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getTest, test] = useGetTestMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateTest, resultUpdateTest] = useUpdateTestMutation();

	const [removeTest, resultRemoveTest] = useRemoveTestMutation();

	const update = useCallback(
		(res: ITestState) =>
			updateTest({
				...queryAuth,
				data: res,
			}),
		[updateTest]
	);

	const remove = useCallback(
		(id: string) =>
			removeTest({
				...queryAuth,
				id,
			}),
		[updateTest]
	);

	useEffect(() => {
		if (resultUpdateTest.status === QueryStatus.fulfilled) {
			if (
				resultUpdateTest.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateTest.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд Курс изменился");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateTest.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateTest]);

	useEffect(() => {
		if (resultRemoveTest.status === QueryStatus.fulfilled) {
			if (
				resultRemoveTest.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveTest.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд тест удален");
				setOpen(false);
				refetch && refetch();
			} else {
				resultRemoveTest.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveTest]);

	useEffect(() => {
		if (open) {
			getTest({
				...queryAuth,
				id: idTest,
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
				title={"Созданние теста "}
			>
				<>
					{test.data ? (
						<TestSettingsBodyWindow
							initialValues={test.data}
							sendData={async (data: ITestState) => {
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
