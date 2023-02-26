import { ILessonDTO } from "../../types/lesson-dto.type";
import { ILessonState } from "../../redux/lesson.slice";
import { documentToDtoServiceArray } from "../../../Document/services/data/document-to-dto.service";
import { OwnerToDtoServiceObject } from "../../../Owner/services/data/owner-to-dto.service";
import { TestToDtoServiceArray } from "../../../Test/services/data/test-to-dto.service";

export const lessonToDtoServiceObject = (state: ILessonState): ILessonDTO => {
	const {
		id,
		levelDifficulty,
		logicNumber,
		documents,
		owner,
		tests,
		...other
	} = state;

	return {
		...other,

		_id: id,
		level_difficulty: levelDifficulty - 1,
		logic_number: logicNumber,
		documents: documents ? documentToDtoServiceArray(documents) : [],
		owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
		tests: tests ? TestToDtoServiceArray(tests) : [],
	};
};

export const lessonToDtoServiceArray = (
	state: ILessonState[]
): ILessonDTO[] => {
	return state.map((lesson) => {
		const {
			id,
			levelDifficulty,
			logicNumber,
			documents,
			owner,
			tests,
			...other
		} = lesson;

		return {
			...other,

			_id: id,
			level_difficulty: levelDifficulty - 1,
			logic_number: logicNumber,
			documents: documents ? documentToDtoServiceArray(documents) : [],
			owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
			tests: tests ? TestToDtoServiceArray(tests) : [],
		};
	});
};
