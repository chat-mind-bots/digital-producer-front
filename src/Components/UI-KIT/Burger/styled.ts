import styled from "styled-components";

import Colors from "../../../Colors";

export const Burger = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Line = styled.div<{ open: boolean }>`
	position: absolute;
	width: 40px;
	height: 4px;
	transition-timing-function: ${({ open }) =>
		open ? "cubic-bezier(0.215, 0.61, 0.355, 1)" : "ease"};
	transition-duration: 0.15s;
	transition-property: transform;
	border-radius: 4px;
	background-color: ${Colors.BLUE};
	top: 50%;
	display: block;
	margin-top: -2px;
	transition-delay: ${({ open }) => (open ? "0.12s" : "")};
	transform: ${({ open }) => (open ? "rotate(45deg)" : "")};
	&:before {
		display: block;
		content: "";
		top: ${({ open }) => (open ? "-10px" : "-10px")};
		position: absolute;
		width: 40px;
		height: 4px;
		transition-timing-function: ease;
		transition-duration: 0.15s;
		transition-property: transform;
		border-radius: 4px;
		background-color: ${Colors.BLUE};
		transition: ${({ open }) =>
			open ? "top 1s ease,opacity 75ms ease .12s" : ""};
		opacity: ${({ open }) => (open ? "0" : "1")};
	}
	&:after {
		display: block;
		content: "";
		bottom: ${({ open }) => (open ? "0" : "-10px")};
		position: absolute;
		width: 40px;
		height: 4px;
		transition-timing-function: ease;
		transition-duration: 0.15s;
		transition-property: transform;
		border-radius: 4px;
		background-color: ${Colors.BLUE};

		transition: ${({ open }) =>
			open
				? "bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s"
				: ""};
		transform: ${({ open }) => (open ? "rotate(-90deg)" : "")};
	}
`;

export const Box = styled.div`
	cursor: pointer;
	position: relative;
	display: inline-block;
	width: 40px;
	height: 24px;
`;
