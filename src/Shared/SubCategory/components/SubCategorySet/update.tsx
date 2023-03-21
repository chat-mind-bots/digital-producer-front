import React, { FC, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { ReactComponent as IcoSettings } from "Icons/Settings2.svg";

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
import * as ST from "./styled";

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

	const remove = (id: string) =>
		removeSubCategory({
			...queryAuth,
			id,
		});

	useEffect(() => {
		if (resultUpdateSubCategory.status === QueryStatus.fulfilled) {
			if (
				resultUpdateSubCategory.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateSubCategory.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Саб категория изменена");
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
				toast.success("Саб категория удалена");
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
			<ST.WrapperEdit
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					setOpen(true);
				}}
			>
				<IcoSettings />
			</ST.WrapperEdit>

			{/*MODAL WINDOW_______________________*/}
			<WindowFormik
				handleClose={() => setOpen(false)}
				isOpen={open}
				title={"Редактирование саб категории"}
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
		</>
	);
};
