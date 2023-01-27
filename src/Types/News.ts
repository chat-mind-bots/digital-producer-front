import { ReactComponent as IconForInsight1 } from '../Icons/IconForInsight1.svg';

// ПРИМЕР: Любой спсок где есть новости (Рекомендованные новости || Новости плтформы  и тд )
// URL: /news
// METHOD: GET
// AUTH: TRUE
export const NewsData: NewsType = {
  count: 0,
  pageCount: 0,
  currentPage: 0,
  data: {
    title: 'Новости платформы',
    tagsColors: true,
    list: [
      {
        id: 1,
        name: 'Продажа и мышление',
        description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
        timeRead: '20',
        date: '',
        image: './',
        tags: [
          { id: 0, name: 'финансы', background: 'red', color: 'white' },
          { id: 1, name: 'дизайн', background: 'blue', color: 'white' },
        ],
      },
      {
        id: 2,
        name: 'Продажа и мышление',
        description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
        timeRead: '20',
        date: '',
        image: './',
        tags: [
          { id: 0, name: 'финансы', background: 'red', color: 'white' },
          { id: 1, name: 'дизайн', background: 'blue', color: 'white' },
        ],
      },
      {
        id: 3,
        name: 'Продажа и мышление',
        description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
        timeRead: '20',
        date: '',
        image: './',
        tags: [
          { id: 0, name: 'финансы', background: 'red', color: 'white' },
          { id: 1, name: 'дизайн', background: 'blue', color: 'white' },
        ],
      },
    ],
  },
};

export interface NewsType {
  count: number;
  pageCount: number;
  currentPage: number;
  data: Data;
}

export interface Data {
  title: string;
  tagsColors: boolean;
  list: ListType[];
}

export interface ListType {
  id: number;
  name: string;
  description: string;
  timeRead: string;
  date: string;
  image: string;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
  background: string;
  color: string;
}
