import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";
import Colors from "Constants/Colors";

export const LectorCard = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	background: ${Colors.WHITE};
	border-radius: 24px;
	padding: 18px 18px 24px;
	max-width: 328px;
	box-sizing: border-box;

	& svg {
		height: max-content;
	}
	// TODO: изменить после создания хуков
	& svg {
		@media (max-width: ${BreakPoints.MOBILE}px) {
			display: none;
		}
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		max-width: 100%;
	}
`;

export const LectorCardProducer = styled.div`
	font-size: 100px;
	color: ${Colors.WHITE};
	background: ${Colors.BLUE};
	border-radius: 24px;
	width: 328px;
	height: 303px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${Colors.TRANSPARENT};
	cursor: pointer;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
`;

export const Name = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 20px;
	width: 100%;
	line-height: 140%;
	color: ${Colors.BLACK1};
	text-align: center;
`;

export const Dog = styled.span`
	font-family: "Inter";
	font-weight: 700;
	font-size: 20px;
	width: 100%;
	line-height: 140%;
	color: ${Colors.BLACK1};
	text-align: center;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 200px;
	overflow: hidden;
`;

export const ImageDefault = styled.div`
	width: 100%;
	height: 100%;
	background: linear-gradient(-125deg, #ffffff, #2e6cee);
	font-weight: 500;
	font-size: 32px;
	line-height: 16px;
	color: ${Colors.WHITE};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 16px;
	overflow: hidden;
`;
