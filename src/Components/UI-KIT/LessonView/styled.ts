import styled from 'styled-components';
import Colors from 'Colors';

export const LessonView = styled.div`
  border-radius: 16px;
  padding: 18px;
  background: ${Colors.WHITE};
  max-width: 666px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  margin-top: 20px;
`;

export const WrapperLevelDifficulty = styled.div`
  margin-top: 18px;
`;

export const WrapperInfo = styled.div`
  gap: 12px;
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
`;

export const SubTitleInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  color: ${Colors.GREY1};
  width: 100%;
`;

export const TitleInfo = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 12px;
  line-height: 155%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${Colors.GREY2};
  width: max-content;
`;
