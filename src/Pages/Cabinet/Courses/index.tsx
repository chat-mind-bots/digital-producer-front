import React, { FC } from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import CourseCard from 'Components/UI-KIT/CourseCard';
import AddBlock from 'Components/UI-KIT/AddBlock';
import RoutesList from 'Router/routesList';
import { DataCourse } from 'Types/Course';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: RoutesList.MAIN },
  { id: 2, name: 'Мои курсы', url: RoutesList.COURSES },
];

type CoursesProps = {
  data: DataCourse;
};

const Courses: FC<CoursesProps> = ({ data }) => (
  <ST.Courses>
    <ST.WrapperCourses>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          {data.list.map((course) => (
            <CourseCard
              key={`Courses-CourseCard-${course.id}`}
              url={`${RoutesList.COURSE_ID}${course.id}`}
              title={course.name}
              description={course.description}
              levelDifficulty={course.levelDifficulty}
              tagsColors={data.tagsColors}
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
  </ST.Courses>
);

export default Courses;
