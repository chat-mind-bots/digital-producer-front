import styled from "styled-components";
import BreakPoints from "BreakPoints";
import Colors from "Colors";

export const LectorCard = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
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
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: ${Colors.GREY1};
`;
