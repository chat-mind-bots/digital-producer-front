import { ITestDTO } from "../../types/test-dto.type";
import { ITestState } from "../../redux/test.slice";
import { QuestionToDtoServiceArray } from "../../../Question/services/data/question-to-dto.service";

export const TestToDtoServiceObject = (state: ITestState): ITestDTO => {
	const { id, lessonId, questions, ...other } = state;

	return {
		...other,
		_id: id,
		questions: questions ? QuestionToDtoServiceArray(questions) : [],
		lesson_id: lessonId,
	};
};

export const TestToDtoServiceArray = (state: ITestState[]): ITestDTO[] => {
	return state.map((test) => {
		return TestToDtoServiceObject(test);
	});
};
