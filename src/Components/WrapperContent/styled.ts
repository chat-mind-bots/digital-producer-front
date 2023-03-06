import styled from "styled-components";

import BreakPoints from "BreakPoints";
import Colors from "Colors";

export const WrapperContent = styled.div`
	background: ${Colors.WHITE3};
	border-radius: 24px;
	width: 100%;
	padding: 32px;
	box-sizing: border-box;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		padding: 12px;
	}
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 22px;
	line-height: 24px;
	padding-bottom: 22px;
	color: ${Colors.BLACK1};
`;

export const Content = styled.div``;

export const WrapperBreadCrumbs = styled.div`
	padding-bottom: 28px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
