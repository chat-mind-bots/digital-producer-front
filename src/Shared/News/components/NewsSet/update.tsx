import React, { FC, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { ReactComponent as IcoSettings } from "Icons/Settings.svg";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import NewsResultType from "../../../../Components/UI-KIT/News/news-props.type";
import Loader from "../../../../Components/UI-KIT/Loader";
import {
	GetNewsApiProps,
	useGetNewsMutMutation,
	useDeleteNewsMutation,
	useUpdateNewsMutation,
} from "../../redux/news.api";
import NewsSettingsBodyWindow from "../../../../Components/ModalWindows/Body/NewsSettingsBodyWindow";
import { INewsState } from "../../redux/news.slice";
import { useGetCategoriesQuery } from "../../../Category/redux/category.api";

type NewsIdSetProps = Pick<NewsResultType, "refetch"> &
	Pick<GetNewsApiProps, "idNews">;

export const NewsUpdate: FC<NewsIdSetProps> = ({ idNews, refetch }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getNews, news] = useGetNewsMutMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateNews, resultUpdateNews] = useUpdateNewsMutation();

	const [removeNews, resultRemoveNews] = useDeleteNewsMutation();

	const { data } = useGetCategoriesQuery(queryAuth);

	const update = useCallback(
		(res: INewsState) =>
			updateNews({
				...queryAuth,
				data: res,
			}),
		[updateNews]
	);

	const remove = useCallback(
		(id: string) =>
			removeNews({
				...queryAuth,
				id,
			}),
		[updateNews]
	);

	useEffect(() => {
		if (resultUpdateNews.status === QueryStatus.fulfilled) {
			if (
				resultUpdateNews.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateNews.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Новость изменена");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateNews.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateNews]);

	useEffect(() => {
		if (resultRemoveNews.status === QueryStatus.fulfilled) {
			if (
				resultRemoveNews.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveNews.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Новость удалена");
				refetch && refetch();
				setOpen(false);
			} else {
				resultRemoveNews.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveNews]);

	useEffect(() => {
		if (open) {
			getNews({
				...queryAuth,
				idNews: idNews,
			});
		}
	}, [open]);

	return (
		<>
			<IcoSettings
				onClick={() => {
					setOpen(true);
				}}
			/>

			{/*MODAL WINDOW_______________________*/}
			<WindowFormik
				handleClose={() => setOpen(false)}
				isOpen={open}
				title={"Редактирование новости "}
			>
				<>
					{news.data && data?.data ? (
						<NewsSettingsBodyWindow
							initialValues={news.data}
							sendData={async (data: INewsState) => {
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
