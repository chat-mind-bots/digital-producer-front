import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import Colors from "../../../../Constants/Colors";
import Button from "../../../../Components/UI-KIT/Atoms/Button";
import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import LessonSettingsBodyWindow from "../../../../Components/ModalWindows/Body/LessonSettingsBodyWindow";
import { ILessonState, initialLessonState } from "../../redux/lesson.slice";
import {
	AddLessonToModuleApiProps,
	GetLessonApiProps,
	useAddLessonToModuleMutation,
	useCreateLessonMutation,
} from "../../redux/lesson.api";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import { AbsoluteLoader } from "../../../../Components/UI-KIT/Loader";

type LessonCreateProps = Pick<AddLessonToModuleApiProps, "idModule"> &
	Pick<CourseResultType, "refetch"> & {
		setLoader: (e: boolean) => void;
	};

export const LessonCreate: FC<LessonCreateProps> = ({
	idModule,
	refetch,
	setLoader,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetLessonApiProps = {
		authToken: auth.token ?? "",
	};
	const [loaderWindow, setLoaderWindow] = useState<boolean>(false);

	const [open, setOpen] = useState<boolean>(false);

	const [createLesson, resultCreateLesson] = useCreateLessonMutation();
	const [addLessonToModule, resultAddLessonToModule] =
		useAddLessonToModuleMutation();

	const create = useCallback(
		(res: ILessonState) => {
			setLoaderWindow(true);
			createLesson({
				...queryAuth,
				data: res,
			});
		},
		[createLesson]
	);

	useEffect(() => {
		if (resultCreateLesson.status === QueryStatus.fulfilled) {
			if (
				resultCreateLesson.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateLesson.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Урок создан");
				const query: AddLessonToModuleApiProps = {
					...queryAuth,
					idLesson: resultCreateLesson.data.id as string,
					idModule: idModule,
				};
				setOpen(false);
				setLoaderWindow(false);
				setLoader(true);
				addLessonToModule(query);
			} else {
				setLoaderWindow(false);
				resultCreateLesson.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateLesson]);

	useEffect(() => {
		if (resultAddLessonToModule.status === QueryStatus.fulfilled) {
			if (
				resultAddLessonToModule.data?.statusCode === RequestStatuses.SUCCESS ||
				resultAddLessonToModule.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Урок добавлен в курс");
				refetch && refetch();
				setTimeout(() => setLoader(false), 2000);
			} else {
				setTimeout(() => setLoader(false), 2000);
				resultCreateLesson.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultAddLessonToModule]);

	return (
		<>
			<Button
				title={"Добавить урок"}
				padding={"10px 16px"}
				fontSize={"16px"}
				lineHeight={"20px"}
				fontWeight={"600"}
				background={Colors.TRANSPARENT}
				color={Colors.GREY4}
				backgroundAnimation={Colors.GREY4}
				colorHover={Colors.WHITE}
				border={`2px solid ${Colors.GREY4}`}
				width={"100%"}
				onClick={() => setOpen(true)}
			/>

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Создание урока"}
				>
					<>
						{loaderWindow && <AbsoluteLoader />}
						<LessonSettingsBodyWindow
							initialValues={initialLessonState}
							sendData={async (data: ILessonState) => {
								return create(data);
							}}
							handleClose={() => setOpen(false)}
						/>
					</>
				</WindowFormik>
			)}
		</>
	);
};
