import styled from "styled-components";

import BreakPoints from "Constants/BreakPoints";
import Colors from "Constants/Colors";

type Props = {
	isLoading: boolean;
};

type WrapperSubTitleProps = Props & {
	delay: number;
};

export const LessonView = styled.div`
	border-radius: 16px;
	padding: 18px;
	background: ${Colors.WHITE};
	max-width: 665.5px;
	box-sizing: border-box;
`;

export const Title = styled.p<Props>`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 24px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	margin-top: 20px;
	width: 100%;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: start;
	gap: 8px;
	text-overflow: ellipsis;
	-webkit-line-clamp: 4;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	&:after {
		content: "";
		width: 100%;
		left: 0;
		top: 0;
		position: absolute;
		background: ${Colors.BLUE};
		height: 100%;
		transform: ${({ isLoading }) => !isLoading && "translate(-100%, 0)"};
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		transition: 0.5s;
		transition-delay: ${({ isLoading }) => (!isLoading ? "0.1s" : "0.5s")};
		transition-timing-function: ease-in-out;
	}
`;

export const WrapperLevelDifficulty = styled.div`
	margin-top: 18px;
`;

export const WrapperStatuses = styled.span<{ isLoaded: boolean }>`
	display: flex;
	gap: 10px;
	& div:first-child {
		display: ${({ isLoaded }) => (isLoaded ? "block" : "none")};
	}
	& span {
		display: ${({ isLoaded }) => (isLoaded ? "none" : "block")};
	}
`;

type StatusProps = {
	isActive: boolean;
	id?: string;
};

export const Status = styled.span<StatusProps>`
	cursor: pointer;
	font-size: 37px;

	& svg path {
		stroke: ${({ isActive }) => isActive && Colors.BLUE} !important;
	}
	& svg rect {
		stroke: ${({ isActive }) => isActive && Colors.BLUE} !important;
	}

	&:hover svg path {
		stroke: ${Colors.BLUE} !important;
	}
	&:hover svg rect {
		stroke: ${Colors.BLUE} !important;
	}
	&:hover svg {
		border-color: ${Colors.BLUE} !important;
	}
`;

export const StatusDisables = styled.span<StatusProps>`
	cursor: pointer;
	font-size: 37px;

	& svg path {
		stroke: ${({ isActive }) => isActive && Colors.BLUE} !important;
	}
	& svg rect {
		stroke: ${({ isActive }) => isActive && Colors.BLUE} !important;
	}
`;

export const WrapperInfo = styled.div`
	gap: 12px;
	margin-top: 14px;
	display: flex;
	flex-wrap: wrap;
`;

export const SubTitleInfo = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 155%;
	color: ${Colors.GREY1};
	position: relative;
	overflow: hidden;
	width: 100%;
`;

export const TitleInfo = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 12px;
	line-height: 155%;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: ${Colors.GREY2};
	width: max-content;
`;

export const LinkToCourse = styled.div`
	margin-top: 12px;
`;

export const Loader = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
}
  &:after {
    content: "";
    display: inline-block;
    font-size: 6.2px;
    border: 1.2em solid ${Colors.BLUE};
    border-right-color: rgba(0,64,128, 0) !important;
    transform: translateZ(0);
    border-radius: 50%;
    width: 10em;
    height: 10em;
    position: absolute;
    top: 50%;
    right: calc(50% - 5em);
    margin-top: -6em;
`;

export const WrapperVideo = styled.div<Props>`
	height: 358px;
	position: relative;
	border-radius: 8px;
	overflow: hidden;
	&:after {
		width: 0;
		height: 0;
		border-top: 363px solid ${Colors.BLUE};
		border-left: 635px solid transparent;
		content: "";
		position: absolute;
		margin-left: -635px;
		transform: ${({ isLoading }) => !isLoading && "translate(100%, -100%)"};
		transition: 0.7s;
		transition-timing-function: ease-in-out;
	}
	&:before {
		content: "";
		width: 0;
		height: 0;
		border-bottom: 363px solid ${Colors.BLUE};
		border-right: 635px solid transparent;
		position: absolute;
		bottom: 0;
		transform: ${({ isLoading }) => !isLoading && "translate(-100%, 100%)"};
		transition: 0.7s;
		transition-timing-function: ease-in-out;
	}
	@keyframes colors {
		0% {
			border-color: ${Colors.WHITE};
			border-bottom-color: transparent;
		}
		33% {
			border-color: ${Colors.WHITE1};
			border-bottom-color: transparent;
		}
		66% {
			border-color: ${Colors.WHITE2};
			border-bottom-color: transparent;
		}
		100% {
			border-color: ${Colors.WHITE};
			border-bottom-color: transparent;
		}
	}
	@keyframes spiner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(720deg);
		}
	}
	& ${Loader} {
		opacity: ${({ isLoading }) => isLoading && 1};
		transition-delay: ${({ isLoading }) => (isLoading ? "0.7" : "0.3")}s;
		&:after {
			animation: spiner 1s infinite cubic-bezier(0.53, 0.21, 0.57, 0.85),
				colors 3s infinite cubic-bezier(0.45, -0.03, 1, 0.77);
		}
	}
	// TODO: иконки в courseId
	// & svg {
	// 	@media (max-width: ${BreakPoints.MOBILE}px) {
	// 		display: none;
	// 	}
	// }
`;

export const WrapperSubTitle = styled.div<WrapperSubTitleProps>`
	width: 100%;
	max-height: ${({ isLoading }) => (isLoading ? " 24.8px" : "400px")};
	transition: 1s;
	overflow: hidden;
	position: relative;
	overflow-y: ${({ isLoading }) => (isLoading ? "hidden" : "auto")};
	text-overflow: ellipsis;
	-webkit-line-clamp: 100000;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	&:after {
		content: "";
		width: 100%;
		left: 0;
		top: 0;
		position: absolute;
		background: ${Colors.BLUE};
		height: 100%;
		transform: ${({ isLoading }) => !isLoading && "translate(-100%, 0)"};
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		transition: 0.7s;
		transition-delay: ${({ isLoading, delay }) =>
			!isLoading ? `${delay + 0.4}s` : `${delay + 0.4}s`};
		transition-timing-function: ease-in-out;
	}
`;

export const WrapperTags = styled.div<WrapperSubTitleProps>`
	width: 100%;
	max-height: ${({ isLoading }) => (isLoading ? " 24.8px" : "400px")};
	transition: 1s;
	overflow: hidden;
	position: relative;
	overflow-y: auto;
	text-overflow: ellipsis;
	-webkit-line-clamp: 100000;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	justify-content: flex-start;
	flex-wrap: wrap;
	& > div {
		margin-top: 0;
		flex-wrap: wrap;
	}
	&:after {
		content: "";
		width: 100%;
		left: 0;
		top: 0;
		position: absolute;
		background: ${Colors.BLUE};
		height: 100%;
		transform: ${({ isLoading }) => !isLoading && "translate(-100%, 0)"};
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		transition: 0.7s;
		transition-delay: ${({ isLoading, delay }) =>
			!isLoading ? `${delay + 0.4}s` : `${delay + 0.4}s`};
		transition-timing-function: ease-in-out;
	}
`;

export const WrapperButton = styled.div`
	width: 100%;
`;

export const MobileBy = styled.div<{ disabled?: boolean }>`
	margin-top: 12px;
	display: none;
	& button {
		pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: block;
	}
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 155%;
	color: ${Colors.GREY1};
	text-align: initial;
	margin-bottom: 12px;
	padding: 0 5px;
`;
