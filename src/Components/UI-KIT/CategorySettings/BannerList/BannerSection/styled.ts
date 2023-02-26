import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
`;

export const WrapperButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
`;

export const WrapperFunctionsButtons = styled.div<{ isMax: boolean }>`
	width: 100%;
	display: flex;
	gap: 22px;
	& button {
		max-width: ${({ isMax }) => !isMax && "339px"};
	}
`;

export const WrapperFunctionButton = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
	height: max-content;
`;

export const WrapperButtonsInside = styled.div`
	display: flex;
	gap: 22px;
	width: 100%;
`;

export const WrapperButtonsMaxWidth = styled.div`
	max-width: 339px;
`;
