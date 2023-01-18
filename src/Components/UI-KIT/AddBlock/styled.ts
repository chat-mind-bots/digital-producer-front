import styled from 'styled-components';
import Colors from 'Colors';

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
  margin-top: 24px;
  text-align: center;
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

export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${Colors.WHITE};
  background: ${Colors.BLUE};
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 28px;
  padding: 13px 0;
`;
