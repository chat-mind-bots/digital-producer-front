import styled from 'styled-components';
import Colors from 'Colors';

export const Lector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: ${Colors.WHITE};
  border-radius: 24px;
  padding: 18px 18px 24px;
  max-width: 340px;
  box-sizing: border-box;
  & svg {
    height: max-content;
  }
`;
export const Name = styled.p`
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
