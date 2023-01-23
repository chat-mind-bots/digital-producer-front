import styled from 'styled-components';
import Colors from 'Colors';

export const NewsCardSmall = styled.div`
  background: ${Colors.WHITE};

  border-radius: 24px;
  padding: 18px 18px 24px;
  border: 2px solid ${Colors.TRANSPARENT};
  max-width: 340px;
  box-sizing: border-box;
  &:hover {
    border: 2px solid ${Colors.WHITE2};
  }
`;

export const Tags = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const Tag = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Colors.GREY4};
  background: ${Colors.WHITE3};
  border-radius: 3px;
  padding: 3px 8px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  margin-top: 10px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${Colors.GREY1};
  margin-top: 10px;
`;
