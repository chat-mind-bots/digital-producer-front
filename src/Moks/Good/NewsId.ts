import { ReactComponent as IconForInsight1 } from '../../Icons/IconForInsight1.svg';

// ПРИМЕР: Новость по ID
// URL: /news/ID
// METHOD: GET
// AUTH: TRUE
const NewsId: RootObject = {
  id: 1,
  name: 'Продажа и мышление',
  description: 'Научитесь продавать и запускать инфопродукты в Инстаграм',
  timeRead: '20',
  data: '',
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

export interface RootObject {
  id: number;
  name: string;
  description: string;
  timeRead: string;
  data: string;
  image: string;
  tagsColors: boolean;
  tags: Tag[];
  readAlsoList: ReadAlsoList[];
}

export interface ReadAlsoList {
  id: number;
  name: string;
  description: string;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
  background: string;
  color: string;
}

export interface Tag {
  id: number;
  name: string;
  background: string;
}
