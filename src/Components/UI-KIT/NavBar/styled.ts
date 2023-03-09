import styled from "styled-components";

import BreakPoints from "BreakPoints";
import Colors from "Colors";

type Props = {
	isActive: boolean;
};

export const NavBar = styled.div`
	width: 100%;
`;

export const Name = styled.p<Props>`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	gap: 16px;
	display: flex;
	color: ${({ isActive }) => (isActive ? Colors.WHITE : Colors.GREY1)};
	& svg path,
	circle {
		stroke: ${({ isActive }) => (isActive ? Colors.WHITE : Colors.GREY1)};
	}
`;

export const Count = styled.p`
	width: 24px;
	display: flex;
	height: 24px;
	padding: 4px 5px;
	border-radius: 40px;
	justify-content: center;
	align-items: center;
	background: ${Colors.ORANGE};
	color: ${Colors.WHITE};
`;

export const Wrapper = styled.div<Props>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 216px;
	box-sizing: border-box;
	padding: 16px 20px;
	border-radius: 12px;
	cursor: pointer;
	background: ${({ isActive }) => isActive && Colors.BLUE};
	& ${Name} & svg path,
	&:hover {
		background: ${({ isActive }) => !isActive && Colors.SKYBLUE};
		transition: 0.5s;
	}
	&:hover ${Name} {
		color: ${({ isActive }) => !isActive && Colors.BLUE};
		& svg path,
		circle {
			transition: 0.5s;
			stroke: ${({ isActive }) => !isActive && Colors.BLUE};
		}
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		width: 100%;
		max-width: 100%;
	}
`;
