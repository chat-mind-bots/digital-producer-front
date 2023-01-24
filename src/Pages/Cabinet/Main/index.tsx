import React from 'react';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsBanner from 'Components/UI-KIT/NewsBanner';
import CourseCard from 'Components/UI-KIT/CourseCard';
import Insights from 'Components/UI-KIT/Insights';
import * as ST from './styled';

const Main = () => (
  <ST.Main>
    <NewsBanner
      title={'Новости платформы'}
      description={
        'Самые последние и актуальные новости и обновления платформы'
      }
      textButton={'Читать статью'}
      urlButton={''}
      styleButton={''}
    />
    <ST.WrapperMain>
      <Insights
        title={'Новости и инсайты из сферы инфопродуктов'}
        textButton={'Читать статью'}
        urlButton={''}
        styleButton={''}
      />
      <WrapperContent header={'Рекомендованные курсы'}>
        <ST.Wrapper>
          <CourseCard
            nameTag={'дизайн'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
          />
          <CourseCard
            nameTag={'дизайн'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
          />
          <CourseCard
            nameTag={'дизайн'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
          />
          <CourseCard
            nameTag={'дизайн'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
          />
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperMain>
    <ST.WrapperAddBlock>
      <AddBlock
        title={'Создайте свой курс'}
        description={
          'Станьте продюсером своего курса и проводите уроки на платформе'
        }
        textButton={'Создать курс'}
        urlButton={''}
        styleButton={''}
      />
    </ST.WrapperAddBlock>
  </ST.Main>
);

export default Main;
