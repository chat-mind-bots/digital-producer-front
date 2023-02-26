import { IAnswersState } from "../../redux/test.slice";
import { IAnswerDTO } from "../../types/test-dto.type";

export const answerToDtoServiceObject = (state: IAnswersState): IAnswerDTO => {
	const { id, ...other } = state;

	return {
		...other,
		_id: id,
	};
};

export const answerToDtoServiceArray = (
	state: IAnswersState[]
): IAnswerDTO[] => {
	return state.map((answer) => {
		const { id, ...other } = answer;

		return {
			...other,
			_id: id,
		};
	});
};
