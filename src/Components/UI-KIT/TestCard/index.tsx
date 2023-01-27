import { FC } from 'react';
import Time from 'Components/UI-KIT/Atoms/Time';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import { Link } from 'react-router-dom';
import { ReactComponent as StatusFalse } from 'Icons/StatusFalse.svg';
import { ReactComponent as StatusTrue } from 'Icons/StatusTrue.svg';
import { TestType } from 'Types/CourseId';
import RoutesList from 'Router/routesList';
import * as ST from './styled';

const TestCard: FC<TestType> = ({
  id,
  name,
  description,
  status,
  countQuestions,
  minCountForSuccess,
  currentResult,
  transitTime,
  levelDifficulty,
}) => (
  <Link to={`${RoutesList.TEST_ID}${id}`}>
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
