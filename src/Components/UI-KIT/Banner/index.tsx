import React, { FC } from "react";

import BannerGet from "Shared/Banner/components/BannerGet";
import BannerRight from "Components/UI-KIT/Banner/BannerRight";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import BannerTop from "Components/UI-KIT/Banner/BannerTop";
import BannerLeft from "Components/UI-KIT/Banner/BannerLeft";
import BannerSlider from "Components/UI-KIT/Banner/BannerSlider";
import { IBannerEnum, IBannerState } from "Shared/Banner/redux/banner.slice";

import BannerResultType from "./banner-props.type";

type Type = Pick<IBannerState, IBannerEnum.role | IBannerEnum.type>;

const Banner: FC<Type> = ({ role, type }) => (
	<BannerGet
		role={role}
		type={type}
	>
		<SwitchBanner
			role={role}
			type={type}
		/>
	</BannerGet>
);

const SwitchBanner: FC<Type & BannerResultType> = ({ type, result, role }) => {
	switch (type) {
		case BannerEnum.BANNER_RIGHT:
			return (
				<BannerRight
					role={role}
					result={result}
				/>
			);
		case BannerEnum.BANNER_TOP:
			return (
				<BannerTop
					role={role}
					result={result}
				/>
			);
		case BannerEnum.BANNER_LEFT:
			return (
				<BannerLeft
					role={role}
					result={result}
				/>
			);
		case BannerEnum.BANNER_SLIDER:
			return (
				<BannerSlider
					role={role}
					result={result}
				/>
			);
		default:
			return <></>;
	}
};

export default Banner;
