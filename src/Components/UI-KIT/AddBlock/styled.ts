import Colors from 'Colors';
import styled from 'styled-components';

export const AddBlock = styled.div`
  padding: 20px 20px 32px;
  border-radius: 24px;
  background: ${Colors.WHITE};
  max-width: 258px;
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.BLACK1};
  text-align: center;
  padding: 24px 0 0 5px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${Colors.BLACK1};
  padding: 12px 0 0 5px;
`;

export const WrapperButton = styled.div`
  padding-top: 28px;
`;
