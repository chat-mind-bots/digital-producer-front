import React, { FC } from "react";

import * as ST from "./styled";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";
import Colors from "../../../Constants/Colors";
import openFileBlank from "../../../Utils/openFileBlank";

type LectorCardProps = {
	name: string;
	img: string;
};

const LectorCard: FC<LectorCardProps> = ({ name, img }) => (
	<ST.LectorCard>
		<ST.ImageWrapper>
			<ST.ImageDefault>{name[0]}</ST.ImageDefault>
			<Image src={img} />
		</ST.ImageWrapper>
		<ST.Name>
			<ST.Dog>@</ST.Dog>
			{name}
		</ST.Name>
		<Button
			title={"Открыть чат"}
			padding={"11px 28px"}
			fontSize={"14px"}
			lineHeight={"20px"}
			fontWeight={"600"}
			background={Colors.BLUE}
			color={Colors.WHITE}
			backgroundAnimation={Colors.BLUE_DARK}
			colorHover={Colors.WHITE}
			width={"100%"}
			onClick={() => openFileBlank(`https://t.me/${name}`)}
		/>
	</ST.LectorCard>
);

export default LectorCard;
