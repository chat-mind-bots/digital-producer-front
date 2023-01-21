import { FocusType } from './index';
import styled from 'styled-components';
import Colors from 'Colors';

type Props = {
  isFocus: FocusType;
  value: string;
};

export const Search = styled.div``;

export const SearchList = styled.div``;

export const SearchWrapper = styled.div<Props>`
  color: ${({ isFocus }) => (isFocus ? Colors.BLUE : Colors.GREY1)};
  position: relative;
  background: ${Colors.WHITE4};
  border-radius: 12px;
  border: ${({ isFocus }) =>
    isFocus ? `2px solid ${Colors.BLUE}` : `2px solid ${Colors.TRANSPARENT}`};
  transition: 0.6s;
  & svg {
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
    & path {
      fill: ${({ isFocus }) => isFocus && Colors.BLUE};
      transition: 0.6s;
    }
  }
`;

export const SearchElement = styled.input<Props>`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  border: none;
  padding: 20px 16px 20px 35px;
  background: transparent;
  color: ${Colors.BLACK1};
`;
