import styled from "styled-components";

import BreakPoints from "BreakPoints";

export const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 45px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		justify-content: center;
	}
	@media (max-width: ${BreakPoints.TABLET}px) {
		justify-content: center;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
`;

export const WrapperCourses = styled.div`
	width: 100%;
`;

export const WrapperContent = styled.div`
	display: flex;
	gap: 45px;
	width: 100%;
`;

export const WrapperMain = styled.div`
	max-width: 760px;
	display: flex;
	flex-wrap: wrap;
	gap: 45px;
	width: 100%;
`;
