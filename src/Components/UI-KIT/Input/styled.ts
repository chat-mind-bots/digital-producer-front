import styled from 'styled-components';
import { ErrorType, FocusType } from './index';
import Colors from 'Colors';

type Props = {
  isFocus: FocusType;
  value: string;
  isError: ErrorType;
};

export const Input = styled.div``;

export const InputElement = styled.input<Props>`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${({ isFocus, isError }) =>
    isFocus ? Colors.BLACK1 : isError ? Colors.RED : Colors.GREY1};
  width: 100%;
  border: none;
  padding: 18px 18px 18px 37px;
  background: ${Colors.TRANSPARENT};
  transition: 0.5s;
  &::placeholder {
    color: ${({ isError }) => (isError ? Colors.RED : Colors.GREY1)};
  }
`;

export const InputWrapper = styled.div<Props>`
  background: ${Colors.WHITE4};
  position: relative;
  border-radius: 12px;
  border: 2px solid
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
