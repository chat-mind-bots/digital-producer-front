import styled from "styled-components";

import BreakPoints from "BreakPoints";
import Colors from "Colors";

type ItemWindowProps = {
	isExit?: boolean;
};

type WindowProps = {
	isOpen: boolean;
};

export const AuthBlock = styled.div`
	display: flex;
	padding: 12px 14px;
	background: ${Colors.WHITE3};
	border-radius: 16px;
	align-items: center;
	gap: 12px;
	max-width: 218px;
	box-sizing: border-box;
	position: relative;
`;

export const Name = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	color: ${Colors.BLACK2};
`;

export const Window = styled.div<WindowProps>`
	width: 100%;
	position: absolute;
	left: 0;
	top: 100%;
	margin-top: 6px;
	padding: 12px 14px;
	background: ${Colors.WHITE3};
	border-radius: 16px;
	box-sizing: border-box;
	border: 1px solid ${Colors.WHITE2};
	cursor: initial;
	opacity: ${({ isOpen }) => !isOpen && 0};
	transform: ${({ isOpen }) => !isOpen && "translate(0, -50px)"};
	transition: 0.5s;
	pointer-events: ${({ isOpen }) => !isOpen && "none"};
`;

export const ItemWindow = styled.p<ItemWindowProps>`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	color: ${({ isExit }) => (isExit ? Colors.RED : Colors.BLACK2)};
	padding: 12px 0;
	cursor: pointer;
	text-transform: ${({ isExit }) => isExit && "uppercase"};
	transition: 0.3s;
	&:hover {
		text-decoration: underline;
	}
`;

export const Mail = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	color: ${Colors.GREY5};
`;

export const WrapperAvatar = styled.div`
	& > img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
`;

export const DefaultImage = styled.div`
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	color: ${Colors.WHITE};
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: linear-gradient(-125deg, ${Colors.WHITE}, ${Colors.BLUE});
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
`;

export const WrapperInfo = styled.div`
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const WrapperArrowDown = styled.div`
	cursor: pointer;
`;
