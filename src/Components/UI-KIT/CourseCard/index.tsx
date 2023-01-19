import { ReactComponent as IconForCourseCard } from 'Icons/IconForCourseCard.svg';
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
      <ST.CourseDescription>Подробное описание курса</ST.CourseDescription>
      <ST.LevelOfDifficulty>УРОВЕНЬ СЛОЖНОСТИ:</ST.LevelOfDifficulty>
      <ST.LevelItems>
        {[true, false, false].map((item, index) => (
          <ST.LevelItem
            key={`List-items-for-CourseCard-${index}`}
            isActive={item}
          />
        ))}
      </ST.LevelItems>
    </ST.MainWrapper>
  </ST.CourseCard>
);

export default CourseCard;
