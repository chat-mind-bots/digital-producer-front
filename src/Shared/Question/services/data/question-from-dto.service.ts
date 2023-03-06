import { IQuestionDTO } from "../../types/question-dto.type";
import { IQuestionState } from "../../redux/question.slice";
import { answerFromDtoServiceArray } from "../../../Answer/services/data/answer-from-dto.service";

export const QuestionFromDtoServiceObject = (
	dto: IQuestionDTO
): IQuestionState => {
	const { _id, answers, right_answer, right_answers, is_multiply, ...other } =
		dto;

	return {
		...other,
		id: _id,
		rightAnswer: right_answer,
		rightAnswers: right_answers,
		isMultiply: is_multiply,
		answers: answers ? answerFromDtoServiceArray(answers) : [],
	};
};

export const QuestionFromDtoServiceArray = (
	dto: IQuestionDTO[]
): IQuestionState[] => {
	return dto.map((test) => {
		return QuestionFromDtoServiceObject(test);
	});
};
