import { IAnswerState } from "../../redux/answer.slice";
import { IAnswerDTO } from "../../types/answer-dto.type";

export const answerFromDtoServiceObject = (dto: IAnswerDTO): IAnswerState => {
	const { _id, ...other } = dto;

	return {
		...other,
		id: _id,
	};
};

export const answerFromDtoServiceArray = (
	dto: IAnswerDTO[]
): IAnswerState[] => {
	return dto.map((answer) => {
		return answerFromDtoServiceObject(answer);
	});
};
