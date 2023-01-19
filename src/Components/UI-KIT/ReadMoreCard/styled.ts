import styled from 'styled-components';
import Colors from 'Colors';

export const ReadMoreCard = styled.div`
  background: ${Colors.WHITE};
  border: 2px solid ${Colors.WHITE2};
  border-radius: 16px;
  padding: 18px 18px 24px;
  max-width: 340px;
  box-sizing: border-box;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Tag = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  color: ${Colors.GREY4};
  padding: 3px 8px;
  border-radius: 3px;
  background: ${Colors.WHITE3};
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  margin-top: 13px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${Colors.GREY1};
  margin-top: 10px;
`;
