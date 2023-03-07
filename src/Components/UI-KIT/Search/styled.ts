import styled from "styled-components";

import Colors from "Colors";
import BreakPoints from "BreakPoints";

import { FocusType } from "./index";

type Props = {
	isFocus: FocusType;
	value: string;
};

export const Search = styled.div`
	width: 100%;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const SearchList = styled.div``;

export const SearchWrapper = styled.div<Props>`
	box-sizing: border-box;
	max-width: 440px;
	width: 100%;
	color: ${({ isFocus }) => (isFocus ? Colors.BLUE : Colors.GREY1)};
	position: relative;
	background: ${Colors.WHITE3};
	border-radius: 12px;
	border: ${({ isFocus }) =>
		isFocus ? `2px solid ${Colors.BLUE}` : `2px solid ${Colors.TRANSPARENT}`};
	transition: 0.6s;
	overflow: hidden;
	& svg {
		position: absolute;
		pointer-events: none;
		top: 50%;
		left: 27px;
		transform: translate(0, -50%);
		& path {
			fill: ${({ isFocus }) => isFocus && Colors.BLUE};
			transition: 0.6s;
		}
	}
`;

export const SearchElement = styled.input<Props>`
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	width: 100%;
	border: none;
	padding: 20px 16px 20px 68px;
	background: transparent;
	color: ${Colors.BLACK1};
	max-width: calc(100% - 83px);
`;
