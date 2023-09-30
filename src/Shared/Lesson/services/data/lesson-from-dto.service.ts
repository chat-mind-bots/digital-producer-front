import { ILessonDTO } from "../../types/lesson-dto.type";
import { ILessonState } from "../../redux/lesson.slice";
import { TestFromDtoServiceObject } from "../../../Test/services/data/test-from-dto.service";
import { OwnerFromDtoServiceObject } from "../../../Owner/services/data/owner-from-dto.service";
import { documentFromDtoServiceArray } from "../../../Document/services/data/document-from-dto.service";

export const lessonFromDtoServiceObject = (dto: ILessonDTO): ILessonState => {
	const {
		_id,
		level_difficulty,
		logic_number,
		documents,
		owner,
		test,
		total_points,
		total_questions,
		test_status,
		...other
	} = dto;

	return {
		...other,
		totalPoints: total_points,
		totalQuestions: total_questions,
		testStatus: test_status,
		id: _id,
		levelDifficulty: level_difficulty + 1,
		logicNumber: logic_number,
		documents: documents ? documentFromDtoServiceArray(documents) : [],
		owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
		test: test ? TestFromDtoServiceObject(test) : undefined,
	};
};

export const lessonFromDtoServiceArray = (
	dto: ILessonDTO[]
): ILessonState[] => {
	return dto.map((lesson) => {
		return lessonFromDtoServiceObject(lesson);
	});
};
