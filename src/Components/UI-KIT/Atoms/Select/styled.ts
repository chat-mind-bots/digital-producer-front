import styled from "styled-components";

import Colors from "Constants/Colors";

type WrapperIcoProps = {
	isOpen: boolean;
};

type InputWrapperProps = {
	isFocus: boolean;
	value: string;
	isError?: boolean;
	borderSize: string;
};

type InputElementProps = {
	isFocus: boolean;
	value: string;
	isError?: boolean;
	padding: string;
	fontSize: string;
	fontWeight: string;
};

export const Input = styled.div`
	width: 100%;
`;

export const InputElement = styled.div<InputElementProps>`
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => fontSize};
	line-height: 20px;
	color: ${({ isFocus, isError }) =>
		isFocus ? Colors.BLACK1 : isError ? Colors.RED : Colors.GREY1};
	width: 100%;
	border: none;
	padding: ${({ padding }) => padding};
	background: ${Colors.TRANSPARENT};
	transition: 0.5s;
	&::placeholder {
		color: ${({ isError }) => (isError ? Colors.RED : Colors.GREY1)};
	}
`;

export const OptionalText = styled.span<InputElementProps>`
	margin-right: -14px;
	padding-left: 14px;
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => fontSize};
	line-height: 20px;
	color: ${({ isFocus, isError }) =>
		isFocus ? Colors.BLACK1 : isError ? Colors.RED : Colors.GREY1};
	background: ${Colors.TRANSPARENT};
	transition: 0.5s;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  background: ${Colors.WHITE4};
  position: relative;
  border-radius: 12px;
  border: ${({ borderSize }) => borderSize} solid
    ${({ isFocus, value, isError }) =>
			isFocus
				? Colors.BLUE
				: isError
				? Colors.RED
				: value.length
				? Colors.GREY1
				: Colors.RGBA_GREY};
  transition: 0.7s;
  & svg {
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 7px;
    transform: translate(0, -50%);
    & path{
      fill: ${({ isFocus, value, isError }) =>
				isFocus
					? Colors.BLUE
					: isError
					? Colors.RED
					: value.length
					? Colors.GREY1
					: Colors.RGBA_GREY}; 
      transition: 0.5s;
    }}}
`;

export const ErrorText = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: ${Colors.RED};
	display: flex;
	align-items: center;
	gap: 10px;
	padding-left: 9px;
	margin-top: 10px;
	padding-bottom: 10px;
`;

export const Options = styled.div`
	position: absolute;
	top: 100%;
	display: flex;
	flex-wrap: wrap;
	background: ${Colors.WHITE4};
	width: 100%;
	border: 1px solid ${Colors.GREY1};
	z-index: 99;
	border-radius: 12px;
	margin-top: 10px;
	overflow: hidden;
`;

export const OptionsItem = styled.p`
	width: 100%;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: ${Colors.GREY1};
	display: flex;
	align-items: center;
	gap: 10px;
	padding-left: 9px;
	padding-top: 10px;
	padding-bottom: 10px;
	&:hover {
		background: ${Colors.SKYBLUE};
		cursor: pointer;
	}
`;

export const WrapperIco = styled.div<WrapperIcoProps>`
	position: absolute;
	right: 20px;
	width: 24px;
	height: 24px;
	top: 50%;
	transform: translate(0px, -50%);
	cursor: pointer;
	& > svg {
		position: static;
		transform: none;
	}
`;

export const BlockBackground = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
`;
