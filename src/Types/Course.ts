import { ReactComponent as IconForInsight1 } from '../Icons/IconForInsight1.svg';

// ПРИМЕР: Любой спсок где есть курсы (Рекомендованные курсы || Мои курсы || Бесплатные курсы || Курсы для новичковв и тд )
// URL: /course?type=('recommended'|'my')
// METHOD: GET
// AUTH: TRUE
export const CoursesData: CoursesType = {
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

export interface CoursesType {
  count: number;
  pageCount: number;
  currentPage: number;
  data: DataCourse;
}

export interface DataCourse {
  title: string;
  tagsColors: boolean;
  list: Course[];
}

export interface Course {
  id: number;
  name: string;
  description: string;
  levelDifficulty: LevelDifficulty;
  image: string;
  isFree: boolean;
  tags: Tag[];
}

export interface LevelDifficulty {
  curren: number;
  max: number;
}

export interface Tag {
  id: number;
  name: string;
  background: string;
  color: string;
}
