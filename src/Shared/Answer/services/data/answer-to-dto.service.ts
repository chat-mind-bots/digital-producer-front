import { IAnswerState } from "../../redux/answer.slice";
import { IAnswerDTO } from "../../types/answer-dto.type";

export const answerToDtoServiceObject = (state: IAnswerState): IAnswerDTO => {
	const { id, ...other } = state;

	return {
		...other,
		_id: id,
	};
};

export const answerToDtoServiceArray = (
	state: IAnswerState[]
): IAnswerDTO[] => {
	return state.map((answer) => {
		const { id, ...other } = answer;

		return {
			...other,
			_id: id,
		};
	});
};
