import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";
import Colors from "Constants/Colors";

export const NewsCard = styled.div`
	height: 470px;
	background: ${Colors.WHITE};
	border-radius: 24px;
	padding: 18px 18px 24px;
	border: 2px solid ${Colors.TRANSPARENT};
	max-width: 340px;
	max-height: 470px;
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	div &:hover {
		border: 2px solid ${Colors.WHITE2};
	}
	// TODO: иконки в courseId
	& svg {
		@media (max-width: ${BreakPoints.MOBILE}px) {
			display: none;
		}
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		max-width: 100%;
	}
`;

export const NewsCardAdmin = styled.div`
	font-size: 100px;
	color: ${Colors.WHITE};
	background: ${Colors.BLUE};
	border-radius: 24px;
	width: 340px;
	height: 470px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${Colors.TRANSPARENT};
	cursor: pointer;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		height: 170px;
	}
`;

export const Title = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	margin-top: 10px;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	overflow-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Description = styled.p`
	max-width: 304px;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: ${Colors.GREY1};
	margin-top: 10px;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const WrapperTime = styled.div`
	margin-top: 20px;
`;

export const WrapperDate = styled.div`
	margin-top: 12px;
`;

export const WrapperTop = styled.div`
	height: 77%;
`;
export const WrapperBot = styled.div``;

export const WrapperImage = styled.div`
	max-width: 304px;
	max-height: 200px;
	min-width: 300px !important;
	width: 100%;
	height: 100%;
	border-radius: 18px;
	overflow: hidden;
`;
