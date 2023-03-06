import { IQuestionDTO } from "../../types/question-dto.type";
import { IQuestionState } from "../../redux/question.slice";
import { answerToDtoServiceArray } from "../../../Answer/services/data/answer-to-dto.service";

export const QuestionToDtoServiceObject = (
	state: IQuestionState
): IQuestionDTO => {
	const { id, answers, rightAnswer, rightAnswers, isMultiply, ...other } =
		state;

	return {
		...other,
		_id: id,
		right_answer: rightAnswer,
		right_answers: rightAnswers,
		is_multiply: isMultiply,
		answers: answers ? answerToDtoServiceArray(answers) : [],
	};
};

export const QuestionToDtoServiceArray = (
	state: IQuestionState[]
): IQuestionDTO[] => {
	return state.map((test) => {
		return QuestionToDtoServiceObject(test);
	});
};
