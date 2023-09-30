import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import Colors from "../../../../Constants/Colors";
import Button from "../../../../Components/UI-KIT/Atoms/Button";
import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import {
	ICategoryState,
	initialCategoryState,
} from "../../redux/category.slice";
import CategorySettingsBodyWindow from "../../../../Components/ModalWindows/Body/CategorySettingsBodyWindow";
import { useCreateCategoryMutation } from "../../redux/category.api";

type CategoryCreateProps = Pick<CourseResultType, "refetch">;

export const CategoryCreate: FC<CategoryCreateProps> = ({ refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const [createCategory, resultCreateCategory] = useCreateCategoryMutation();

	const create = useCallback(
		(res: ICategoryState) =>
			createCategory({
				...queryAuth,
				data: res,
			}),
		[createCategory]
	);

	useEffect(() => {
		if (resultCreateCategory.status === QueryStatus.fulfilled) {
			if (
				resultCreateCategory.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateCategory.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Категория создана");
				setOpen(false);
				refetch && refetch();
			} else {
				resultCreateCategory.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateCategory]);

	return (
		<>
			<Button
				title={"Добавить категорию"}
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
					title={"Создание категории "}
				>
					<CategorySettingsBodyWindow
						initialValues={initialCategoryState}
						sendData={async (data: ICategoryState) => {
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
