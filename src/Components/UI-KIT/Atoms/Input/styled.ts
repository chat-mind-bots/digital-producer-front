import styled from "styled-components";

import Colors from "Constants/Colors";

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

export const InputElement = styled.input<InputElementProps>`
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
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	overflow-wrap: break-word;
	-webkit-box-orient: vertical;
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
