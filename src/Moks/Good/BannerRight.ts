import { ReactComponent as IconForInsight1 } from '../../Icons/IconForInsight1.svg';

// ПРИМЕР: Создайте свой курс
// URL: /BannerRight
// METHOD: GET
// AUTH: TRUE
const BannerRight = {
  id: 1,
  name: 'Новости платформы',
  description: 'Самые последние и актуальные новости и обновления платформы',
  image: '/',
  urlButton: 'url',
  textButton: '',
  styleButton: '',
};

export interface RootObject {
  id: number;
  name: string;
  description: string;
  image: string;
  urlButton: string;
  textButton: string;
  styleButton: string;
}
