import Colors from 'Colors';
import styled from 'styled-components';

type ItemProps = {
  isLast: boolean;
};

export const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Item = styled.p<ItemProps>`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${({ isLast }) => (isLast ? Colors.BLUE : Colors.GREY4)};
  cursor: ${({ isLast }) => !isLast && 'pointer'};
  &:hover {
    color: ${Colors.BLUE};
  }
  &:after {
    content: ${({ isLast }) => !isLast && '"/"'};
    margin-left: 12px;
    color: ${Colors.GREY4} !important;
  }
`;
