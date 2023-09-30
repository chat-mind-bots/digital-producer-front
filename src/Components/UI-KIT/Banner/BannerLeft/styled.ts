import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";
import Colors from "Constants/Colors";

export const ComponentForNavBar = styled.div`
	position: relative;
	width: 216px;
	height: 258px;
	align-self: flex-end;
	border-radius: 16px;
	overflow: hidden;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
`;

export const ComponentForNavBarLoader = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	border: 1px solid ${Colors.WHITE2};
	border-radius: 16px;
	box-sizing: border-box;
`;

export const WrapperButton = styled.div`
	position: absolute;
	bottom: 26px;
	left: 50%;
	transform: translate(-50%, 0);
`;
