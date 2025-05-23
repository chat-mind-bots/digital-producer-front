import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./Locales/en/translation.json";
import translationRU from "./Locales/ru/translation.json";

export enum Languages {
	EN = "en",
	RU = "ru",
}

const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
};

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "ru",
		debug: true,
		detection: {
			order: ["querystring", "cookie"],
			caches: ["cookie"],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
