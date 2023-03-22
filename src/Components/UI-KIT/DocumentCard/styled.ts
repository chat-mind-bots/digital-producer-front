import styled from "styled-components";

import Colors from "Constants/Colors";

export const DocumentCard = styled.div`
	border-radius: 16px;
	max-width: 328px;
	width: 100%;
	box-sizing: border-box;
	background: ${Colors.WHITE};
	position: relative;
`;

export const DocumentCardProducer = styled.div`
	font-size: 100px;
	color: ${Colors.WHITE};
	background: ${Colors.BLUE};
	border-radius: 24px;
	width: 328px;
	height: auto;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const Name = styled.div`
	font-family: "Vela Sans";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const NameCurrent = styled.p`
	max-width: 260px;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Description = styled.p`
	margin-top: 10px;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: ${Colors.GREY1};
	-webkit-line-clamp: 10000;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Wrapper = styled.div`
	padding: 18px;
	cursor: pointer;
	border: 2px solid ${Colors.TRANSPARENT};
	border-radius: 16px;
	position: relative;
	height: 100%;
	box-sizing: border-box;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
`;

export const Svg = styled.div`
	position: absolute;
	top: 21px;
	right: 0;
	& svg {
		transform: rotate(-90deg);
	}
`;

export const UpdateIco = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	background: ${Colors.BLUE};
	width: 36px;
	height: 36px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		& path {
			fill: ${Colors.WHITE};
		}
	}
`;
