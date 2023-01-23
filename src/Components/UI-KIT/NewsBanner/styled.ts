import styled from 'styled-components';
import Colors from 'Colors';

export const NewsBanner = styled.div`
  display: flex;
  background: ${Colors.WHITE1};
  border-radius: 24px;
  max-width: 1103px;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: ${Colors.BLACK1};
`;

export const WrapperInfo = styled.div`
  padding: 48px 36px;
  max-width: 327px;
  width: 100%;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 16px;
  color: ${Colors.BLACK1};
  padding-right: 41px;
`;

export const WrapperButton = styled.div`
  height: max-content;
  margin-top: 24px;
`;

export const Image = styled.div`
  background: red;
  width: 100%;
`;
