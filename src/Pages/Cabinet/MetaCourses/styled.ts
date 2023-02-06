import styled from "styled-components";
import BreakPoints from "BreakPoints";

export const MetaCourses = styled.div`
	display: flex;
	gap: 41px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
`;

export const WrapperCourses = styled.div`
	width: 100%;
	max-width: 764px;
	@media (max-width: ${BreakPoints.TABLET}px) {
		max-width: 100%;
	}
`;
