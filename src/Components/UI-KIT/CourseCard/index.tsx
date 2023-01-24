import { FC } from 'react';
import { ReactComponent as IconForCourseCard } from 'Icons/IconForCourseCard.svg';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import * as ST from './styled';

type CourseCardProps = {
  nameTag: string;
  title: string;
  description: string;
  levelDifficulty: 1 | 2 | 3;
};

const CourseCard: FC<CourseCardProps> = ({
  nameTag,
  title,
  description,
  levelDifficulty,
}) => (
  <ST.CourseCard>
    <IconForCourseCard />
    <ST.MainWrapper>
      <ST.Tags>
        <ST.Tag>{nameTag}</ST.Tag>
      </ST.Tags>
      <ST.Title>{title}</ST.Title>
      <ST.Description>{description}</ST.Description>
      <ST.WrapperLevel>
        <LevelDifficulty count={levelDifficulty} />
      </ST.WrapperLevel>
    </ST.MainWrapper>
  </ST.CourseCard>
);

export default CourseCard;
