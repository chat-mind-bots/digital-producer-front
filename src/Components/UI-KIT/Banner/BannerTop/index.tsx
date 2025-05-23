import React, { FC } from "react";
import { Link } from "react-router-dom";

import ButtonSwitchStyle from "Components/ButtonSwitchStyle";
import BannerProps from "Components/UI-KIT/Banner/banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import Image from "Components/UI-KIT/Atoms/Image";
import openFileBlank from "Utils/openFileBlank";

import * as ST from "./styled";
import { routeBuilder } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import {
	IBannerEnum,
	IBannerState,
} from "../../../../Shared/Banner/redux/banner.slice";

const BannerTop: FC<BannerProps & Pick<IBannerState, IBannerEnum.role>> = ({
	result,
	role,
}) => {
	const data = result && result[0];

	return data ? (
		<ST.NewsBanner>
			<ST.WrapperInfo>
				<ST.Title>{data.name}</ST.Title>
				<ST.Description>{data.description}</ST.Description>
				<ST.WrapperButton>
					{data.isThirdPartySource ? (
						<Link
							to={
								role
									? `${routeBuilder([
											RoutesList[role],
											data.urlButton as RoutesList,
									  ])}`
									: ""
							}
						>
							<ButtonSwitchStyle
								title={data.textButton}
								padding={"13px 23px"}
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
							padding={"13px 23px"}
							fontSize={"14px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							width={"max-content"}
							style={data.styleButton}
							onClick={() => openFileBlank(data.urlButton)}
						/>
					)}
				</ST.WrapperButton>
			</ST.WrapperInfo>
			<ST.ImageWrapper>
				<Image src={data.image} />
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
