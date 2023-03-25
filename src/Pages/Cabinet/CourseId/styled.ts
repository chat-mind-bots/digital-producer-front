import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";

import Colors from "../../../Constants/Colors";

export const CourseID = styled.div`
	display: flex;
	gap: 40px;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	& #DocumentCardUpdateCreateCourse {
		width: auto;
		display: flex;
	}
	& #DocumentCardUpdateCreate {
		width: auto;
		display: flex;
	}
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
	overflow: hidden;
	border-radius: 16px;
	& > #TestUpdate {
		position: absolute;
		top: 15px;
		right: 15px;
		background: rgb(46, 108, 238);
		width: 36px;
		height: 36px;
		border-radius: 50%;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		cursor: pointer;
		z-index: 2;
		&:hover {
			& svg {
				fill: rgb(255, 255, 255);
			}
		}
	}
`;

export const LoaderWrapper = styled.div`
	position: absolute;
	z-index: 3;
	background: ${Colors.WHITE};
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
