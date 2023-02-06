import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as IconForNavBar } from "Icons/IconForNavBar.svg";
import Colors from "Colors";
import Button from "Components/UI-KIT/Atoms/Button";

import * as ST from "./styled";

type BlockAllCoursesPlatformProps = {
	urlButton: string;
	textButton: string;
	styleButton: string;
};

const BlockAllCoursesPlatform: FC<BlockAllCoursesPlatformProps> = ({
	textButton,
	urlButton,
}) => (
	<ST.ComponentForNavBar>
		<IconForNavBar />
		<ST.WrapperButton>
			<Link to={urlButton}>
				<Button
					title={textButton}
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
);

export default BlockAllCoursesPlatform;
