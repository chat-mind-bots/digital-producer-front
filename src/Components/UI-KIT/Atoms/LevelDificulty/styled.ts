import styled from 'styled-components';
import Colors from 'Colors';

type LevelItemProps = {
  isActive: boolean;
};

export const LevelDifficulty = styled.div``;

export const Title = styled.p`
  color: ${Colors.GREY2};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
`;

export const Items = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const Item = styled.div<LevelItemProps>`
  border-radius: 3px;
  width: 54px;
  height: 10px;
  background: ${({ isActive }) => (isActive ? Colors.BLUE : Colors.GREY3)};
`;
