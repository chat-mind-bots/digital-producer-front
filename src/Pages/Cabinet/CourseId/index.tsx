import React, { useEffect, useState } from 'react';
import Accordion, {
  AccordionType,
  HandleClickType,
} from 'Components/UI-KIT/Accordion';
import LessonView from 'Components/UI-KIT/LessonView';
import WrapperContent from 'Components/WrapperContent';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import { CourseIdType, LessonType } from 'Types/Course/CourseId';
import * as ST from './styled';
import LectorCard from 'Components/UI-KIT/LectorCard';
import TestCard from 'Components/UI-KIT/TestCard';
import DocumentCard from 'Components/UI-KIT/DocumentCard';
import { ReactComponent as IconForPlatformNewsCard } from 'Icons/IconForPlatformNewsCard.svg';

const data: CourseIdType = {
  id: 1,
  name: '«Вирусная» игра сыграна',
  description: 'Описание курса ',
  video: '/',
  price: 2500,
  discount: 0,
  oldPrice: 2500,
  studentsLength: 25,
  modulesLength: 13,
  lessonsLength: 23,
  language: 'Русский',
  status: 200,
  otherNotes: [
    { id: 1, name: 'Язык', value: 'Русский' },
    { id: 2, name: 'Язык', value: 'Русский' },
  ],
  modules: [
    {
      id: 1,
      name: 'Мышление успешного человека',
      lessons: [
        {
          id: 1,
          name: 'Работа со страхами',
          description:
            '  Задача организации, в особенности же консультация с широким активом\n' +
            '        требуют определения и уточнения системы обучения кадров, соответствует\n' +
            '        насущным потребностям. Повседневная практика показывает, что сложившаяся\n' +
            '        структура организации требуют от нас анализа дальнейших направлений\n' +
            '        развития.',
          video: 'string',
          levelDifficulty: 1,
        },
        {
          id: 2,
          name: 'Синдром самозванца',
          description:
            '  Задача организации, в особенности же консультация с широким активом\n' +
            '        требуют определения и уточнения системы обучения кадров, соответствует\n',
          video: 'string',
          levelDifficulty: 2,
        },
      ],
    },
    {
      id: 2,
      name: 'Мышление успешного человека',
      lessons: [
        {
          id: 3,
          name: 'Работа со страхами',
          description:
            '  Задача организации, в особенности же консультация с широким активом\n' +
            '        требуют определения и уточнения системы обучения кадров, соответствует\n' +
            '        насущным потребностям. Повседневная практика показывает, что сложившаяся\n' +
            '        структура организации требуют от нас анализа дальнейших направлений\n' +
            '        развития.',
          video: 'string',
          levelDifficulty: 3,
        },
        {
          id: 4,
          name: 'Практика "контроль над мыслями',
          description:
            '  Задача организации, в особенности же консультация с широким активом\n' +
            '        требуют определения и уточнения системы обучения кадров, соответствует\n',
          video: 'string',
          levelDifficulty: 1,
        },
      ],
    },
  ],
};

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/main' },
  { id: 2, name: 'Мои курсы', url: '/courses' },
];

const CourseId = () => {
  const [state, setState] = useState({
    module: 1,
    lesson: 1,
  });
  const [currentLesson, setCurrentLesson] = useState<LessonType>();
  const [accordion, setAccordion] = useState<AccordionType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const breadCrumbs: BreadCrumbsArrayType[] = [
    { id: 3, name: data.name, url: '/course/1' },
    {
      id: 4,
      name: currentLesson ? currentLesson.name : '',
      url: '/main',
    },
  ];

  useEffect(() => {
    (() => {
      let currentLesson: LessonType | undefined = undefined;
      data.modules.forEach((module) => {
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
      const arrayAccordion: AccordionType[] = data.modules.map((module) => {
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
            <ST.CourseId>
              {currentLesson && (
                <>
                  <LessonView
                    name={currentLesson.name}
                    video={currentLesson.video}
                    levelDifficulty={currentLesson.levelDifficulty}
                    description={currentLesson.description}
                    studentsLength={data.studentsLength}
                    language={data.language}
                    otherNotes={data.otherNotes}
                    lessonsLength={data.lessonsLength}
                    modulesLength={data.modulesLength}
                    isLoading={loading}
                  />
                </>
              )}
            </ST.CourseId>
          </ST.Content>
        </WrapperContent>
        <WrapperContent header={'Лекторы'}>
          <ST.Content>
            <LectorCard
              name={'Станислав Евгеньевич Ж'}
              description={'Самый лушчий'}
              img={<IconForPlatformNewsCard />}
            />
            <LectorCard
              name={'Станислав Евгеньевич Ж'}
              description={'Самый лушчий'}
              img={<IconForPlatformNewsCard />}
            />
            <LectorCard
              name={'Станислав Евгеньевич Ж'}
              description={'Самый лушчий'}
              img={<IconForPlatformNewsCard />}
            />
          </ST.Content>
        </WrapperContent>
        <WrapperContent header={'Тесты'}>
          <ST.Content>
            <TestCard
              description={'Тест прохождение iq по Шнитке Валилию Петровичу'}
              title={'iQ Тест'}
              levelDifficulty={2}
              time={'Время для прохождения: 2 часа'}
              url={'/test/:1'}
              needCount={70}
              maxCount={100}
              count={30}
              status={true}
            />

            <TestCard
              description={'Тест прохождение iq по Шнитке Валилию Петровичу'}
              title={'iQ Тест'}
              levelDifficulty={1}
              time={'Время для прохождения: 2 часа'}
              url={'/test/:1'}
              needCount={70}
              maxCount={100}
              count={30}
              status={true}
            />
          </ST.Content>
        </WrapperContent>
        <WrapperContent header={'Документы'}>
          <ST.Content>
            <DocumentCard
              name={'Модуль 2 урок 2'}
              description={'Тест прохождение iq по Шнитке Валилию Петровичу'}
              url={'/document/1'}
            />
            <DocumentCard
              name={'Модуль 2 урок 2'}
              description={'Тест прохождение iq по Шнитке Валилию Петровичу'}
              url={'/document/2'}
            />
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
