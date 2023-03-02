import { ITestDTO } from "../../types/test-dto.type";
import { ITestState } from "../../redux/test.slice";
import { QuestionFromDtoServiceArray } from "../../../Question/services/data/question-from-dto.service";

export const TestFromDtoServiceObject = (dto: ITestDTO): ITestState => {
	const { _id, lesson_id, questions, ...other } = dto;

	return {
		...other,
		id: _id,
		questions: questions ? QuestionFromDtoServiceArray(questions) : [],
		lessonId: lesson_id,
	};
};

export const TestFromDtoServiceArray = (dto: ITestDTO[]): ITestState[] => {
	return dto.map((test) => {
		return TestFromDtoServiceObject(test);
	});
};
