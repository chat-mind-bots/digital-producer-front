import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as IconForNavBar } from "Icons/IconForNavBar.svg";
import BannerProps from "Components/UI-KIT/Banner//banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import Image from "Components/UI-KIT/Atoms/Image";
import openFileBlank from "Utils/openFileBlank";
import ButtonSwitchStyle from "Components/ButtonSwitchStyle";

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
				{data.isThirdPartySource ? (
					<Link to={data.urlButton}>
						<ButtonSwitchStyle
							title={data.textButton}
							padding={"11px 23px"}
							fontSize={"14px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							width={"max-content"}
							style={data.styleButton}
						/>
					</Link>
				) : (
					<ButtonSwitchStyle
						title={data.textButton}
						padding={"11px 23px"}
						fontSize={"14px"}
						lineHeight={"20px"}
						fontWeight={"600"}
						width={"max-content"}
						style={data.styleButton}
						onClick={() => openFileBlank(data.urlButton)}
					/>
				)}
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
