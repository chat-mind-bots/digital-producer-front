import { ReactComponent as IconForInsight1 } from '../Icons/IconForInsight1.svg';

// ПРИМЕР: Инсайты из сферы инфопродуктов
// URL: /bannerCarousel
// METHOD: GET
// AUTH: TRUE
const BannerCarousel = {
  name: 'Инсайты из сферы инфопродуктов',
  tagsColors: true,
  cards: [
    {
      id: 1,
      position: 1,
      name: 'Как распределить % между продюсером и экспертом?',
      description:
        'Пишем о том, что самое главное при формировании условий для каждого участника в проекте',
      image: '/',
      urlButton: 'url',
      textButton: '',
      styleButton: 'primary || secondary ',
      tags: [
        { id: 0, name: 'финансы', background: 'sasd' },
        { id: 1, name: 'дизайн', background: 'sasd' },
      ],
    },
  ],
};

export interface RootObject {
  name: string;
  tagsColors: boolean;
  cards: Card[];
}

export interface Card {
  id: number;
  position: number;
  name: string;
  description: string;
  image: string;
  urlButton: string;
  textButton: string;
  styleButton: string;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
  background: string;
}
