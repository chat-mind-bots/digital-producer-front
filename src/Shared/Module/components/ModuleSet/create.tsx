import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import Colors from "../../../../Constants/Colors";
import Button from "../../../../Components/UI-KIT/Atoms/Button";
import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import ModuleSettingsBodyWindow from "../../../../Components/ModalWindows/Body/ModuleSettingsBodyWindow";
import { IModuleState, initialModuleState } from "../../redux/module.slice";
import {
	useCreateModuleMutation,
	GetModuleApiProps,
	useAddModuleToCourseMutation,
	AddModuleToCourseApiProps,
} from "../../redux/module.api";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import { AbsoluteLoader } from "../../../../Components/UI-KIT/Loader";

type ModuleCreateProps = Pick<CourseResultType, "refetch"> &
	Pick<AddModuleToCourseApiProps, "idCourse"> & {
		setLoader: (e: boolean) => void;
	};

export const ModuleCreate: FC<ModuleCreateProps> = ({
	idCourse,
	refetch,
	setLoader,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetModuleApiProps = {
		authToken: auth.token ?? "",
	};
	const [loaderWindow, setLoaderWindow] = useState<boolean>(false);

	const [open, setOpen] = useState<boolean>(false);

	const [createModule, resultCreateModule] = useCreateModuleMutation();
	const [addCourseToModule, resultAddCourseToModule] =
		useAddModuleToCourseMutation();

	const create = useCallback(
		(res: IModuleState) => {
			setLoaderWindow(true);
			createModule({
				...queryAuth,
				data: res,
			});
		},
		[createModule]
	);

	useEffect(() => {
		if (resultCreateModule.status === QueryStatus.fulfilled) {
			if (
				resultCreateModule.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateModule.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Модуль создан");
				const query: AddModuleToCourseApiProps = {
					...queryAuth,
					idModule: resultCreateModule.data.id as string,
					idCourse: idCourse,
				};
				setOpen(false);
				setLoaderWindow(false);
				setLoader(true);
				addCourseToModule(query);
			} else {
				setLoaderWindow(false);
				resultCreateModule.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateModule]);

	useEffect(() => {
		if (resultAddCourseToModule.status === QueryStatus.fulfilled) {
			if (
				resultAddCourseToModule.data?.statusCode === RequestStatuses.SUCCESS ||
				resultAddCourseToModule.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Модуль привязан к курсу");
				refetch && refetch();
				setTimeout(() => setLoader(false), 2000);
			} else {
				setTimeout(() => setLoader(false), 2000);
				resultCreateModule.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultAddCourseToModule]);

	return (
		<>
			<Button
				title={"Добавить модуль"}
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
					title={"Создание модуля"}
				>
					<>
						{loaderWindow && <AbsoluteLoader />}
						<ModuleSettingsBodyWindow
							initialValues={initialModuleState}
							sendData={async (data: IModuleState) => {
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
