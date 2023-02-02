import Colors from 'Colors';
import BreakPoints from 'BreakPoints';
import styled from 'styled-components';

export const AddBlock = styled.div`
  padding: 20px 20px 32px;
  border-radius: 24px;
  background: ${Colors.WHITE};
  max-width: 258px;
  border: 1px solid ${Colors.WHITE2};
  position: sticky;
  top: 129px;
  height: max-content;
  @media (max-width: ${BreakPoints.TABLET}px) {
    display: none;
  }
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.BLACK1};
  text-align: center;
  margin-top: 24px;
  padding: 0 5px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${Colors.BLACK1};
  margin-top: 12px;
  padding: 0 5px;
`;

export const WrapperButton = styled.div`
  margin-top: 28px;
`;
