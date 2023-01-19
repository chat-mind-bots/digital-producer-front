import styled from 'styled-components';
import Colors from 'Colors';

export const AuthBlock = styled.div`
  display: flex;
  padding: 12px 14px;
  background: ${Colors.WHITE3};
  border-radius: 16px;
  align-items: center;
  gap: 12px;
  max-width: 218px;
  box-sizing: border-box;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${Colors.BLACK2};
`;

export const Mail = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.GREY5};
`;

export const WrapperAvatar = styled.div``;

export const WrapperInfo = styled.div``;

export const WrapperArrowDown = styled.div`
  cursor: pointer;
`;
