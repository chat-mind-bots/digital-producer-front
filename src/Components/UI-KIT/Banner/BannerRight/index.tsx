import React, { FC } from "react";
import { Link } from "react-router-dom";

import BannerProps from "Components/UI-KIT/Banner//banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import Image from "Components/UI-KIT/Atoms/Image";
import openFileBlank from "Utils/openFileBlank";
import ButtonSwitchStyle from "Components/ButtonSwitchStyle";

import * as ST from "./styled";
import {
	IBannerEnum,
	IBannerState,
} from "../../../../Shared/Banner/redux/banner.slice";
import { routeBuilder } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";

const BannerRight: FC<BannerProps & Pick<IBannerState, IBannerEnum.role>> = ({
	result,
	role,
}) => {
	const data = result && result[0];

	return data ? (
		<ST.AddBlock>
			<ST.ImageWrapper>
				<Image src={data.image} />
			</ST.ImageWrapper>

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
							title={data.textButton ?? ""}
							padding={"11px 28px"}
							fontSize={"14px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							width={"100%"}
							style={data.styleButton}
						/>
					</Link>
				) : (
					<ButtonSwitchStyle
						title={data.textButton ?? ""}
						padding={"11px 28px"}
						fontSize={"14px"}
						lineHeight={"20px"}
						fontWeight={"600"}
						width={"100%"}
						style={data.styleButton}
						onClick={() => openFileBlank(data.urlButton)}
					/>
				)}
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
