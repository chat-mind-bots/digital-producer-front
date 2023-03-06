// ПРИМЕР: Новость по ID
// URL: /news/ID
// METHOD: GET
// AUTH: TRUE

import { ITagState } from "../Shared/Tag/redux/tag.slice";

export interface NewsIdType {
	id: number;
	name: string;
	description: string;
	timeRead: string;
	date: string;
	image: string;
	tagsColors: boolean;
	tags: ITagState[];
	readAlsoList: ReadAlsoList[];
}

export interface ReadAlsoList {
	id: number;
	name: string;
	description: string;
	tags: ITagState[];
}

export interface Tag {
	id: number;
	name: string;
	background: string;
	color: string;
}
