import styled from "styled-components";

import BreakPoints from "BreakPoints";

export const CourseID = styled.div`
	display: flex;
	gap: 40px;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		justify-content: center;
	}
`;

export const WrapperInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	max-width: 730px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		max-width: 100%;
	}
`;

export const CardTest = styled.div`
	position: relative;
	& > svg {
		position: absolute;
		font-weight: 500;
		font-size: 15px;
		line-height: 155%;
		color: #808191;
		top: 15px;
		right: 15px;
		cursor: pointer;
	}
`;
