import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { ReactComponent as IcoSettings } from "Icons/Settings2.svg";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import Loader from "../../../../Components/UI-KIT/Loader";
import {
	AddTestToLessonApiProps,
	useGetTestMMutation,
	useRemoveTestMutation,
	useUpdateTestMutation,
} from "../../redux/test.api";
import { ITestState } from "../../redux/test.slice";
import TestSettingsBodyWindow from "../../../../Components/ModalWindows/Body/TestSettingsBodyWindow";

type TestUpdateProps = Pick<AddTestToLessonApiProps, "idTest"> &
	Pick<CourseResultType, "refetch"> & {
		setLoading: (e: boolean) => void;
	};

export const TestUpdate: FC<TestUpdateProps> = ({
	idTest,
	refetch,
	setLoading,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getTest, test] = useGetTestMMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateTest, resultUpdateTest] = useUpdateTestMutation();

	const [removeTest, resultRemoveTest] = useRemoveTestMutation();

	const update = useCallback(
		(res: ITestState) => {
			setLoading(true);
			updateTest({
				...queryAuth,
				data: res,
			});
		},
		[updateTest]
	);

	const remove = useCallback(
		(id: string) => {
			setLoading(true);
			removeTest({
				...queryAuth,
				id,
			});
		},
		[updateTest]
	);

	useEffect(() => {
		if (resultUpdateTest.status === QueryStatus.fulfilled) {
			if (
				resultUpdateTest.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateTest.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Тест измененн");
				setOpen(false);
				refetch && refetch();
				setTimeout(() => setLoading(false), 2000);
			} else {
				resultUpdateTest.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
					setTimeout(() => setLoading(false), 2000);
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
				toast.success("Тест удален");
				setOpen(false);
				refetch && refetch();
				setTimeout(() => setLoading(false), 2000);
			} else {
				resultRemoveTest.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
					setTimeout(() => setLoading(false), 2000);
				});
			}
		}
	}, [resultRemoveTest]);

	useEffect(() => {
		if (open) {
			getTest({
				...queryAuth,
				idTest: idTest,
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
				title={"Редактирование теста"}
			>
				<>
					{test.data ? (
						<TestSettingsBodyWindow
							initialValues={test.data}
							sendData={async (data: ITestState) => {
								return update(data);
							}}
							remove={async (e: string) => remove(e)}
						/>
					) : (
						<Loader />
					)}
				</>
			</WindowFormik>
		</>
	);
};
