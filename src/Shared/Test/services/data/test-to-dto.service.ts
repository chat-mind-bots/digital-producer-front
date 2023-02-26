import { ITestDTO } from "../../types/test-dto.type";
import { ITestState } from "../../redux/test.slice";
import { OwnerToDtoServiceObject } from "../../../Owner/services/data/owner-to-dto.service";
import { answerToDtoServiceArray } from "../../../Answer/services/data/answer-to-dto.service";

export const TestToDtoServiceObject = (state: ITestState): ITestDTO => {
	const {
		id,
		question,
		answers,
		rightAnswer,
		owner,

		...other
	} = state;

	return {
		...other,
		_id: id,
		question: question,
		answers: answers ? answerToDtoServiceArray(answers) : [],
		right_answer: rightAnswer,
		owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
	};
};

export const TestToDtoServiceArray = (state: ITestState[]): ITestDTO[] => {
	return state.map((test) => {
		const { id, question, answers, rightAnswer, owner, ...other } = test;

		return {
			...other,
			_id: id,
			question: question,
			answers: answers ? answerToDtoServiceArray(answers) : [],
			right_answer: rightAnswer,
			owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
		};
	});
};
