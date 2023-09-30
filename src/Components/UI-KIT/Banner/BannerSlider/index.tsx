import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Tags from "Components/UI-KIT/Atoms/Tags";
import Image from "Components/UI-KIT/Atoms/Image";
import BannerProps from "Components/UI-KIT/Banner/banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import openFileBlank from "Utils/openFileBlank";
import ButtonSwitchStyle from "Components/ButtonSwitchStyle";

import * as ST from "./styled";
import { routeBuilder } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import {
	IBannerEnum,
	IBannerState,
} from "../../../../Shared/Banner/redux/banner.slice";

const Insights: FC<BannerProps & Pick<IBannerState, IBannerEnum.role>> = ({
	result,
	role,
}) => {
	const data = result;
	const [numberPosition, setNumberPosition] = useState<string | undefined>();
	const currentObject =
		data && data.filter((item) => item.id === numberPosition)[0];

	useEffect(() => {
		data && data.length && setNumberPosition(data[0].id);
	}, [result]);

	return data && currentObject ? (
		<ST.Insights>
			<ST.Title>{currentObject.title}</ST.Title>
			<ST.WrapperInfo>
				<ST.WrapperContent>
					<ST.WrapperInfoContent>
						<Tags
							tags={currentObject.tags}
							tagsColors={true}
						/>
						<ST.WrapperText>
							<ST.Name>{currentObject.name}</ST.Name>
							<ST.Description>{currentObject.description}</ST.Description>
						</ST.WrapperText>
					</ST.WrapperInfoContent>
					<ST.WrapperButton>
						{currentObject.isThirdPartySource ? (
							<Link
								to={
									role
										? `${routeBuilder([
												RoutesList[role],
												currentObject.urlButton as RoutesList,
										  ])}`
										: ""
								}
							>
								<ButtonSwitchStyle
									title={currentObject.textButton}
									padding={"11px 28px"}
									fontSize={"14px"}
									lineHeight={"20px"}
									fontWeight={"600"}
									width={"max-content"}
									style={currentObject.styleButton}
								/>
							</Link>
						) : (
							<ButtonSwitchStyle
								title={currentObject.textButton}
								padding={"11px 28px"}
								fontSize={"14px"}
								lineHeight={"20px"}
								fontWeight={"600"}
								width={"max-content"}
								style={currentObject.styleButton}
								onClick={() => openFileBlank(currentObject.urlButton)}
							/>
						)}
					</ST.WrapperButton>
				</ST.WrapperContent>
				<ST.ImageWrapper>
					<Image src={currentObject.image} />
				</ST.ImageWrapper>
			</ST.WrapperInfo>
			<ST.Circles>
				{result.map((item, index) => (
					<ST.CircleItem
						onClick={() => {
							setNumberPosition(item.id);
						}}
						key={`List-items-for-CourseCard-${index}`}
						isActive={item.id === numberPosition}
					/>
				))}
			</ST.Circles>
		</ST.Insights>
	) : (
		<ST.Insights>
			<ST.InsightsLoader>
				<Loader />
			</ST.InsightsLoader>
		</ST.Insights>
	);
};

export default Insights;
