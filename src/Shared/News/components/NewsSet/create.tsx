import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";
import {
	GetNewsApiProps,
	useCreateNewsMutation,
} from "Shared/News/redux/news.api";
import { INewsState, initialNewsState } from "Shared/News/redux/news.slice";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import NewsSettingsBodyWindow from "../../../../Components/ModalWindows/Body/NewsSettingsBodyWindow";
import { useGetCategoriesQuery } from "../../../Category/redux/category.api";
import Loader from "../../../../Components/UI-KIT/Loader";
import NewsResultType from "../../../../Components/UI-KIT/News/news-props.type";
import NewsCardProducerCreate from "../../../../Components/UI-KIT/Newses/NewsesList/NewsCard/Admin";

export const NewsCreate: FC<Pick<NewsResultType, "refetch">> = ({
	refetch,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetNewsApiProps = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const { data } = useGetCategoriesQuery(queryAuth);

	const [createNews, resultCreateNews] = useCreateNewsMutation();

	const create = useCallback(
		(res: INewsState) =>
			createNews({
				...queryAuth,
				data: res,
			}),
		[createNews]
	);

	useEffect(() => {
		if (resultCreateNews.status === QueryStatus.fulfilled) {
			if (
				resultCreateNews.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateNews.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Новость создана");
				refetch && refetch();
				setOpen(false);
			} else {
				resultCreateNews.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateNews]);

	return (
		<>
			<NewsCardProducerCreate onClick={() => setOpen(true)} />

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Создание новости"}
				>
					{data?.data ? (
						<NewsSettingsBodyWindow
							initialValues={initialNewsState}
							sendData={async (data: INewsState) => {
								return create(data);
							}}
							handleClose={() => setOpen(false)}
						/>
					) : (
						<Loader />
					)}
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
