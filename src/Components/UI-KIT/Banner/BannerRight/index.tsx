import React, { FC } from "react";

import { ReactComponent as IconForAddBlock } from "Icons/IconForAddBlock.svg";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";
import BannerProps from "Components/UI-KIT/Banner//banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import Image from "Components/UI-KIT/Atoms/Image";

import * as ST from "./styled";

const BannerRight: FC<BannerProps> = ({ result }) => {
	const data = result && result[0];

	return data ? (
		<ST.AddBlock>
			<ST.ImageWrapper>
				<Image src={data.image} />
				<IconForAddBlock />
			</ST.ImageWrapper>

			<ST.Title>{data.name}</ST.Title>
			<ST.Description>{data.description}</ST.Description>
			<ST.WrapperButton>
				<Button
					title={data.textButton ?? ""}
					padding={"11px 28px"}
					fontSize={"14px"}
					lineHeight={"20px"}
					fontWeight={"600"}
					background={Colors.BLUE}
					color={Colors.WHITE}
					backgroundAnimation={Colors.BLUE_DARK}
					colorHover={Colors.WHITE}
					width={"100%"}
				/>
			</ST.WrapperButton>
		</ST.AddBlock>
	) : (
		<ST.AddBlock>
			<ST.AddBlockLoader>
				<Loader />
			</ST.AddBlockLoader>
		</ST.AddBlock>
	);
};

export default BannerRight;
