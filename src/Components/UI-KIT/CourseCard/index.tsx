import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconForCourseCard } from 'Icons/IconForCourseCard.svg';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import Colors from 'Colors';
import * as ST from './styled';

type CourseCardProps = {
  title: string;
  description: string;
  levelDifficulty: 1 | 2 | 3;
  url: string;
  tagsColors: boolean;
  tags: TagType[];
};

export interface TagType {
  id: number;
  name: string;
  background: string;
  color: string;
}

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
        <ST.Tags>
          {tags.map((tag) => (
            <ST.Tag
              key={`CourseCard-tag-${tag.id}`}
              background={tagsColors ? tag.background : Colors.SKYBLUE}
              color={tagsColors ? tag.color : Colors.BLUE}
            >
              {tag.name}
            </ST.Tag>
          ))}
        </ST.Tags>
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
