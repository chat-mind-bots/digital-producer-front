import { FC } from 'react';
import Time from 'Components/UI-KIT/Atoms/Time';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import { Link } from 'react-router-dom';
import { ReactComponent as StatusFalse } from 'Icons/StatusFalse.svg';
import { ReactComponent as StatusTrue } from 'Icons/StatusTrue.svg';
import * as ST from './styled';

type TestCardProps = {
  description: string;
  title: string;
  levelDifficulty: 1 | 2 | 3;
  time: string;
  url: string;
  status: boolean;
  currentResult: number;
  countQuestions: number;
  minCountForSuccess: number;
};

const TestCard: FC<TestCardProps> = ({
  description,
  title,
  levelDifficulty,
  time,
  minCountForSuccess,
  countQuestions,
  currentResult,
  status,
  url,
}) => (
  <Link to={url}>
    <ST.TestCard>
      <ST.Title>{title}</ST.Title>
      <ST.Description>{description}</ST.Description>
      <LevelDifficulty count={levelDifficulty} />
      <Time value={time} />
      <ST.Info>
        <StatusFalse />
        Максимум:{currentResult}/{countQuestions}
      </ST.Info>
      <ST.Info>
        <StatusFalse />
        Для зачета:{minCountForSuccess}/{countQuestions}
      </ST.Info>
      {status ? (
        <ST.Info>
          <StatusTrue />
          Пройден
        </ST.Info>
      ) : (
        <ST.Info>
          <StatusFalse />
          Не пройден
        </ST.Info>
      )}
    </ST.TestCard>
  </Link>
);

export default TestCard;
