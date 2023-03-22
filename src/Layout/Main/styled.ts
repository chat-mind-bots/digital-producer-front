import styled from "styled-components";

import BreakPoints from "BreakPoints";
import Colors from "Colors";

export const Main = styled.div`
	display: flex;
	height: 100vh;
	overflow: hidden;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		height: auto;
		min-height: 100vh;
	}
`;

export const Wrapper = styled.div`
	padding: 72px 72px 28px 72px;
	max-width: 720px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		padding: 20px 20px 10px 20px;
	}
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Footer = styled.div`
	display: flex;
	gap: 24px;
	align-items: flex-end;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		margin-top: 28px;
	}
`;

export const Name = styled.div`
	font-weight: 500;
	font-size: 13px;
	line-height: 18px;
	color: ${Colors.GREY1};
`;

export const Content = styled.div`
	width: 100%;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		margin-top: 28px;
	}
`;

export const Image = styled.div`
	flex: 1;
	background: ${Colors.WHITE5};
	& > img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const WrapperButton = styled.div`
	width: max-content;
`;

export const Logo = styled.div`
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const LogoMobile = styled.div`
	display: none;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: block;
	}
`;
