import React, { FC } from "react";

import { BannerApiQuery } from "Shared/Banner/redux/banner.api";
import BannerRequest, {
	BannerRequestType,
} from "Shared/Banner/components/BannerRequest";
import BannerRight from "Components/UI-KIT/Banner/BannerRight";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import BannerTop from "Components/UI-KIT/Banner/BannerTop";
import BannerLeft from "Components/UI-KIT/Banner/BannerLeft";
import BannerSlider from "Components/UI-KIT/Banner/BannerSlider";
import BannerProps from "Components/UI-KIT/Banner/banner-props.type";

type BannerApiQueryProps = BannerApiQuery & BannerRequestType;

const Banner: FC<BannerApiQueryProps> = ({ role, type }) => (
	<BannerRequest
		role={role}
		type={type}
	>
		<SwitchBanner type={type} />
	</BannerRequest>
);

const SwitchBanner: FC<BannerRequestType & BannerProps> = ({
	type,
	result,
}) => {
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
