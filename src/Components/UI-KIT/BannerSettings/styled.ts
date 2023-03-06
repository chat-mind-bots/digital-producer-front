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

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
`;

export const WrapperButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
	max-width: 300px;
`;

export const WrapperButtonsInside = styled.div`
	display: flex;
	gap: 22px;
	width: 100%;
`;
