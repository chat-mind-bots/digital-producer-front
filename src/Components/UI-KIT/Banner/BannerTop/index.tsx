import React, { FC } from "react";

import Colors from "Colors";
import Button from "Components/UI-KIT/Atoms/Button";
import BannerProps from "Components/UI-KIT/Banner/banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import { ReactComponent as IconForNews } from "Icons/IconForNews.svg";
import Image from "Components/UI-KIT/Atoms/Image";

import * as ST from "./styled";

const BannerTop: FC<BannerProps> = ({ result }) => {
	const data = result && result[0];

	return data ? (
		<ST.NewsBanner>
			<ST.WrapperInfo>
				<ST.Title>{data.name}</ST.Title>
				<ST.Description>{data.description}</ST.Description>
				<ST.WrapperButton>
					<Button
						title={data.textButton}
						padding={"13px 23px"}
						fontSize={"14px"}
						lineHeight={"20px"}
						fontWeight={"600"}
						background={Colors.TRANSPARENT}
						color={Colors.BLACK1}
						backgroundAnimation={Colors.BLACK1}
						colorHover={Colors.WHITE}
						border={`2px solid ${Colors.BLACK1}`}
						width={"max-content"}
					/>
				</ST.WrapperButton>
			</ST.WrapperInfo>
			<ST.ImageWrapper>
				<Image src={data.image} />
				<IconForNews />
			</ST.ImageWrapper>
		</ST.NewsBanner>
	) : (
		<ST.NewsBanner>
			<ST.NewsBannerLoader>
				<Loader />
			</ST.NewsBannerLoader>
		</ST.NewsBanner>
	);
};

export default BannerTop;
