import React, { FC, useEffect, useState } from 'react';
import Accordion, {
  AccordionType,
  HandleClickType,
} from 'Components/UI-KIT/Accordion';
import LessonView from 'Components/UI-KIT/LessonView';
import WrapperContent from 'Components/WrapperContent';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import LectorCard from 'Components/UI-KIT/LectorCard';
import TestCard from 'Components/UI-KIT/TestCard';
import DocumentCard from 'Components/UI-KIT/DocumentCard';
import { ReactComponent as IconForPlatformNewsCard } from 'Icons/IconForPlatformNewsCard.svg';
import RoutesList from 'Router/routesList';
import { CourseIdType, LessonType } from 'Types/CourseId';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: RoutesList.MAIN },
  { id: 2, name: 'Мои курсы', url: RoutesList.COURSES },
];

const CourseId: FC<CourseIdType> = ({
  id,
  name,
  description,
  image,
  video,
  studentsLength,
  modulesLength,
  lessonsLength,
  isFree,
  language,
  status,
  paymentLink,
  lecturers,
  price,
  levelDifficulty,
  tags,
  otherNotes,
  modules,
  documents,
}) => {
  const [state, setState] = useState({
    module: 1,
    lesson: 1,
  });
  const [currentLesson, setCurrentLesson] = useState<LessonType>();
  const [accordion, setAccordion] = useState<AccordionType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const breadCrumbs: BreadCrumbsArrayType[] = [
    { id: 3, name: name, url: `${RoutesList.COURSE_ID}${id}` },
    {
      id: 4,
      name: currentLesson ? currentLesson.name : '',
      url: RoutesList.MAIN,
    },
  ];

  useEffect(() => {
    (() => {
      let currentLesson: LessonType | undefined = undefined;
      modules.forEach((module) => {
        if (module.id === state.module) {
          module.lessons.forEach((lesson) => {
            if (lesson.id === state.lesson) {
              currentLesson = lesson;
            }
          });
        }
      });
      currentLesson && setCurrentLesson(currentLesson);
    })();
    (() => {
      const arrayAccordion: AccordionType[] = modules.map((module) => {
        return {
          id: module.id,
          name: module.name,
          items: module.lessons.map((lesson) => {
            return {
              id: lesson.id,
              name: lesson.name,
              isActive:
                module.id === state.module && lesson.id === state.lesson,
            };
          }),
        };
      });
      setAccordion(arrayAccordion);
    })();
  }, [state]);
  const handleClickAccordion = ({ moduleId, itemId }: HandleClickType) => {
    setLoading(true);
    const delay = 3000;
    setTimeout(() => {
      setState({
        module: moduleId,
        lesson: itemId,
      });
      setLoading(false);
    }, delay);
  };

  return (
    <ST.Wrapper>
      <ST.WrapperInfo>
        <WrapperContent header={[...defaultBreadCrumbs, ...breadCrumbs]}>
          <ST.Content>
            {currentLesson && (
              <>
                <LessonView
                  id={currentLesson.id}
                  name={currentLesson ? currentLesson.name : name}
                  video={currentLesson ? currentLesson.video : video}
                  levelDifficulty={
                    currentLesson
                      ? currentLesson.levelDifficulty
                      : levelDifficulty
                  }
                  description={
                    currentLesson ? currentLesson.description : description
                  }
                  studentsLength={studentsLength}
                  language={language}
                  otherNotes={otherNotes}
                  lessonsLength={lessonsLength}
                  modulesLength={modulesLength}
                  isLoading={loading}
                  image={currentLesson ? currentLesson.image : image}
                  documents={
                    currentLesson ? currentLesson.documents : documents
                  }
                  tests={currentLesson.tests}
                />
              </>
            )}
          </ST.Content>
        </WrapperContent>
        <WrapperContent header={'Лекторы'}>
          <ST.Content>
            {lecturers.map((lecture) => (
              <LectorCard
                name={lecture.name}
                description={lecture.description}
                img={<IconForPlatformNewsCard />}
              />
            ))}
          </ST.Content>
        </WrapperContent>
        {currentLesson?.tests && (
          <WrapperContent header={'Тесты'}>
            <ST.Content>
              {currentLesson?.tests.map((test) => (
                <TestCard
                  id={test.id}
                  description={test.description}
                  name={test.name}
                  levelDifficulty={test.levelDifficulty}
                  transitTime={test.transitTime}
                  minCountForSuccess={test.minCountForSuccess}
                  countQuestions={test.countQuestions}
                  currentResult={test.currentResult}
                  status={test.status}
                />
              ))}
            </ST.Content>
          </WrapperContent>
        )}
        <WrapperContent header={'Документы'}>
          <ST.Content>
            {documents
              ? documents.map((document) => (
                  <DocumentCard
                    name={document.name}
                    description={document.description}
                    url={document.url}
                  />
                ))
              : currentLesson?.documents.map((document) => (
                  <DocumentCard
                    name={document.name}
                    description={document.description}
                    url={document.url}
                  />
                ))}
          </ST.Content>
        </WrapperContent>
      </ST.WrapperInfo>
      {accordion && (
        <Accordion
          array={accordion}
          handleClick={handleClickAccordion}
        />
      )}
    </ST.Wrapper>
  );
};

export default CourseId;
