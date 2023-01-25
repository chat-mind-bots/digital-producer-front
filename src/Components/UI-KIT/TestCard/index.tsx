import { FC } from 'react';
import Date from 'Components/UI-KIT/Atoms/Date';
import Time from 'Components/UI-KIT/Atoms/Time';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import * as ST from './styled';
import { Link } from 'react-router-dom';

type TestCardProps = {
  description: string;
  title: string;
  levelDifficulty: 1 | 2 | 3;
  time: string;
  date: string;
  url: string;
};

const TestCard: FC<TestCardProps> = ({
  description,
  title,
  levelDifficulty,
  time,
  date,
  url,
}) => (
  <ST.TestCard>
    <Link to={url}>
      <ST.Wrapper>
        <ST.Title>{title}</ST.Title>
        <ST.Description>{description}</ST.Description>
        <LevelDifficulty count={levelDifficulty} />
        <Time value={time} />
        <Date value={date} />
      </ST.Wrapper>
    </Link>
  </ST.TestCard>
);

export default TestCard;
