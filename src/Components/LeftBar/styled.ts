import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";
import Colors from "Constants/Colors";

export const LeftBar = styled.div<{ open: boolean }>`
	background: ${Colors.WHITE};
	padding: 40px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	max-width: 256px;
	border-right: 1px solid ${Colors.WHITE2};
	box-sizing: border-box;
	height: 100%;
	z-index: 10;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		padding: 15px;
		width: 100%;
		max-width: initial;
		max-height: ${({ open }) => (open ? "600" : "62")}px;
		overflow: hidden;
		transition: 1s ease;
	}
`;

export const WrapperInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	height: max-content;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		width: 100%;
	}
`;

export const Sections = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	color: ${Colors.GREY1};
	margin-top: 24px;
	padding-left: 20px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const MobileBurger = styled.div`
	margin-left: auto;
	align-items: center;
	justify-content: center;
	display: none;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: flex;
	}
`;
