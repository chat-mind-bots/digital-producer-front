import { ReactComponent as IconForCourseCard } from 'Icons/IconForCourseCard.svg';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import * as ST from './styled';

const CourseCard = () => (
  <ST.CourseCard>
    <IconForCourseCard />
    <ST.MainWrapper>
      <ST.Tags>
        <ST.Tag>дизайн</ST.Tag>
        <ST.Tag>дизайн</ST.Tag>
        <ST.Tag>дизайн</ST.Tag>
      </ST.Tags>
      <ST.Title>Название курса</ST.Title>
      <ST.Description>Подробное описание курса</ST.Description>
      <ST.WrapperLevel>
        <LevelDifficulty />
      </ST.WrapperLevel>
    </ST.MainWrapper>
  </ST.CourseCard>
);

export default CourseCard;
