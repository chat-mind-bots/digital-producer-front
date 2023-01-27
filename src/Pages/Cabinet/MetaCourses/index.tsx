import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import CourseCard from 'Components/UI-KIT/CourseCard';
import AddBlock from 'Components/UI-KIT/AddBlock';
import RoutesList from 'Router/routesList';
import { CoursesData } from 'Types/Course';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: RoutesList.MAIN },
  { id: 2, name: 'Курсы Meta', url: RoutesList.META_COURSES },
];

const MetaCourses = () => (
  <ST.MetaCourses>
    <ST.WrapperCourses>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          {CoursesData.data.list.map((course) => (
            <CourseCard
              key={`MetaCourses-CourseCard-${course.id}`}
              url={`${RoutesList.COURSE_ID}${course.id}`}
              title={course.name}
              description={course.description}
              levelDifficulty={course.levelDifficulty}
              tagsColors={CoursesData.data.tagsColors}
              tags={course.tags}
            />
          ))}
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperCourses>
    <AddBlock
      title={'Создайте свой курс'}
      description={
        'Станьте продюсером своего курса и проводите уроки на платформе'
      }
      textButton={'Создать курс'}
      urlButton={''}
      styleButton={''}
    />
  </ST.MetaCourses>
);

export default MetaCourses;
