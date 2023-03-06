import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as IconForNavBar } from "Icons/IconForNavBar.svg";
import BannerProps from "Components/UI-KIT/Banner//banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import Image from "Components/UI-KIT/Atoms/Image";
import openFileBlank from "Utils/openFileBlank";
import ButtonSwitchStyle from "Components/ButtonSwitchStyle";

import * as ST from "./styled";
import { routeBuilder } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import {
	IBannerEnum,
	IBannerState,
} from "../../../../Shared/Banner/redux/banner.slice";

const BannerLeft: FC<BannerProps & Pick<IBannerState, IBannerEnum.role>> = ({
	result,
	role,
}) => {
	const data = result && result[0];

	return data ? (
		<ST.ComponentForNavBar>
			<ST.ImageWrapper>
				<Image src={data.image} />
			</ST.ImageWrapper>

			<IconForNavBar />
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
							padding={"11px 23px"}
							fontSize={"14px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							width={"176px"}
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
						width={"176px"}
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
