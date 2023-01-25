import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import CourseCard from 'Components/UI-KIT/CourseCard';
import AddBlock from 'Components/UI-KIT/AddBlock';
import Colors from 'Colors';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/main' },
  { id: 2, name: 'Мои курсы', url: '/courses' },
];

const Courses = () => (
  <ST.Courses>
    <ST.WrapperCourses>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <CourseCard
            url={'/course/1'}
            title={'Название курса'}
            description={'Подробное описание курса'}
            levelDifficulty={2}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'Дизайн',
                background: Colors.WHITE3,
                color: Colors.GREY1,
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
  </ST.Courses>
);

export default Courses;
