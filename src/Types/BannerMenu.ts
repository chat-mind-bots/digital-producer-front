import { ReactComponent as IconForInsight1 } from '../Icons/IconForInsight1.svg';

// ПРИМЕР: Курсы платфромы слева
// URL: /BannerMenu
// METHOD: GET
// AUTH: TRUE
const BannerMenu = {
  id: 1,
  image: '/',
  urlButton: 'url',
  textButton: '',
  styleButton: '',
};

export interface RootObject {
  id: number;
  image: string;
  urlButton: string;
  textButton: string;
  styleButton: string;
}
