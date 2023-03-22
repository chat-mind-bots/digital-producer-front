import styled from "styled-components";

import BreakPoints from "BreakPoints";
import Colors from "Colors";

export const NewsView = styled.div`
	width: 100%;
	max-width: 730px;
	box-sizing: border-box;
`;

export const WrapperIcon = styled.div`
	position: relative;
	border-radius: 13px;
	overflow: hidden;
	height: 358px;
	& img {
		max-width: 664px;
		max-height: 284px;
	}
	@media (max-width: ${BreakPoints.TABLET}px) {
		& svg {
			width: 100%;
		}
	}
`;
export const WrapperInfo = styled.div``;

export const WrapperDateInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
	align-items: center;
	margin-top: 20px;
`;

export const Tags = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 17px;
`;

export const Tag = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 10px;
	line-height: 16px;
	letter-spacing: 1px;
	text-transform: uppercase;
	border-radius: 3px;
	padding: 3px 8px;
	color: ${Colors.GREY4};
	background: ${Colors.WHITE3};
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 24px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	margin-top: 16px;
`;

export const WrapperText = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 155%;
	color: ${Colors.GREY1};
	margin-top: 14px;
	max-width: 626px;
	overflow: hidden;
	-webkit-line-clamp: 100000;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Create = styled.div`
	font-size: 100px;
	color: ${Colors.WHITE};
	background: ${Colors.BLUE};
	border-radius: 16px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${Colors.TRANSPARENT};
	cursor: pointer;
	width: 100%;
	height: 211px;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
`;
