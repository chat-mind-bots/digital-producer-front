import styled from "styled-components";

import Colors from "Constants/Colors";
import BreakPoints from "Constants/BreakPoints";

export const AddBlock = styled.div`
	padding: 20px 20px 32px;
	border-radius: 24px;
	background: ${Colors.WHITE};
	max-width: 298px;
	width: 298px;
	min-width: 298px;
	border: 1px solid ${Colors.WHITE2};
	position: sticky;
	top: 129px;
	height: max-content;
	box-sizing: border-box;
	min-height: 468px;
	@media (max-width: ${BreakPoints.TABLET}px) {
		display: none;
	}
`;

export const ImageWrapper = styled.div`
	width: 258px;
	height: 248px;
	position: relative;
	border-radius: 13px;
	overflow: hidden;
	& > object {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}
`;

export const AddBlockLoader = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	color: ${Colors.BLACK1};
	text-align: center;
	margin-top: 24px;
	padding: 0 5px;
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
	line-height: 24px;
	text-align: center;
	color: ${Colors.BLACK1};
	margin-top: 12px;
	padding: 0 5px;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const WrapperButton = styled.div`
	margin-top: 28px;
	overflow: hidden;
`;
