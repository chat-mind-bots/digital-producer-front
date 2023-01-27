import { ReactComponent as IconForInsight1 } from '../Icons/IconForInsight1.svg';

// ПРИМЕР: Курс по ID
// URL: /course/ID
// METHOD: GET
// AUTH: TRUE
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

export interface CourseIdType {
  id: number;
  name: string;
  description: string;
  image: string;
  video: string;
  studentsLength: number;
  modulesLength: number;
  lessonsLength: number;
  isFree: boolean;
  language: string;
  status: number;
  paymentLink: string;
  lecturers: Lecturer[];
  price: Price;
  levelDifficulty: LevelDifficulty;
  tags: Tag[];
  otherNotes: OtherNote[];
  modules: Module[];
  documents: Document[];
}

export interface Lecturer {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Price {
  now: number;
  discount: number;
  old: number;
}

export interface LevelDifficulty {
  curren: number;
  max: number;
}

export interface Tag {
  id: number;
  name: string;
  background: string;
}

export interface OtherNote {
  id: number;
  name: string;
  value: string;
}

export interface Module {
  id: number;
  name: string;
  lessons: LessonType[];
}

export interface Document {
  id: number;
  name: string;
  url: string;
  description: string;
}

export interface LevelDifficulty {
  curren: number;
  max: number;
}

export interface LessonType {
  id: number;
  name: string;
  description: string;
  image: string;
  video: string;
  levelDifficulty: LevelDifficulty;
  documents: Document[];
  tests: TestType[];
}

export interface TestType {
  id: number;
  name: string;
  description: string;
  status: number;
  countQuestions: number;
  minCountForSuccess: number;
  currentResult: number;
  transitTime: number;
  levelDifficulty: LevelDifficulty;
}
