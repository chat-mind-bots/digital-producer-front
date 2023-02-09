// ПРИМЕР: Создайте свой курс
// URL: /BannerNews
// METHOD: GET
// AUTH: TRUE
// const BannerNews = {
// 	id: 1,
// 	name: "Новости платформы",
// 	description: "Самые последние и актуальные новости и обновления платформы",
// 	image: "/",
// 	urlButton: "url",
// 	textButton: "",
// 	styleButton: "",
// };

export interface RootObject {
	id: number;
	name: string;
	description: string;
	image: string;
	urlButton: string;
	textButton: string;
	styleButton: string;
}
