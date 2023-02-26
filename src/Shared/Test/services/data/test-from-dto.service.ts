import { ITestDTO } from "../../types/test-dto.type";
import { ITestState } from "../../redux/test.slice";
import { OwnerFromDtoServiceObject } from "../../../Owner/services/data/owner-from-dto.service";
import { answerFromDtoServiceArray } from "../../../Answer/services/data/answer-from-dto.service";

export const TestFromDtoServiceObject = (dto: ITestDTO): ITestState => {
	const {
		_id,
		question,
		answers,
		right_answer,
		owner,

		...other
	} = dto;

	return {
		...other,
		id: _id,
		question: question,
		answers: answerFromDtoServiceArray(answers),
		rightAnswer: right_answer,
		owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
	};
};

export const TestFromDtoServiceArray = (dto: ITestDTO[]): ITestState[] => {
	return dto.map((test) => {
		const { _id, question, answers, right_answer, owner, ...other } = test;

		return {
			...other,
			id: _id,
			question: question,
			answers: answerFromDtoServiceArray(answers),
			rightAnswer: right_answer,
			owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
		};
	});
};
