import styled from "styled-components";

import BreakPoints from "../../../../BreakPoints";

export const Wrapper = styled.div`
	max-width: 900px;
	flex: 1;
`;

export const MainWrapper = styled.div`
	display: flex;
	gap: 45px;
	@media (max-width: ${BreakPoints.TABLET}px) {
		flex-wrap: wrap;
		flex-direction: column-reverse;
		align-items: center;
	}
`;

export const WrapperCreateButton = styled.div`
	& > div {
		max-width: 100%;
	}
`;
