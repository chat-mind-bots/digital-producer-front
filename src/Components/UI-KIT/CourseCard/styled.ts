import styled from 'styled-components';
import colors from 'Colors';

type LevelItemProps = {
  isActive: boolean;
};

export const CourseCard = styled.div`
  padding: 19px;
  border-radius: 20px;
  background: ${colors.WHITE};
  max-width: 700px;
  display: flex;
  box-sizing: border-box;
`;

export const MainWrapper = styled.div`
  margin-left: 32px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

export const Button = styled.button`
  border-radius: 6px;
  font-weight: 600;
  font-size: 10px;
  padding: 3px 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1px;
  background: ${colors.SKYBLUE};
  color: ${colors.BLUE};
  text-transform: uppercase;
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 6px;
  font-size: 20px;
  line-height: 140%;
  color: ${colors.BLACK2};
`;

export const CourseDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${colors.GREY1};
  margin-bottom: 12px;
`;

export const LevelOfDifficulty = styled.p`
  color: ${colors.GREY2};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
`;

export const LevelItems = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const LevelItem = styled.div<LevelItemProps>`
  border-radius: 3px;
  width: 54px;
  height: 10px;
  background: ${({ isActive }) => (isActive ? colors.BLUE : colors.GREY3)};
`;
