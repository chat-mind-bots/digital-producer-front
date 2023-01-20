import { ReactComponent as IconForLessonCard } from 'Icons/IconForLessonCard.svg';
import LevelDifficulty from 'Components/UI-KIT/Atoms/LevelDificulty';
import * as ST from './styled';

const LessonView = () => (
  <ST.LessonView>
    <IconForLessonCard />
    <ST.Title>Название урока</ST.Title>
    <ST.WrapperLevelDifficulty>
      <LevelDifficulty />
    </ST.WrapperLevelDifficulty>
    <ST.WrapperInfo>
      <ST.TitleInfo>Описание курса:</ST.TitleInfo>
      <ST.SubTitleInfo>
        Задача организации, в особенности же консультация с широким активом
        требуют определения и уточнения системы обучения кадров, соответствует
        насущным потребностям. Повседневная практика показывает, что сложившаяся
        структура организации требуют от нас анализа дальнейших направлений
        развития.
      </ST.SubTitleInfo>
      <ST.TitleInfo>Информация:</ST.TitleInfo>
      <ST.SubTitleInfo>Уроков: 6</ST.SubTitleInfo>
      <ST.SubTitleInfo>Секции: 2</ST.SubTitleInfo>
      <ST.SubTitleInfo>Студенты: 25</ST.SubTitleInfo>
      <ST.SubTitleInfo>Язык: Руский</ST.SubTitleInfo>
      <ST.TitleInfo>Заметки (доп. описание):</ST.TitleInfo>
      <ST.SubTitleInfo>Язык: Руский</ST.SubTitleInfo>
    </ST.WrapperInfo>
  </ST.LessonView>
);

export default LessonView;
