// ПРИМЕР: Новость по ID
// URL: /news/ID
// METHOD: GET
// AUTH: TRUE

export interface NewsIdType {
  id: number;
  name: string;
  description: string;
  timeRead: string;
  date: string;
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
