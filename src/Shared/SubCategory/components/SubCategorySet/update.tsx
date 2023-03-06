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
	GetSubCategoryApiProps,
	useDeleteSubCategoryMutation,
	useGetSubCategoryMutation,
	useUpdateSubCategoryMutation,
} from "../../redux/subCategory.api";
import { ISubCategoryState } from "../../redux/subCategory.slice";
import SubCategorySettingsBodyWindow from "../../../../Components/ModalWindows/Body/SubCategorySettingsBodyWindow";

type subCategoryUpdateProps = Pick<CourseResultType, "refetch"> &
	Pick<GetSubCategoryApiProps, "idSubCategory">;

export const SubCategoryUpdate: FC<subCategoryUpdateProps> = ({
	refetch,
	idSubCategory,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getSubCategory, subCategory] = useGetSubCategoryMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateSubCategory, resultUpdateSubCategory] =
		useUpdateSubCategoryMutation();

	const [removeSubCategory, resultRemoveSubCategory] =
		useDeleteSubCategoryMutation();

	const update = useCallback(
		(res: ISubCategoryState) =>
			updateSubCategory({
				...queryAuth,
				data: res,
			}),
		[updateSubCategory]
	);

	const remove = useCallback(
		(id: string) =>
			removeSubCategory({
				...queryAuth,
				id,
			}),
		[removeSubCategory]
	);

	useEffect(() => {
		if (resultUpdateSubCategory.status === QueryStatus.fulfilled) {
			if (
				resultUpdateSubCategory.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateSubCategory.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд Курс изменился");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateSubCategory.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateSubCategory]);

	useEffect(() => {
		if (resultRemoveSubCategory.status === QueryStatus.fulfilled) {
			if (
				resultRemoveSubCategory.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveSubCategory.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд Курс удален");
				setOpen(false);
				refetch && refetch();
			} else {
				resultRemoveSubCategory.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveSubCategory]);

	useEffect(() => {
		if (open) {
			getSubCategory({
				...queryAuth,
				idSubCategory: idSubCategory,
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
				title={"редактирование"}
			>
				<>
					{subCategory.data ? (
						<SubCategorySettingsBodyWindow
							initialValues={subCategory.data}
							sendData={async (data: ISubCategoryState) => {
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
