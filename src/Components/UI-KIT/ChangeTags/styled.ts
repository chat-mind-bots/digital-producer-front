import styled from "styled-components";

import Colors from "Constants/Colors";

import BreakPoints from "../../../Constants/BreakPoints";

export const WrapperTags = styled.div`
	display: flex;
	gap: 12px;
	width: 100%;
	align-items: center;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const WrapperColor = styled.div`
	position: relative;
	width: 100%;
`;

export const BlockColor = styled.div<{ isError: boolean }>`
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: ${Colors.GREY1};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 100%;
	border: ${({ isError }) =>
		isError ? `1px solid ${Colors.RED}` : `1px solid ${Colors.GREY1}`};
	border-radius: 12px;
	position: relative;
	cursor: pointer;
`;

export const InputWrapper = styled.div<{ isError: boolean }>`
	width: 100%;
	& > div > div {
		border: ${({ isError }) =>
			isError ? `1px solid ${Colors.RED}` : `1px solid ${Colors.GREY1}`};
	}
`;

export const WrapperSketchPicker = styled.div`
	position: absolute;
	z-index: 2;
	top: 100%;
`;

export const Remove = styled.div`
	min-width: 30px;
	width: 30px;
	height: 30px;
	background: ${Colors.BLUE};
	border-radius: 50%;
	color: ${Colors.WHITE};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background: ${Colors.BLUE_DARK};
	}
`;

export const BlockBackground = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;
