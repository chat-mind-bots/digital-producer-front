import styled from "styled-components";

import Colors from "Colors";
import BreakPoints from "BreakPoints";

export const NewsesList = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	height: 100%;
	& a {
		max-height: 470px;
		height: 100%;
	}
	@media (max-width: ${BreakPoints.TABLET}px) {
		justify-content: center;
	}
`;
export const WrapperSetting = styled.div`
	position: absolute;
	right: 15px;
	top: 15px;
	background: #2e6cee;
	padding: 6px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	& svg:hover {
		cursor: pointer;
		stroke: ${Colors.WHITE};
		fill: ${Colors.WHITE};
	}
`;
export const WrapperContent = styled.div`
	position: relative;
	max-height: 470px;
	height: 100%;
	max-width: 340px;
	width: 100%;
`;
