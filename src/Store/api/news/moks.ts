import { NewsType } from 'Types/News';
import ServerResponse from 'Types/ServerResponse/pagination';
import { NewsIdType } from 'Types/NewsId';

export const NewsData: ServerResponse<NewsType> = {
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

export const NewsIdData: NewsIdType = {
  id: 1,
  name: 'Продажа и мышление',
  description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
  timeRead: '20',
  date: '',
  image: './',
  tagsColors: true,
  tags: [
    { id: 0, name: 'финансы', background: 'red', color: 'white' },
    { id: 1, name: 'дизайн', background: 'blue', color: 'white' },
  ],
  readAlsoList: [
    {
      id: 1,
      name: 'Продажа и мышление',
      description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
      tags: [
        { id: 0, name: 'финансы', background: 'red', color: 'white' },
        { id: 1, name: 'дизайн', background: 'blue', color: 'white' },
      ],
    },
  ],
};
