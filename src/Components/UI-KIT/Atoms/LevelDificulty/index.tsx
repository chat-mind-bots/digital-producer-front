import { FC, useEffect, useState } from 'react';
import * as ST from './styled';

type LevelDifficultyProps = {
  data: LevelDifficultyType;
};

export type LevelDifficultyType = {
  curren: number;
  max: number;
};

const LevelDifficulty: FC<LevelDifficultyProps> = ({ data }) => (
  <ST.LevelDifficulty>
    <ST.Title>уровень сложности:</ST.Title>
    <ST.Items>
      {new Array(data.max).fill(undefined).map((item, index) => (
        <ST.Item
          key={`Item-Level-Difficulty-${index}`}
          isActive={index < data.curren}
        />
      ))}
    </ST.Items>
  </ST.LevelDifficulty>
);

export const LoadingLevelDifficulty = () => {
  const [count, setCount] = useState<number>(1);
  const maxCount = 3;
  const minCount = 0;
  const delay = 500;

  useEffect(() => {
    const timerId = setInterval(
      () => setCount((count === maxCount ? minCount : count + 1) as number),
      delay
    );
    return () => clearInterval(timerId);
  });

  return <LevelDifficulty data={{ curren: count, max: 3 }} />;
};

export default LevelDifficulty;
