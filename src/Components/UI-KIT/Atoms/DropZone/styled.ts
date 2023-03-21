import styled from "styled-components";

import Colors from "Colors";

export const DropZone = styled.div`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 12px;
	line-height: 120%;
	color: ${Colors.GREY2};
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const UploadFile = styled.div`
	flex: 1;
	border: 1px solid ${Colors.GREY1};
	background: ${Colors.WHITE4};
	border-radius: 12px;
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
	padding: 16px 0;
	position: relative;
	overflow: hidden;
	&:hover {
		border: 1px solid ${Colors.BLUE};
		cursor: pointer;
	}
`;

export const Instruction = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: ${Colors.GREY1};
	text-align: center;
	width: 100%;
`;

export const InputFile = styled.input`
	cursor: pointer;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 1;
`;

export const Progress = styled.progress`
	display: block;
	top: 0;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 0;
	border-radius: 2px;
	background: transparent;
	border-color: transparent;
	color: transparent;
	&::-webkit-progress-bar {
		background-color: transparent;
		width: 100%;
	}
	&::-webkit-progress-value {
		background: ${Colors.BLUE};
	}
`;
