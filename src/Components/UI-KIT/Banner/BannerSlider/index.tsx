import React, { FC, useEffect, useState } from "react";

import Button from "Components/UI-KIT/Atoms/Button";
import Tags from "Components/UI-KIT/Atoms/Tags";
import Colors from "Colors";
import Image from "Components/UI-KIT/Atoms/Image";
import BannerProps from "Components/UI-KIT/Banner/banner-props.type";
import Loader from "Components/UI-KIT/Loader";
import { ReactComponent as IconForInsight4 } from "Icons/IconForInsight4.svg";

import * as ST from "./styled";

const Insights: FC<BannerProps> = ({ result }) => {
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
						<Button
							title={currentObject.textButton}
							padding={"11px 28px"}
							fontSize={"14px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							background={Colors.BLUE}
							color={Colors.WHITE}
							backgroundAnimation={Colors.BLUE_DARK}
							colorHover={Colors.WHITE}
							width={"max-content"}
						/>
					</ST.WrapperButton>
				</ST.WrapperContent>
				<ST.ImageWrapper>
					<Image src={currentObject.image} />
					<IconForInsight4 />
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
