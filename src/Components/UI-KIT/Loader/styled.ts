import styled from "styled-components";

import Colors from "Constants/Colors";

export const Loader = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
`;

export const AbsoluteLoader = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const WrapperAnimation = styled.div`
	position: relative;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin: 75px;
	display: inline-block;
	vertical-align: middle;
`;

export const Outter = styled.div`
	@keyframes loader-1-outter {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	position: absolute;
	border: 4px solid ${Colors.BLUE};
	border-left-color: transparent;
	border-bottom: 0;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
`;

export const Inner = styled.div`
	@keyframes loader-1-inner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}
	position: absolute;
	border: 4px solid ${Colors.BLUE};
	border-radius: 50%;
	width: 40px;
	height: 40px;
	left: calc(50% - 20px);
	top: calc(50% - 20px);
	border-right: 0;
	border-top-color: transparent;
	animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
`;
