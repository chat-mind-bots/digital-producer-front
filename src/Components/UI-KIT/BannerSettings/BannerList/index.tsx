import React, { FC } from "react";

import BannerSection from "Components/UI-KIT/BannerSettings/BannerList/BannerSection";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { IBannerState } from "Shared/Banner/redux/banner.slice";
import WrapperContent from "Components/WrapperContent";
import { BannerApiPropsSet } from "Shared/Banner/redux/banner.api";

import * as ST from "./styled";

export type BannerListProps = {
	result?: IBannerState[];
	create?: (e: IBannerState) => Promise<BannerApiPropsSet | undefined | any>;
	update?: (e: IBannerState) => Promise<BannerApiPropsSet | undefined | any>;
	remove?: (e: string) => Promise<BannerApiPropsSet | undefined | any>;
};

const BannerList: FC<BannerListProps> = ({
	result,
	create,
	update,
	remove,
}) => {
	return (
		<ST.Banners>
			<ST.WrapperBanners>
				<WrapperContent header={`Банеры ${UserRoleEnum.USER}`}>
					<BannerSection
						role={UserRoleEnum.USER}
						result={result?.filter((i) => i.role === UserRoleEnum.USER)}
						create={create}
						update={update}
						remove={remove}
					/>
				</WrapperContent>
				<WrapperContent header={`Банеры ${UserRoleEnum.PRODUCER}`}>
					<BannerSection
						role={UserRoleEnum.PRODUCER}
						result={result?.filter((i) => i.role === UserRoleEnum.PRODUCER)}
						create={create}
						update={update}
						remove={remove}
					/>
				</WrapperContent>
				<WrapperContent header={`Банеры ${UserRoleEnum.ADMIN}`}>
					<BannerSection
						role={UserRoleEnum.ADMIN}
						result={result?.filter((i) => i.role === UserRoleEnum.ADMIN)}
						create={create}
						update={update}
						remove={remove}
					/>
				</WrapperContent>
			</ST.WrapperBanners>
		</ST.Banners>
	);
};

export default BannerList;
