import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import CourseCard from 'Components/UI-KIT/CourseCard';
import AddBlock from 'Components/UI-KIT/AddBlock';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/Main' },
  { id: 2, name: 'Мои курсы', url: '/myCourses' },
];

const Courses = () => (
  <ST.Courses>
    <ST.WrapperCourses>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperCourses>
    <ST.WrapperAddBlock>
      <AddBlock />
    </ST.WrapperAddBlock>
  </ST.Courses>
);

export default Courses;
