import React, { useState } from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import CourseCard from 'Components/UI-KIT/CourseCard';
import AddBlock from 'Components/UI-KIT/AddBlock';
import RoutesList from 'Router/routesList';
import { useGetCoursesQuery } from 'Store/api/course/course.api';
import WrapperRequest from 'Components/WrapperRequest';
import CourseCardProducer from 'Components/UI-KIT/CourseCard/Producer';
import CreateCourse from 'Components/ModalWindows/CreateCourse';
import Modal from 'Components/ModalWindows/WrappersModalWindows/Classic';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: RoutesList.MAIN },
  { id: 2, name: 'Мои курсы', url: RoutesList.COURSES },
];

const Courses = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const result = useGetCoursesQuery('myCourses');
  const { data, isError, isLoading } = result;

  return (
    <ST.Courses>
      <ST.WrapperCourses>
        <WrapperContent header={[...defaultBreadCrumbs]}>
          <ST.Wrapper>
            <WrapperRequest
              isError={isError}
              isLoading={isLoading}
            >
              <>
                <CourseCardProducer onClick={() => setIsOpen(true)} />
                {data &&
                  data.list.map((course) => (
                    <CourseCard
                      key={`Courses-CourseCard-${course.id}`}
                      url={`${RoutesList.PRODUCER_COURSE_ID}${course.id}`}
                      title={course.name}
                      description={course.description}
                      levelDifficulty={course.levelDifficulty}
                      tagsColors={data.tagsColors}
                      tags={course.tags}
                    />
                  ))}
              </>
            </WrapperRequest>
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
      {/*MODAL WINDOW_______________________*/}
      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        title={'Создание курса'}
      >
        <CreateCourse />
      </Modal>
      {/*MODAL WINDOW_______________________*/}
    </ST.Courses>
  );
};

export default Courses;
