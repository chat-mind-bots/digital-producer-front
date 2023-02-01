import { FC } from 'react';
import { Link } from 'react-router-dom';
import Time from 'Components/UI-KIT/Atoms/Time';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import { ReactComponent as StatusFalse } from 'Icons/StatusFalse.svg';
import { ReactComponent as StatusTrue } from 'Icons/StatusTrue.svg';
import { TestType } from 'Types/CourseId';
import * as ST from './styled';

type TestCardProps = TestType & {
  url: string;
};

const TestCard: FC<TestCardProps> = ({
  id,
  name,
  description,
  status,
  countQuestions,
  minCountForSuccess,
  currentResult,
  transitTime,
  levelDifficulty,
  url,
}) => (
  <Link to={url}>
    <ST.TestCard>
      <ST.Title>{name}</ST.Title>
      <ST.Description>{description}</ST.Description>
      <LevelDifficulty data={levelDifficulty} />
      <Time value={`Время для прохождения: ${transitTime} часа`} />
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
