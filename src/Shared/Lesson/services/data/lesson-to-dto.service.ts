import { ILessonDTO } from "../../types/lesson-dto.type";
import { ILessonState } from "../../redux/lesson.slice";
import { documentToDtoServiceArray } from "../../../Document/services/data/document-to-dto.service";
import { OwnerToDtoServiceObject } from "../../../Owner/services/data/owner-to-dto.service";
import { TestToDtoServiceObject } from "../../../Test/services/data/test-to-dto.service";

export const lessonToDtoServiceObject = (state: ILessonState): ILessonDTO => {
	const { id, levelDifficulty, logicNumber, documents, owner, test, ...other } =
		state;

	return {
		...other,
		_id: id,
		level_difficulty: levelDifficulty - 1,
		logic_number: logicNumber,
		documents: documents ? documentToDtoServiceArray(documents) : [],
		owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
		test: test ? TestToDtoServiceObject(test) : undefined,
	};
};

export const lessonToDtoServiceArray = (
	state: ILessonState[]
): ILessonDTO[] => {
	return state.map((lesson) => {
		return lessonToDtoServiceObject(lesson);
	});
};
