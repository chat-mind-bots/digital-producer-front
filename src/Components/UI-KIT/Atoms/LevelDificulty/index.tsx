import { FC, useEffect, useState } from 'react';
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

export const LoadingLevelDifficulty = () => {
  const [count, setCount] = useState<LevelDifficultyType>(1);
  const maxCount = 3;
  const minCount = 0;
  const delay = 500;

  useEffect(() => {
    const timerId = setInterval(
      () =>
        setCount(
          (count === maxCount ? minCount : count + 1) as LevelDifficultyType
        ),
      delay
    );
    return () => clearInterval(timerId);
  });

  return <LevelDifficulty count={count} />;
};

export default LevelDifficulty;
