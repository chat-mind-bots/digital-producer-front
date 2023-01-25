import styled from 'styled-components';
import Colors from 'Colors';

export const TestCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 18px;
  border-radius: 16px;
  background: ${Colors.WHITE};
  max-width: 340px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.BLACK1};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${Colors.GREY1};
`;
