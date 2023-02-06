import styled from "styled-components";

import BreakPoints from "BreakPoints";
import Colors from "Colors";

export const CourseCard = styled.div`
	width: 100%;
`;

export const CourseCardProducer = styled.div`
	font-size: 100px;
	color: ${Colors.WHITE};
	background: ${Colors.BLUE};
	border-radius: 16px;
	width: 100%;
	height: 216px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${Colors.TRANSPARENT};
	cursor: pointer;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
`;

export const MainWrapper = styled.div`
	margin-top: -2px;
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 600;
	margin-top: 16px;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK2};
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	margin-top: 6px;
	color: ${Colors.GREY1};
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

export const Image = styled.div`
	min-width: 220px;
	border-radius: 16px;
	overflow: hidden;
	// TODO: иконки в courseId
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;
