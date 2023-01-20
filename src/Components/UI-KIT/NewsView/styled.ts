import styled from 'styled-components';
import Colors from 'Colors';

export const NewsView = styled.div`
  padding: 18px;
  border-radius: 16px;
  background: ${Colors.WHITE};
  max-width: 700px;
  box-sizing: border-box;
`;

export const WrapperInfo = styled.div``;

export const WrapperDateInfo = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 20px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 17px;
`;

export const Tag = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 3px 8px;
  color: ${Colors.GREY4};
  background: ${Colors.WHITE3};
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  margin-top: 16px;
`;

export const WrapperText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 155%;
  color: ${Colors.GREY1};
  margin-top: 14px;
  max-width: 626px;
`;
