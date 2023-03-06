// ПРИМЕР: Тест Id
// URL: /BannerList/id
// METHOD: GET
// AUTH: TRUE

export interface TestIdType {
	id: number;
	name: string;
	description: string;
	status: number;
	countQuestions: number;
	minCountForSuccess: number;
	currentResult: number;
	transitTime: number;
	levelDifficulty: LevelDifficulty;
	rules: Rules[];
	questions: QuestionsType[];
}

export interface QuestionsType {
	id: number;
	name: string;
	answers: AnswersType[];
}

export interface AnswersType {
	id: number;
	name: string;
}

export interface Rules {
	id: number;
	rule: string;
}

export interface LevelDifficulty {
	curren: number;
	max: number;
}
