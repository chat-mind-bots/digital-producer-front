import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";

export const News = styled.div`
	display: flex;
	gap: 41px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;

export const WrapperNews = styled.div`
	max-width: 764px;
	flex: 1;
	display: flex;
	@media (max-width: ${BreakPoints.TABLET}px) {
		max-width: 100%;
	}
`;
