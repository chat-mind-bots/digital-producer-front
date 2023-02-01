import { CoursesType } from 'Types/Course';
import ServerResponse from 'Types/ServerResponse/pagination';
import { CourseIdType } from 'Types/CourseId';

export const CoursesData: ServerResponse<CoursesType> = {
  count: 0,
  pageCount: 0,
  currentPage: 0,
  data: {
    title: 'Рекомендованные курсы',
    tagsColors: true,
    list: [
      {
        id: 1,
        name: 'Продажа и мышление',
        description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
        levelDifficulty: {
          curren: 2,
          max: 3,
        },
        image: './',
        isFree: true,
        tags: [
          { id: 0, name: 'финансы', background: 'red', color: 'white' },
          { id: 1, name: 'дизайн', background: 'blue', color: 'white' },
        ],
      },
    ],
  },
};

export const CourseIdData: CourseIdType = {
  id: 1,
  name: 'Продажа и мышление',
  description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
  image: './',
  video: '/',
  studentsLength: 25,
  modulesLength: 13,
  lessonsLength: 23,
  isFree: true,
  isBought: false,
  language: 'Русский',
  status: 200,
  paymentLink: '',
  lecturers: [
    {
      id: 1,
      name: 'Сергей',
      image: '',
      description: 'Мастер над монетой',
    },
    {
      id: 2,
      name: 'Марина',
      image: '',
      description: 'Мастер чила ',
    },
  ],
  price: {
    now: 2000,
    discount: 0,
    old: 3000,
  },
  levelDifficulty: {
    curren: 2,
    max: 3,
  },
  tags: [
    { id: 0, name: 'финансы', background: 'red' },
    { id: 1, name: 'дизайн', background: 'blue' },
  ],
  otherNotes: [
    { id: 1, name: 'string', value: 'string' },
    { id: 2, name: 'string', value: 'string' },
  ],
  documents: [
    {
      id: 1,
      name: 'Документ 1',
      description: 'Описание дока ',
      url: '',
    },
    {
      id: 2,
      name: 'Документ 2',
      description: 'Описание дока ',
      url: '',
    },
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
          image: './',
          video: 'string',
          levelDifficulty: {
            curren: 2,
            max: 3,
          },
          documents: [
            {
              id: 1,
              name: 'Документ 1',
              description: 'Описание дока ',
              url: '',
            },
            {
              id: 2,
              name: 'Документ 2',
              description: 'Описание дока ',
              url: '',
            },
          ],
          tests: [
            {
              id: 1,
              name: 'Название курса',
              description: 'Описание курса',
              status: 200,
              countQuestions: 100,
              minCountForSuccess: 60,
              currentResult: 65,
              transitTime: 60,
              levelDifficulty: {
                curren: 2,
                max: 3,
              },
            },
            {
              id: 2,
              name: 'Название курса',
              description: 'Описание курса',
              status: 200,
              countQuestions: 100,
              minCountForSuccess: 60,
              currentResult: 65,
              transitTime: 60,
              levelDifficulty: {
                curren: 2,
                max: 3,
              },
            },
          ],
        },
      ],
    },
  ],
};
