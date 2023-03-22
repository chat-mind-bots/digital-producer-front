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
	GetCategoryApiProps,
	useDeleteCategoryMutation,
	useGetCategoryMutation,
	useUpdateCategoryMutation,
} from "../../redux/category.api";
import { ICategoryState } from "../../redux/category.slice";
import CategorySettingsBodyWindow from "../../../../Components/ModalWindows/Body/CategorySettingsBodyWindow";
import * as ST from "./styled";

type CategoryUpdateProps = Pick<CourseResultType, "refetch"> &
	Pick<GetCategoryApiProps, "idCategory">;

export const CategoryUpdate: FC<CategoryUpdateProps> = ({
	refetch,
	idCategory,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getCategory, subCategory] = useGetCategoryMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateCategory, resultUpdateCategory] = useUpdateCategoryMutation();

	const [removeCategory, resultRemoveCategory] = useDeleteCategoryMutation();

	const update = useCallback(
		(res: ICategoryState) =>
			updateCategory({
				...queryAuth,
				data: res,
			}),
		[updateCategory]
	);

	const remove = useCallback(
		(id: string) =>
			removeCategory({
				...queryAuth,
				id,
			}),
		[removeCategory]
	);

	useEffect(() => {
		if (resultUpdateCategory.status === QueryStatus.fulfilled) {
			if (
				resultUpdateCategory.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateCategory.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Категория изменена");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateCategory.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateCategory]);

	useEffect(() => {
		if (resultRemoveCategory.status === QueryStatus.fulfilled) {
			if (
				resultRemoveCategory.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveCategory.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Категория удалена");
				setOpen(false);
				refetch && refetch();
			} else {
				resultRemoveCategory.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveCategory]);

	useEffect(() => {
		if (open) {
			getCategory({
				...queryAuth,
				idCategory: idCategory,
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
				title={"Редактирование категории"}
			>
				<>
					{subCategory.data ? (
						<CategorySettingsBodyWindow
							initialValues={subCategory.data}
							sendData={async (data: ICategoryState) => {
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
