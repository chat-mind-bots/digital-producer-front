import React, { FC, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import Colors from "../../../../Colors";
import Button from "../../../../Components/UI-KIT/Atoms/Button";
import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import { useCreateSubCategoryMutation } from "../../redux/subCategory.api";
import {
	initialSubCategoryState,
	ISubCategoryEnum,
	ISubCategoryState,
} from "../../redux/subCategory.slice";
import SubCategorySettingsBodyWindow from "../../../../Components/ModalWindows/Body/SubCategorySettingsBodyWindow";

type SubCategoryCreateProps = Pick<CourseResultType, "refetch"> &
	Pick<ISubCategoryState, ISubCategoryEnum.categoryId>;

export const SubCategoryCreate: FC<SubCategoryCreateProps> = ({
	refetch,
	categoryId,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const [createSubCategory, resultSubCreateCategory] =
		useCreateSubCategoryMutation();

	const create = useCallback(
		(res: ISubCategoryState) =>
			createSubCategory({
				...queryAuth,
				data: res,
			}),
		[createSubCategory]
	);

	useEffect(() => {
		if (resultSubCreateCategory.status === QueryStatus.fulfilled) {
			if (
				resultSubCreateCategory.data?.statusCode === RequestStatuses.SUCCESS ||
				resultSubCreateCategory.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Категория создана");
				setOpen(false);
				refetch && refetch();
			} else {
				resultSubCreateCategory.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultSubCreateCategory]);

	return (
		<>
			<Button
				title={"Добавить саб-категорию"}
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
				disabled={!categoryId}
			/>

			{/*MODAL WINDOW_______________________*/}
			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Создание саб категории"}
				>
					<SubCategorySettingsBodyWindow
						initialValues={{
							...initialSubCategoryState,
							categoryId: categoryId,
						}}
						sendData={async (data: ISubCategoryState) => {
							return create(data);
						}}
						handleClose={() => setOpen(false)}
					/>
				</WindowFormik>
			)}
			{/*MODAL WINDOW_______________________*/}
		</>
	);
};
