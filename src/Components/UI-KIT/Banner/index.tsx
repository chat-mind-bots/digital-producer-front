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
		<SwitchBanner type={type} />
	</BannerGet>
);

const SwitchBanner: FC<Type & BannerResultType> = ({ type, result }) => {
	switch (type) {
		case BannerEnum.BANNER_RIGHT:
			return <BannerRight result={result} />;
		case BannerEnum.BANNER_TOP:
			return <BannerTop result={result} />;
		case BannerEnum.BANNER_LEFT:
			return <BannerLeft result={result} />;
		case BannerEnum.BANNER_SLIDER:
			return <BannerSlider result={result} />;
		default:
			return <></>;
	}
};

export default Banner;
