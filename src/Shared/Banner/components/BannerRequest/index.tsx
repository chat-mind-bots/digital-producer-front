import React, { FC, Children, cloneElement } from "react";

import { useAppSelector } from "Hooks/redux";
import {
	BannerApiProps,
	BannerApiQuery,
	useGetBannerQuery,
} from "Shared/Banner/redux/banner.api";
import BannerProps from "Components/UI-KIT/Banner/banner-props.type";
import { BannerEnum } from "Shared/Banner/types/banner.enum";

type ParentProps = BannerApiQuery &
	BannerRequestType & {
		children: React.ReactElement<BannerProps>;
	};

export type BannerRequestType = { type: BannerEnum };

const BannerRequest: FC<ParentProps> = ({ children, role, type }) => {
	const auth = useAppSelector((state) => state.auth);
	const query: BannerApiProps = {
		authToken: auth.token ?? "",
		role: role,
	};
	const { data } = useGetBannerQuery(query);

	return (
		<>
			{Children.toArray(children).map((child) =>
				cloneElement(child as React.ReactElement<BannerProps>, {
					result: data?.data.filter((i) => i.type === type),
				})
			)}
		</>
	);
};

export default BannerRequest;
