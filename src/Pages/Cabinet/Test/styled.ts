import styled from 'styled-components';
import Colors from 'Colors';

export const Test = styled.div`
  max-width: 960px;
`;

export const Info = styled.div``;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 155%;
  color: ${Colors.GREY1};
  background: ${Colors.WHITE};
  padding: 15px;
  border-radius: 20px;
`;

export const WrapperQuestions = styled.div``;

export const WrapperButton = styled.div`
  margin-top: 28px;
  width: 100%;
  background: ${Colors.WHITE3};
  display: flex;
  justify-content: center;
`;

export const ListTitle = styled.p`
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Colors.GREY1};
  background: ${Colors.WHITE3};
  padding: 18px 150px;
  background: ${Colors.WHITE};
  border-radius: 20px;
  width: max-content;
  margin: 28px auto auto auto;
`;
