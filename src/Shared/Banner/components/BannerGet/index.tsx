import React, { FC, Children, cloneElement } from "react";

import { useAppSelector } from "Hooks/redux";
import {
	BannerApiProps,
	useGetBannerQuery,
} from "Shared/Banner/redux/banner.api";
import BannerResultType from "Components/UI-KIT/Banner/banner-props.type";
import { IBannerEnum, IBannerState } from "Shared/Banner/redux/banner.slice";

interface BannerGetProps
	extends Pick<IBannerState, IBannerEnum.role | IBannerEnum.type>,
		Record<"children", React.ReactElement<BannerResultType>> {}

const BannerGet: FC<BannerGetProps> = ({ children, role, type }) => {
	const auth = useAppSelector((state) => state.auth);
	const query: BannerApiProps = {
		authToken: auth.token ?? "",
		role: role,
	};
	const { data } = useGetBannerQuery(query);

	return (
		<>
			{Children.toArray(children).map((child) =>
				cloneElement(child as React.ReactElement<BannerResultType>, {
					result: data?.data.filter((i) => i.type === type),
				})
			)}
		</>
	);
};

export default BannerGet;
