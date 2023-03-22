import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";

export const Cabinet = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		//height: max-content;
		z-index: 99;
		height: auto;
	}
`;

export const Content = styled.div`
	position: absolute;
	left: 297px;
	top: 129px;
	z-index: 3;
	width: calc(100% - 337px);
	@media (max-width: ${BreakPoints.MOBILE}px) {
		margin-top: 70px;
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		& > div {
			justify-content: center;
		}
	}
`;

export const Wrapper = styled.div``;
