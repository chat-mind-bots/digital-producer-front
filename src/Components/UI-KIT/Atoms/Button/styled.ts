import styled from "styled-components";

import Colors from "Constants/Colors";

import { ButtonProps } from "./index";
import BreakPoints from "../../../../Constants/BreakPoints";

type AnimationListItemProps = {
	backgroundAnimation: string;
	disabled?: boolean;
};

type AnimationWrapperProps = {
	background: string;
	disabled?: boolean;
};

export const AnimationListItem = styled.span<AnimationListItemProps>`
	position: absolute;
	top: 2px;
	width: 25%;
	height: 100%;
	background: ${({ backgroundAnimation, disabled }) =>
		disabled ? Colors.GREY5 : backgroundAnimation};
	border-radius: 100%;
	transform: translate3d(0, 150%, 0) scale(1.7);
	transition: transform 0.45s;
	&:nth-child(1) {
		left: 0;
		transition-delay: 0s;
	}
	&:nth-child(2) {
		left: 30%;
		transition-delay: 0.08s;
	}
	&:nth-child(3) {
		left: 60%;
		transition-delay: 0.16s;
	}
	&:nth-child(4) {
		left: 90%;
		transition-delay: 0.24s;
	}
	@supports (filter: url("#goo")) {
		transform: translate3d(0, 150%, 0) scale(1.4);
	}
`;

export const Button = styled.button<ButtonProps>`
	border: ${({ border, disabled }) => !disabled && border};
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => fontSize};
	line-height: ${({ lineHeight }) => lineHeight};
	z-index: 1;
	position: relative;
	padding: ${({ padding }) => padding};
	width: ${({ width }) => width};
	border-radius: 10px;
	color: ${({ color, disabled }) => (disabled ? Colors.WHITE : color)};
	justify-content: center;
	background-color: transparent;
	outline: none;
	transition: color 0.5s;
	cursor: pointer;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	overflow: hidden;
	overflow-wrap: normal;
	&:before {
		content: "";
		z-index: 1;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	&:after {
		content: "";
		z-index: -2;
		position: absolute;
		left: 3px;
		top: 3px;
		width: 100%;
		height: 100%;
		transition: all 0.3s 0.2s;
		border-radius: 10px;
	}
	@media (min-width: ${BreakPoints.TABLET}px) {
		&:hover {
			color: ${({ colorHover }) => colorHover};
		}
		&:hover:after {
			transition: all 0.3s;
			left: 0;
			top: 0;
		}
		&:hover ${AnimationListItem} {
			transform: translateZ(0) scale(1.7);
		}
		@supports (filter: url("#goo")) {
			&:hover ${AnimationListItem} {
				transform: translateZ(0) scale(1.4);
			}
		}
	}
`;

export const AnimationWrapper = styled.span<AnimationWrapperProps>`
	z-index: -1;
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border-radius: 7px;
	background: ${({ background, disabled }) =>
		disabled ? Colors.GREY5 : background};
`;

export const AnimationList = styled.span`
	position: relative;
	display: block;
	height: 100%;
	filter: url("#goo");
`;
