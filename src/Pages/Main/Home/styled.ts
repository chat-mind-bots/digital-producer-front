import styled from "styled-components";

import BreakPoints from "BreakPoints";
import Colors from "Colors";

export const Home = styled.div``;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 48px;
	line-height: 66px;
	color: ${Colors.BLACK1};
	@media (max-width: ${BreakPoints.SMALL_MOBILE}px) {
		font-size: 34px;
		line-height: 44px;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		font-size: 40px;
		line-height: 44px;
	}
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 22px;
	line-height: 34px;
	color: ${Colors.BLACK1};
	margin-top: 28px;
	@media (max-width: ${BreakPoints.SMALL_MOBILE}px) {
		font-size: 18px;
	}
`;

export const Buttons = styled.p`
	display: flex;
	gap: 10px;
	margin-top: 48px;
	flex-wrap: wrap;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		& a {
			width: 100%;
			& > button {
				width: 100%;
			}
		}
	}
`;
