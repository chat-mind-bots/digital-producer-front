import React, { FC, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { ReactComponent as IcoSettings } from "Icons/Settings.svg";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { IModuleState } from "../../redux/module.slice";
import {
	AddModuleToCourseApiProps,
	GetModuleApiProps,
	useGetModuleMutation,
	useRemoveModuleMutation,
	useUpdateModuleMutation,
} from "../../redux/module.api";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import Loader from "../../../../Components/UI-KIT/Loader";
import ModuleSettingsBodyWindow from "../../../../Components/ModalWindows/Body/ModuleSettingsBodyWindow";

type ModuleUpdateProps = Pick<CourseResultType, "refetch"> &
	Pick<AddModuleToCourseApiProps, "idModule">;

export const ModuleUpdate: FC<ModuleUpdateProps> = ({ idModule, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetModuleApiProps = {
		authToken: auth.token ?? "",
	};

	const [getModule, module] = useGetModuleMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateModule, resultUpdateModule] = useUpdateModuleMutation();

	const [removeModule, resultRemoveModule] = useRemoveModuleMutation();

	const update = useCallback(
		(res: IModuleState) =>
			updateModule({
				...queryAuth,
				data: res,
			}),
		[updateModule]
	);

	const remove = useCallback(
		(id: string) =>
			removeModule({
				...queryAuth,
				id,
			}),
		[updateModule]
	);

	useEffect(() => {
		if (resultUpdateModule.status === QueryStatus.fulfilled) {
			if (
				resultUpdateModule.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateModule.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Модуль изменен");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateModule.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateModule]);

	useEffect(() => {
		if (resultRemoveModule.status === QueryStatus.fulfilled) {
			if (
				resultRemoveModule.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveModule.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Модуль удален");
				setOpen(false);
				refetch && refetch();
			} else {
				resultRemoveModule.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveModule]);

	useEffect(() => {
		if (open) {
			getModule({
				...queryAuth,
				id: idModule,
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
				title={"Редактирование модуля"}
			>
				<>
					{module.data ? (
						<ModuleSettingsBodyWindow
							initialValues={module.data}
							sendData={async (data: IModuleState) => {
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
		</>
	);
};
