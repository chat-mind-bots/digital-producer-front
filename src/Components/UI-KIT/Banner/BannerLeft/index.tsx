import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as IconForNavBar } from "Icons/IconForNavBar.svg";
import Colors from "Colors";
import Button from "Components/UI-KIT/Atoms/Button";
import BannerProps from "Components/UI-KIT/Banner//banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import Image from "Components/UI-KIT/Atoms/Image";

import * as ST from "./styled";

const BannerLeft: FC<BannerProps> = ({ result }) => {
	const data = result && result[0];

	return data ? (
		<ST.ComponentForNavBar>
			<ST.ImageWrapper>
				<Image src={data.image} />
			</ST.ImageWrapper>

			<IconForNavBar />
			<ST.WrapperButton>
				<Link to={data.urlButton}>
					<Button
						title={data.textButton}
						padding={"11px 23px"}
						fontSize={"14px"}
						lineHeight={"20px"}
						fontWeight={"600"}
						background={Colors.WHITE}
						color={Colors.BLUE}
						backgroundAnimation={Colors.BLUE_DARK}
						colorHover={Colors.WHITE}
						width={"max-content"}
					/>
				</Link>
			</ST.WrapperButton>
		</ST.ComponentForNavBar>
	) : (
		<ST.ComponentForNavBar>
			<ST.ComponentForNavBarLoader>
				<Loader />
			</ST.ComponentForNavBarLoader>
		</ST.ComponentForNavBar>
	);
};

export default BannerLeft;
