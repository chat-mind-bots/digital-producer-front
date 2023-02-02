import styled from 'styled-components';
import Colors from 'Colors';

export const Time = styled.div`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;
  color: ${Colors.GREY2};
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  & svg {
    width: 20px;
  }
`;

export const Value = styled.p``;
