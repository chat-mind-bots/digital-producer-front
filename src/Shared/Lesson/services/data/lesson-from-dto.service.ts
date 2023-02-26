import { ILessonDTO } from "../../types/lesson-dto.type";
import { ILessonState } from "../../redux/lesson.slice";
import { TestFromDtoServiceArray } from "../../../Test/services/data/test-from-dto.service";
import { OwnerFromDtoServiceObject } from "../../../Owner/services/data/owner-from-dto.service";
import { documentFromDtoServiceArray } from "../../../Document/services/data/document-from-dto.service";

export const lessonFromDtoServiceObject = (dto: ILessonDTO): ILessonState => {
	const {
		_id,
		level_difficulty,
		logic_number,
		documents,
		owner,
		tests,
		...other
	} = dto;

	return {
		...other,
		id: _id,
		levelDifficulty: level_difficulty + 1,
		logicNumber: logic_number,
		documents: documents ? documentFromDtoServiceArray(documents) : [],
		owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
		tests: tests ? TestFromDtoServiceArray(tests) : [],
	};
};

export const lessonFromDtoServiceArray = (
	dto: ILessonDTO[]
): ILessonState[] => {
	return dto.map((lesson) => {
		const {
			_id,
			level_difficulty,
			logic_number,
			documents,
			owner,
			tests,
			...other
		} = lesson;

		return {
			...other,
			id: _id,
			levelDifficulty: level_difficulty + 1,
			logicNumber: logic_number,
			documents: documents ? documentFromDtoServiceArray(documents) : [],
			owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
			tests: tests ? TestFromDtoServiceArray(tests) : [],
		};
	});
};
