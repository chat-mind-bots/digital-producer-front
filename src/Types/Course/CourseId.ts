import { LevelDifficultyType } from 'Components/UI-KIT/Atoms/LevelDificulty';

export type CourseIdType = {
  id: number;
  name: string;
  description: string;
  video: string;
  price: number;
  discount: number;
  oldPrice: number;
  studentsLength: number;
  modulesLength: number;
  lessonsLength: number;
  language: string;
  status: number;
  otherNotes: OtherNoteType[];
  modules: ModuleType[];
};

export type OtherNoteType = {
  id: number;
  name: string;
  value: string;
};

export type ModuleType = {
  id: number;
  name: string;
  lessons: LessonType[];
};

export type LessonType = {
  id: number;
  name: string;
  description: string;
  video: string;
  levelDifficulty: LevelDifficultyType;
};
