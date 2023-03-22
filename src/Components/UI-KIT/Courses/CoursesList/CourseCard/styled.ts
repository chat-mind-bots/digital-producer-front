import styled from "styled-components";

import Colors from "Constants/Colors";
import BreakPoints from "Constants/BreakPoints";

export const CourseCard = styled.div`
	width: 100%;
`;

export const MainWrapper = styled.div`
	margin-top: -2px;
	flex: 1;
	overflow: hidden;
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 600;
	margin-top: 16px;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK2};
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	margin-top: 6px;
	color: ${Colors.GREY1};
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const WrapperLevel = styled.div`
	margin-top: 12px;
`;

export const Wrapper = styled.div`
	background: ${Colors.WHITE};
	padding: 19px;
	display: flex;
	box-sizing: border-box;
	gap: 32px;
	cursor: pointer;
	border-radius: 20px;
	border: 2px solid ${Colors.TRANSPARENT};
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
`;

export const ImageWrapper = styled.div`
	min-width: 220px;
	width: 220px;
	position: relative;
	border-radius: 16px;
	height: 100%;
	max-height: 173px;
	overflow: hidden;
	& > object {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
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

export const BlockImage = styled.div`
	width: 220px;
	min-height: 169px;
`;
