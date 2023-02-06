import React, { FC } from "react";

import { ReactComponent as IconForAddBlock } from "Icons/IconForAddBlock.svg";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import * as ST from "./styled";

type AddBlockProps = {
	title: string;
	description: string;
	urlButton: string;
	textButton: string;
	styleButton: string;
};

const AddBlock: FC<AddBlockProps> = ({ title, description, textButton }) => {
	return (
		<ST.AddBlock>
			<IconForAddBlock />
			<ST.Title>{title}</ST.Title>
			<ST.Description>{description}</ST.Description>
			<ST.WrapperButton>
				<Button
					title={textButton}
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
	);
};

export default AddBlock;
