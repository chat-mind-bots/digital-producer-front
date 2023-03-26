import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
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
import RequestStatuses from "../../../../Constants/RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import Loader, { AbsoluteLoader } from "../../../../Components/UI-KIT/Loader";
import ModuleSettingsBodyWindow from "../../../../Components/ModalWindows/Body/ModuleSettingsBodyWindow";

type ModuleUpdateProps = Pick<CourseResultType, "refetch"> &
	Pick<AddModuleToCourseApiProps, "idModule"> & {
		setLoader: (e: boolean) => void;
	};

export const ModuleUpdate: FC<ModuleUpdateProps> = ({
	idModule,
	refetch,
	setLoader,
}) => {
	const [loaderWindow, setLoaderWindow] = useState<boolean>(false);
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetModuleApiProps = {
		authToken: auth.token ?? "",
	};

	const [getModule, module] = useGetModuleMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateModule, resultUpdateModule] = useUpdateModuleMutation();

	const [removeModule, resultRemoveModule] = useRemoveModuleMutation();

	const update = useCallback(
		(res: IModuleState) => {
			setLoaderWindow(true);
			updateModule({
				...queryAuth,
				data: res,
			});
		},
		[updateModule]
	);

	const remove = useCallback(
		(id: string) => {
			setLoaderWindow(true);
			removeModule({
				...queryAuth,
				id,
			});
		},
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
				setLoaderWindow(false);
				setLoader(true);
				refetch && refetch();
				setTimeout(() => setLoader(false), 2000);
			} else {
				setLoaderWindow(false);
				setTimeout(() => setLoader(false), 2000);
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
				setLoaderWindow(false);
				setLoader(true);
				refetch && refetch();
				setTimeout(() => setLoader(false), 2000);
			} else {
				setLoaderWindow(false);
				setTimeout(() => setLoader(false), 2000);
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
					{loaderWindow && <AbsoluteLoader />}
					{module.data ? (
						<ModuleSettingsBodyWindow
							initialValues={module.data}
							sendData={async (data: IModuleState) => {
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
