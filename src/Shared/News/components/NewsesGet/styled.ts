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
	width: 100%;
	max-width: 764px;
	gap: 40px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: ${BreakPoints.TABLET}px) {
		max-width: 100%;
	}
`;
