import React, { FC } from "react";

import * as ST from "./styled";

export type ButtonProps = {
	title?: string;
	width: string;
	padding: string;
	fontSize: string;
	lineHeight: string;
	fontWeight: string;
	background: string;
	color: string;
	backgroundAnimation: string;
	colorHover: string;
	border?: string;
	onClick?: (e: any) => void;
	disabled?: boolean;
};

export enum ButtonEnum {
	title = "title",
	width = "width",
	padding = "padding",
	fontSize = "fontSize",
	lineHeight = "lineHeight",
	fontWeight = "fontWeight",
	background = "background",
	color = "color",
	backgroundAnimation = "backgroundAnimation",
	colorHover = "colorHover",
	border = "border",
	onClick = "onClick",
	disabled = "disabled",
}

const Button: FC<ButtonProps> = ({
	title,
	width,
	padding,
	fontSize,
	lineHeight,
	fontWeight,
	background,
	color,
	backgroundAnimation,
	colorHover,
	border,
	onClick,
	disabled,
}) => (
	<ST.Button
		width={width}
		padding={padding}
		fontSize={fontSize}
		lineHeight={lineHeight}
		fontWeight={fontWeight}
		background={background}
		color={color}
		backgroundAnimation={backgroundAnimation}
		colorHover={colorHover}
		border={border}
		onClick={onClick}
		disabled={disabled}
		type="button"
	>
		{title}
		<ST.AnimationWrapper
			disabled={disabled}
			background={background}
		>
			<ST.AnimationList>
				<ST.AnimationListItem
					disabled={disabled}
					backgroundAnimation={backgroundAnimation}
				/>
				<ST.AnimationListItem
					disabled={disabled}
					backgroundAnimation={backgroundAnimation}
				/>
				<ST.AnimationListItem
					disabled={disabled}
					backgroundAnimation={backgroundAnimation}
				/>
				<ST.AnimationListItem
					disabled={disabled}
					backgroundAnimation={backgroundAnimation}
				/>
			</ST.AnimationList>
		</ST.AnimationWrapper>
	</ST.Button>
);

export default Button;
