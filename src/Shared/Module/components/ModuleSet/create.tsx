import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import Colors from "../../../../Colors";
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
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";

type ModuleCreateProps = Pick<CourseResultType, "refetch"> &
	Pick<AddModuleToCourseApiProps, "idCourse">;

export const ModuleCreate: FC<ModuleCreateProps> = ({ idCourse, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetModuleApiProps = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const [createModule, resultCreateModule] = useCreateModuleMutation();
	const [addCourseToModule, resultAddCourseToModule] =
		useAddModuleToCourseMutation();

	const create = useCallback(
		(res: IModuleState) =>
			createModule({
				...queryAuth,
				data: res,
			}),
		[createModule]
	);

	useEffect(() => {
		if (resultCreateModule.status === QueryStatus.fulfilled) {
			if (
				resultCreateModule.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateModule.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд модуль создался");
				const query: AddModuleToCourseApiProps = {
					...queryAuth,
					idModule: resultCreateModule.data.id as string,
					idCourse: idCourse,
				};
				setOpen(false);
				addCourseToModule(query);
			} else {
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
				toast.success("Все гуд модуль привязался");
				refetch && refetch();
			} else {
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
					title={"Созданние модуля "}
				>
					<ModuleSettingsBodyWindow
						initialValues={initialModuleState}
						sendData={async (data: IModuleState) => {
							return create(data);
						}}
						handleClose={() => setOpen(false)}
					/>
				</WindowFormik>
			)}

			<ModalToaster>
				<Toaster
					position="bottom-left"
					reverseOrder={false}
				/>
			</ModalToaster>
		</>
	);
};
