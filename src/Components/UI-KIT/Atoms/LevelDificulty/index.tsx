import { FC } from 'react';
import * as ST from './styled';

type LevelDifficultyProps = {
  count: LevelDifficultyType;
};

export type LevelDifficultyType = 1 | 2 | 3;

const LevelDifficulty: FC<LevelDifficultyProps> = ({ count }) => (
  <ST.LevelDifficulty>
    <ST.Title>уровень сложности:</ST.Title>
    <ST.Items>
      {new Array(3).fill(undefined).map((item, index) => (
        <ST.Item
          key={`Item-Level-Difficulty-${index}`}
          isActive={index < count}
        />
      ))}
    </ST.Items>
  </ST.LevelDifficulty>
);

export default LevelDifficulty;
