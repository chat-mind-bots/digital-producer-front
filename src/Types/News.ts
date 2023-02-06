// ПРИМЕР: Любой спсок где есть новости (Рекомендованные новости || Новости плтформы  и тд )
// URL: /news
// METHOD: GET
// AUTH: TRUE

export interface NewsType {
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
