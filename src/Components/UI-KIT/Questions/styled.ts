import styled from 'styled-components';
import Colors from 'Colors';

export const Questions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;
  padding: 28px 0;
  box-shadow: inset 0 0 11px ${Colors.GREY1};
  border-radius: 20px;
`;

export const Question = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: ${Colors.WHITE3};
  padding: 0 18px;
  border-radius: 20px;
`;

export const AnswerWrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 13px 13px 13px 18px;
  background: ${Colors.WHITE};
  border-radius: 20px;
  border: 2px solid ${Colors.TRANSPARENT};
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    border: 2px solid ${Colors.WHITE2};
    border-radius: 16px;
  }
`;

export const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.GREY1};
  background: ${Colors.WHITE};
  padding: 19px;
  border-radius: 20px;
  width: 100%;
`;

export const Answer = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 155%;
  color: ${Colors.GREY1};
`;
