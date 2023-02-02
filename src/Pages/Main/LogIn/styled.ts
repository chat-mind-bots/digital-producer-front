import styled from 'styled-components';
import Colors from 'Colors';

export const LogIn = styled.div``;

export const Title = styled.div`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: ${Colors.BLACK1};
`;

export const WrapperButton = styled.div`
  margin-top: 28px;
`;

export const InputTitle = styled.p`
  font-family: 'Vela Sans';
  font-weight: 800;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Colors.GREY1};
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 358px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Inputs = styled.div`
  width: 100%;
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;
