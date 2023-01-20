import { useEffect, useState } from 'react';
import { ReactComponent as IconForLessonCard } from 'Icons/IconForLessonCard.svg';
import LevelDifficulty, {
  LevelDifficultyType,
} from 'Components/UI-KIT/Atoms/LevelDificulty';
import * as ST from './styled';

const LessonView = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ST.LessonView>
      <ST.WrapperVideo isLoading={loading}>
        <ST.Loader />
        <IconForLessonCard />
      </ST.WrapperVideo>
      <ST.Title
        isLoading={loading}
        onClick={() => setLoading(!loading)}
      >
        Название урока
      </ST.Title>
      <ST.WrapperLevelDifficulty>
        {loading ? <LoadingLevelDifficulty /> : <LevelDifficulty count={1} />}
      </ST.WrapperLevelDifficulty>
      <ST.WrapperInfo>
        <ST.TitleInfo>Описание курса:</ST.TitleInfo>
        <ST.SubTitleInfo
          delay={0.1}
          isLoading={loading}
        >
          Задача организации, в особенности же консультация с широким активом
          требуют определения и уточнения системы обучения кадров, соответствует
          насущным потребностям. Повседневная практика показывает, что
          сложившаяся структура организации требуют от нас анализа дальнейших
          направлений развития.
        </ST.SubTitleInfo>
        <ST.TitleInfo>Информация:</ST.TitleInfo>
        <ST.WrapperSubTitle>
          <ST.SubTitleInfo
            delay={0.2}
            isLoading={loading}
          >
            Уроков: 6
          </ST.SubTitleInfo>
        </ST.WrapperSubTitle>
        <ST.WrapperSubTitle>
          <ST.SubTitleInfo
            delay={0.3}
            isLoading={loading}
          >
            Секции: 2
          </ST.SubTitleInfo>
        </ST.WrapperSubTitle>
        <ST.WrapperSubTitle>
          <ST.SubTitleInfo
            delay={0.4}
            isLoading={loading}
          >
            Студенты: 25
          </ST.SubTitleInfo>
        </ST.WrapperSubTitle>
        <ST.WrapperSubTitle>
          <ST.SubTitleInfo
            delay={0.5}
            isLoading={loading}
          >
            Язык: Руский
          </ST.SubTitleInfo>
        </ST.WrapperSubTitle>
        <ST.TitleInfo>Заметки (доп. описание):</ST.TitleInfo>
        <ST.WrapperSubTitle>
          <ST.SubTitleInfo
            delay={0.6}
            isLoading={loading}
          >
            Язык: Руский
          </ST.SubTitleInfo>
        </ST.WrapperSubTitle>
      </ST.WrapperInfo>
    </ST.LessonView>
  );
};

const LoadingLevelDifficulty = () => {
  const [count, setCount] = useState<LevelDifficultyType>(1);

  useEffect(() => {
    const timerId = setInterval(
      () => setCount((count === 3 ? 0 : count + 1) as LevelDifficultyType),
      500
    );
    return () => clearInterval(timerId);
  });

  return <LevelDifficulty count={count} />;
};

export default LessonView;
