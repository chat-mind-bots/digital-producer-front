import { ReactComponent as IconForInsight1 } from '../../Icons/IconForInsight1.svg';

// ПРИМЕР: Поиск
// URL: /search?type=('test'|'news')&value='string'
// METHOD: GET
// AUTH: TRUE
const Search = [
  {
    id: 0,
    name: 'Инсайты из сферы инфопродуктов',
    description: '',
  },
];

export interface RootObject {
  id: number;
  name: string;
  description: string;
}
