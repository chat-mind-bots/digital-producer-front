import React, {
	FC,
	Children,
	cloneElement,
	useEffect,
	useCallback,
} from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import toast, { Toaster } from "react-hot-toast";

import { useAppSelector } from "Hooks/redux";
import {
	BannerApiProps,
	useCreateBannerMutation,
	useDeleteBannerMutation,
	useEditBannerMutation,
	useGetBannerQuery,
} from "Shared/Banner/redux/banner.api";
import BannerResultType from "Components/UI-KIT/Banner/banner-props.type";
import { BannerListProps } from "Components/UI-KIT/BannerSettings/BannerList";
import { IBannerState } from "Shared/Banner/redux/banner.slice";
import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";
import RequestStatuses from "RequestStatuses";
import Loader from "Components/UI-KIT/Loader";

type BannerSetProps = Record<"children", React.ReactElement<BannerResultType>>;

const BannerSet: FC<BannerSetProps> = ({ children }) => {
	const auth = useAppSelector((state) => state.auth);
	const query: BannerApiProps = {
		authToken: auth.token ?? "",
	};
	const { data, refetch } = useGetBannerQuery(query);

	const [updateBanner, resultUpdateBanner] = useEditBannerMutation();
	const [createBanner, resultCreateBanner] = useCreateBannerMutation();
	const [deleteBanner, resultDeleteBanner] = useDeleteBannerMutation();

	//TODO: сделать норм
	const create = useCallback(
		(res: IBannerState) =>
			createBanner({
				authToken: query.authToken,
				data: res,
			}),
		[createBanner]
	);

	const update = useCallback(
		(res: IBannerState) =>
			updateBanner({
				authToken: query.authToken,
				data: res,
			}),
		[updateBanner]
	);

	const remove = useCallback(
		(id: string) =>
			deleteBanner({
				authToken: query.authToken,
				id: id,
			}),
		[updateBanner]
	);

	useEffect(() => {
		if (resultDeleteBanner.status === QueryStatus.fulfilled) {
			if (resultDeleteBanner.data?.statusCode === RequestStatuses.SUCCESS) {
				refetch();
				toast.success("Все гуд");
			} else {
				resultDeleteBanner.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultDeleteBanner]);

	useEffect(() => {
		if (resultCreateBanner.status === QueryStatus.fulfilled) {
			if (
				resultCreateBanner.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateBanner.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				refetch();
				toast.success("Все гуд");
			} else {
				resultCreateBanner.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateBanner]);

	useEffect(() => {
		if (resultUpdateBanner.status === QueryStatus.fulfilled) {
			if (resultUpdateBanner.data?.statusCode === RequestStatuses.SUCCESS) {
				refetch();
				toast.success("Все гуд");
			} else {
				resultUpdateBanner.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateBanner]);

	return (
		<>
			{data ? (
				<>
					{Children.toArray(children).map((child) =>
						cloneElement(child as React.ReactElement<BannerListProps>, {
							result: data?.data,
							create: create,
							update: update,
							remove: remove,
						})
					)}
				</>
			) : (
				<Loader />
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

export default BannerSet;
