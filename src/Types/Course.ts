export interface CoursesType {
	title: string;
	tagsColors: boolean;
	list: Course[];
}

export interface Course {
	id: number;
	name: string;
	description: string;
	levelDifficulty: LevelDifficulty;
	image: string;
	isFree: boolean;
	tags: Tag[];
}

export interface LevelDifficulty {
	curren: number;
	max: number;
}

export interface Tag {
	id: number;
	name: string;
	background: string;
	color: string;
}
