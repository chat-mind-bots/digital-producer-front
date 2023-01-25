import styled from 'styled-components';
import Colors from 'Colors';

export const Rules = styled.div`
  background: ${Colors.WHITE};
  padding: 18px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`;

export const Rule = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 155%;
  color: ${Colors.GREY1};
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: ${Colors.BLUE};
  }
`;
