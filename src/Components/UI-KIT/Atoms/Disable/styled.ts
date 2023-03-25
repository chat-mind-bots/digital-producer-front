import styled from "styled-components";

export const Disable = styled.div<{ id: string; disabled: boolean }>`
	width: 100%;
	cursor: pointer;
	& div {
		pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
	}
	& svg {
		pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
	}
	& button {
		pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
	}
`;
