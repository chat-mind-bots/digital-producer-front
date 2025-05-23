import styled from "styled-components";

import Colors from "Constants/Colors";
import BreakPoints from "Constants/BreakPoints";

type CircleItemProps = {
	isActive: boolean;
};

export const Insights = styled.div`
	max-width: 760px;
	border-radius: 24px;
	background: ${Colors.BLUE1};
	padding: 26px 24px 24px;
	box-sizing: border-box;
	width: 100%;
	min-height: 517px;
	& > div > div > div > div {
		border-top-color: #fff;
		border-right-color: #fff;
		border-bottom-color: #fff;
		border-left-color: #fff;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const InsightsLoader = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
`;

export const Title = styled.p`
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	color: ${Colors.WHITE};
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const WrapperInfo = styled.div`
	background: ${Colors.WHITE};
	border-radius: 16px;
	width: 100%;
	margin-top: 18px;
	justify-content: space-between;
	display: flex;
	overflow: hidden;
	height: 382px;
`;

export const Name = styled.p`
	font-family: "Vela Sans";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	letter-spacing: -0.5px;
	margin-top: 14px;
	color: ${Colors.BLACK1};
	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: ${Colors.GREY1};
	margin-top: 14px;
	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const WrapperContent = styled.div`
	max-width: 244px;
	padding: 48px 0 48px 36px;
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
`;

export const WrapperText = styled.div``;

export const Circles = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 28px;
	gap: 24px;
	height: 15px;
	align-items: center;
`;

export const CircleItem = styled.button<CircleItemProps>`
	width: 7.5px;
	height: 7.5px;
	border-radius: 10px;
	background: ${Colors.WHITE};
	box-shadow: ${({ isActive }) =>
		isActive && `0px 0px 0px 3.75px ${Colors.RGBA_LIGHTBLUE}`};
	gap: 24px;
`;

export const WrapperButton = styled.div`
	display: flex;
	height: max-content;
	place-self: flex-end;
	& > button {
		max-width: 243px;
	}
`;

export const WrapperInfoContent = styled.div`
	width: 100%;
	& > div {
		margin-top: 0;
	}
`;

export const ImageWrapper = styled.div`
	width: 380px;
	height: 382px;
	position: relative;
	border-radius: 16px;
	overflow: hidden;
	& > object {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}
`;
