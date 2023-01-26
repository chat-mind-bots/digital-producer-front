import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconForCourseCard } from 'Icons/IconForCourseCard.svg';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import Tags, { TagType } from 'Components/UI-KIT/Atoms/Tags';
import * as ST from './styled';

type CourseCardProps = {
  title: string;
  description: string;
  levelDifficulty: 1 | 2 | 3;
  url: string;
  tagsColors: boolean;
  tags: TagType[];
};

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  levelDifficulty,
  url,
  tags,
  tagsColors,
}) => (
  <Link to={url}>
    <ST.CourseCard>
      <IconForCourseCard />
      <ST.MainWrapper>
        <Tags
          tags={tags}
          tagsColors={tagsColors}
        />
        <ST.Title>{title}</ST.Title>
        <ST.Description>{description}</ST.Description>
        <ST.WrapperLevel>
          <LevelDifficulty count={levelDifficulty} />
        </ST.WrapperLevel>
      </ST.MainWrapper>
    </ST.CourseCard>
  </Link>
);

export default CourseCard;
