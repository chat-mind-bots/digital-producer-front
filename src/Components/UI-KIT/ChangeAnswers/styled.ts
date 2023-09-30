import styled from "styled-components";

import Colors from "Constants/Colors";

export const WrapperTags = styled.div`
	display: flex;
	gap: 12px;
	width: 100%;
	align-items: center;
`;

export const WrapperColor = styled.div`
	position: relative;
	width: 100%;
`;

export const BlockColor = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: ${Colors.GREY1};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 100%;
	border: 1px solid ${Colors.GREY1};
	border-radius: 12px;
	position: relative;
	cursor: pointer;
`;

export const WrapperSketchPicker = styled.div`
	position: absolute;
	z-index: 2;
	top: 100%;
`;

export const ErrText = styled.p`
	color: ${Colors.RED};
`;

export const Remove = styled.div`
	min-width: 30px;
	width: 30px;
	height: 30px;
	background: ${Colors.BLUE};
	border-radius: 50%;
	color: ${Colors.WHITE};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background: ${Colors.BLUE_DARK};
	}
`;
