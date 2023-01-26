import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import CourseCard from 'Components/UI-KIT/CourseCard';
import AddBlock from 'Components/UI-KIT/AddBlock';
import Colors from 'Colors';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/main' },
  { id: 2, name: 'Курсы Meta', url: '/metaCourses' },
];

const MetaCourses = () => (
  <ST.MetaCourses>
    <ST.WrapperCourses>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={true}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.RED,
                color: Colors.WHITE,
              },
            ]}
          />
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={true}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.BLUE,
                color: Colors.WHITE,
              },
            ]}
          />
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={true}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.ORANGE,
                color: Colors.WHITE,
              },
            ]}
          />
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={true}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.SKYBLUE,
                color: Colors.BLACK1,
              },
            ]}
          />
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperCourses>
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
  </ST.MetaCourses>
);

export default MetaCourses;
