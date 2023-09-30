import React, { FC } from "react";

import Button, {
	ButtonEnum,
	ButtonProps,
} from "Components/UI-KIT/Atoms/Button";
import Colors from "Constants/Colors";

import { ButtonSwitchStyleEnum } from "./button-switch-style.enum";

type ButtonSwitchStyleProps = Pick<
	ButtonProps,
	| ButtonEnum.fontSize
	| ButtonEnum.padding
	| ButtonEnum.lineHeight
	| ButtonEnum.fontWeight
	| ButtonEnum.width
	| ButtonEnum.onClick
	| ButtonEnum.title
> & {
	style?: ButtonSwitchStyleEnum;
};

const ButtonSwitchStyle: FC<ButtonSwitchStyleProps> = ({
	style,
	fontSize,
	padding,
	title,
	lineHeight,
	fontWeight,
	width,
	onClick,
}) => {
	switch (style) {
		case ButtonSwitchStyleEnum.LIGHT:
			return (
				<Button
					title={title}
					padding={padding}
					fontSize={fontSize}
					lineHeight={lineHeight}
					fontWeight={fontWeight}
					background={Colors.WHITE}
					color={Colors.BLUE}
					backgroundAnimation={Colors.BLUE_DARK}
					colorHover={Colors.WHITE}
					width={width}
					onClick={onClick}
				/>
			);
		case ButtonSwitchStyleEnum.PRIMARY:
			return (
				<Button
					title={title}
					padding={padding}
					fontSize={fontSize}
					lineHeight={lineHeight}
					fontWeight={fontWeight}
					background={Colors.BLUE}
					color={Colors.WHITE}
					backgroundAnimation={Colors.BLUE_DARK}
					colorHover={Colors.WHITE}
					width={width}
					onClick={onClick}
				/>
			);
		case ButtonSwitchStyleEnum.DARK:
			return (
				<Button
					title={title}
					padding={padding}
					fontSize={fontSize}
					lineHeight={lineHeight}
					fontWeight={fontWeight}
					background={Colors.TRANSPARENT}
					color={Colors.BLACK1}
					backgroundAnimation={Colors.BLACK1}
					colorHover={Colors.WHITE}
					border={`2px solid ${Colors.BLACK1}`}
					width={width}
					onClick={onClick}
				/>
			);
		default:
			return <></>;
	}
};

export default ButtonSwitchStyle;
