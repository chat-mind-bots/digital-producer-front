import styled from "styled-components";

import Colors from "Constants/Colors";

export const WrapperNotes = styled.div`
	display: flex;
	gap: 12px;
	width: 100%;
	align-items: center;
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

export const InputWrapper = styled.div<{ isError: boolean }>`
	width: 100%;
	& > div > div {
		border: ${({ isError }) =>
			isError ? `1px solid ${Colors.RED}` : `1px solid ${Colors.GREY1}`};
	}
`;
