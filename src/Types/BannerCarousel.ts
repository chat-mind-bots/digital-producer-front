// ПРИМЕР: Инсайты из сферы инфопродуктов
// URL: /bannerCarousel
// METHOD: GET
// AUTH: TRUE

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
