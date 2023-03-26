import styled from "styled-components";

import Colors from "Constants/Colors";

import BreakPoints from "../../../Constants/BreakPoints";

export const TestCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	padding: 18px;
	border-radius: 16px;
	background: ${Colors.WHITE};
	max-width: 328px;
	box-sizing: border-box;
	background: ${Colors.WHITE};
	border: 2px solid ${Colors.TRANSPARENT};
	cursor: pointer;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		max-width: 100%;
	}
`;

export const TestCardProducer = styled.div`
	font-size: 100px;
	color: ${Colors.WHITE};
	background: ${Colors.BLUE};
	border-radius: 16px;
	width: 100%;
	height: 150px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${Colors.TRANSPARENT};
	cursor: pointer;
	max-width: 333px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		margin: auto;
	}
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	width: 100%;
	padding-right: 34px;
	overflow: hidden;
	position: relative;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	overflow-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: ${Colors.GREY1};
	width: 100%;
	overflow: hidden;
	position: relative;
	text-overflow: ellipsis;
	-webkit-line-clamp: 4;
	display: -webkit-box;
	overflow-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Info = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 12px;
	line-height: 120%;
	color: ${Colors.GREY2};
	width: 100%;
	align-items: center;
	display: flex;
	gap: 8px;
`;
