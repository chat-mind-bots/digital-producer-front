import { FC } from 'react';
import Date from 'Components/UI-KIT/Atoms/Date';
import Time from 'Components/UI-KIT/Atoms/Time';
import LevelDifficulty from '../Atoms/LevelDificulty';
import * as ST from './styled';

type TestCardProps = {
  description: string;
  title: string;
  levelDifficulty: 1 | 2 | 3;
  time: string;
  date: string;
};

const TestCard: FC<TestCardProps> = ({
  description,
  title,
  levelDifficulty,
  time,
  date,
}) => (
  <ST.TestCard>
    <ST.Title>{title}</ST.Title>
    <ST.Description>{description}</ST.Description>
    <LevelDifficulty count={levelDifficulty} />
    <Time value={time} />
    <Date value={date} />
  </ST.TestCard>
);

export default TestCard;
