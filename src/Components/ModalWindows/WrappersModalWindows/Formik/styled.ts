import styled from "styled-components";

import Colors from "Colors";

import BreakPoints from "../../../../BreakPoints";

export const ModalWindow = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #0000009c;
	left: 0;
	top: 0;
	z-index: 9999;
	overflow: auto;
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	display: flex;
	align-items: center;
	justify-content: space-between;
	& > svg {
		cursor: pointer;
	}
`;

export const Description = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 155%;
	color: ${Colors.GREY1};
	margin-top: 4px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const Window = styled.div`
	width: 688px;
	background: ${Colors.WHITE};
	border-radius: 12px;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	top: 10px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		width: 100%;
	}
`;

export const Header = styled.div`
	padding: 24px 24px 21px;
	border-bottom: 1px solid ${Colors.BLACK1};
	align-items: center;
	display: flex;
	gap: 16px;
`;

export const WrapperInfoHeader = styled.div`
	flex: 1;
`;
