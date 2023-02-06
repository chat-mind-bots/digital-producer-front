// ПРИМЕР: Курс по ID
// URL: /course/ID
// METHOD: GET
// AUTH: TRUE

export interface CourseIdType {
	id: number;
	name: string;
	description: string;
	image: string;
	video: string;
	studentsLength: number;
	modulesLength: number;
	lessonsLength: number;
	isFree: boolean;
	isBought: boolean;
	language: string;
	status: number;
	paymentLink: string;
	lecturers: Lecturer[];
	price: Price;
	levelDifficulty: LevelDifficulty;
	tags: Tag[];
	otherNotes: OtherNote[];
	modules: Module[];
	documents: Document[];
}

export interface Lecturer {
	id: number;
	name: string;
	image: string;
	description: string;
}

export interface Price {
	now: number;
	discount: number;
	old: number;
}

export interface Tag {
	id: number;
	name: string;
	background: string;
}

export interface OtherNote {
	id: number;
	name: string;
	value: string;
}

export interface Module {
	id: number;
	name: string;
	lessons: LessonType[];
}

export interface Document {
	id: number;
	name: string;
	url: string;
	description: string;
}

export interface LevelDifficulty {
	curren: number;
	max: number;
}

export interface LessonType {
	id: number;
	name: string;
	description: string;
	image: string;
	video: string;
	levelDifficulty: LevelDifficulty;
	documents: Document[];
	tests: TestType[];
}

export interface TestType {
	id: number;
	name: string;
	description: string;
	status: number;
	countQuestions: number;
	minCountForSuccess: number;
	currentResult: number;
	transitTime: number;
	levelDifficulty: LevelDifficulty;
}
