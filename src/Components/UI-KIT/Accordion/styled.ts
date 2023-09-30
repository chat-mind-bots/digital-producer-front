import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";
import Colors from "Constants/Colors";

type Props = {
	isActive: boolean;
};

export const Accordion = styled.div<{ open: boolean; isLoading?: boolean }>`
	width: 344px;
	background: ${Colors.WHITE};
	border-radius: 16px;
	max-width: 344px;
	box-sizing: border-box;
	padding: 24px 18px 20px;
	height: max-content;
	top: 129px;
	position: sticky;
	border: 2px solid ${Colors.WHITE2};
	overflow-y: ${({ isLoading }) => (isLoading ? "hidden" : "auto")};
	min-height: ${({ isLoading }) => (isLoading ? "357px" : "100px")};
	transition: 1s;
	max-height: 357px;
	&::-webkit-scrollbar {
		width: 0;
		border-radius: 10px;
	}
	@media (max-width: ${BreakPoints.TABLET}px) {
		transform: translate(${({ open }) => (open ? "0" : "354")}px, 0px);
		position: fixed;
		right: 30px;
		z-index: 9999999999999999999;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		transform: translate(0, 0);
		min-height: ${({ isLoading }) => (isLoading ? "100%" : "50px")};
		width: ${({ open }) => (open ? "100%" : "50px")};
		max-width: ${({ open }) => (open ? "100%" : null)};
		height: ${({ open }) => (open ? "100vh" : "50px")};
		max-height: ${({ open }) => (open ? "100vh" : null)};
		background: ${({ open }) => (open ? null : Colors.BLUE)};
		border-radius: ${({ open }) => (open ? "0" : "50%")};
		border-color: ${({ open }) => (open ? null : Colors.BLUE)};
		right: ${({ open }) => (open ? "auto" : "12px")};
		overflow: hidden;
		top: ${({ open }) => (open ? "62px" : "auto")};
		bottom: ${({ open }) => (open ? "auto" : "12px")};
		z-index: 999999999999;
		transition: 0.3s;
		& p {
			opacity: ${({ open }) => (open ? "1" : "0")};
		}
		&:after {
			content: ${({ open }) => (open ? null : "url(/image/Book.svg)")};
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: rgb(255, 255, 255);
			font-weight: 700;
			font-size: 22px;
			height: 23px;
			text-align: center;
			display: table-cell;
			vertical-align: middle;
		}
	}
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 18px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	margin-bottom: 12px;
	width: 100%;
	& > svg {
		display: none;
	}
	@media (max-width: ${BreakPoints.TABLET}px) {
		& > svg {
			display: block;
		}
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const Name = styled.p<Props>`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 12px;
	line-height: 140%;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: ${Colors.GREY4};
	display: flex;
	align-items: center;
	gap: 18px;
	padding: 11px 10px;
	justify-content: space-between;
	& svg {
		width: 24px;
		height: 24px;
		min-width: 24px;
		transform: rotate(${({ isActive }) => (isActive ? "180deg" : "0deg")});
		transition: 0.6s;
		cursor: pointer;
	}
`;

export const Wrapper = styled.div<{ isLoading?: boolean }>`
	flex-wrap: wrap;
	gap: 8px;
	width: 100%;
	display: ${({ isLoading }) => (isLoading ? "none" : "flex")};
	@media (max-width: ${BreakPoints.MOBILE}px) {
		max-height: 309px;
		overflow: auto;
	}
`;

export const WrapperModule = styled.div`
	background: ${Colors.WHITE3};
	border-radius: 8px;
	padding: 2px;
	box-sizing: border-box;
	width: 100%;
	cursor: pointer;
`;

export const Item = styled.p<Props>`
	font-family: "Vela Sans";
	font-weight: 400;
	font-size: 14px;
	line-height: 140%;
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 12px;
	color: ${({ isActive }) => (isActive ? Colors.BLUE : Colors.GREY1)};
	background: ${({ isActive }) => (isActive ? Colors.WHITE3 : Colors.WHITE)};
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		background: ${Colors.WHITE3};
		transition: 0.3s;
	}
`;

export const Number = styled.span``;

export const WrapperItems = styled.div<Props>`
	border-radius: 6px;
	overflow-y: auto;
	overflow-x: hidden;
	max-height: ${({ isActive }) => (isActive ? "174px" : 0)};
	transition: 1s;
	position: relative;
	&::-webkit-scrollbar {
		width: 0;
		border-radius: 10px;
	}
`;

export const WrapperButtonAddLesson = styled.div`
	padding-top: 8px;
	width: 100%;
	overflow: hidden;
`;

export const UpdateButton = styled.div<{ id: string }>`
	position: absolute;
	top: 50%;
	right: 11px;
	transform: translate(0px, -50%);
	cursor: progress;
	opacity: 0;
	transition: 0.3s;
	&:hover {
		& path,
		circle {
			stroke: ${Colors.BLUE};
		}
	}
`;

export const UpdateButtonModule = styled.div<{ id: string }>`
	position: absolute;
	top: 10px;
	right: 13px;
	cursor: progress;
	opacity: 0;
	transition: 0.3s;
	&:hover {
		& path,
		circle {
			stroke: ${Colors.BLUE};
		}
	}
`;

export const WrapperItem = styled.div`
	position: relative;
	width: 100%;
	&:hover > ${UpdateButton} {
		opacity: 1;
	}
	&:hover > ${UpdateButtonModule} {
		opacity: 1;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		& > ${UpdateButton} {
			opacity: 1;
		}
		& > ${UpdateButtonModule} {
			opacity: 1;
		}
	}
`;

export const NameCurrent = styled.span`
	padding-right: 27px;
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	overflow-wrap: break-word;
	-webkit-box-orient: vertical;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		padding-right: 0;
	}
`;

export const LoaderWrapper = styled.div`
	position: absolute;
	z-index: 2;
	background: ${Colors.WHITE};
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const OpenTablet = styled.div<{ isOpen: boolean }>`
	opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
	position: absolute;
	left: 0;
	top: -10px;
	z-index: 9999;
	background: ${Colors.BLUE};
	width: 36px;
	height: 100%;
	transform: translate(-50%, 10px);
	transition: 0.5s;
	@media (min-width: ${BreakPoints.TABLET}px) {
		display: none;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;
