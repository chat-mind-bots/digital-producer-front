import styled from "styled-components";

import Colors from "Colors";

import { PlayVideoProps } from "./index";
import BreakPoints from "../../../../BreakPoints";

export const PlayVideo = styled.div<PlayVideoProps>`
	margin-left: -7px;
	margin-top: 1px;
	background: ${Colors.BLUE};
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 99999999999;
	height: 36px;
	width: 36px;
	padding: 20px;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 1px 7px ${Colors.BLUE};
	cursor: pointer;
	transition: 0.5s;
	opacity: ${({ isOpen }) => (isOpen ? "0.7" : "0")};
	& > svg {
		transform: translate(4px, 0px);
	}
	&:hover {
		opacity: 1;
	}
`;

export const Player = styled.div<{ isOpen: boolean }>`
	width: 100%;
	height: 100%;
	opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
	transition: 0.5s;
	position: absolute;
	left: 0;
	top: 0;
	& > div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100% !important;
		height: 100% !important;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		& video {
			object-fit: contain !important;
		}
	}
`;
