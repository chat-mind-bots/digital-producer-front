import styled from "styled-components";

import BreakPoints from "BreakPoints";

export const Banners = styled.div`
	display: flex;
	gap: 41px;
`;

export const WrapperBanners = styled.div`
	width: 100%;
	max-width: 764px;
	display: flex;
	gap: 41px;
	flex-wrap: wrap;
	@media (max-width: ${BreakPoints.TABLET}px) {
		max-width: 100%;
	}
`;
