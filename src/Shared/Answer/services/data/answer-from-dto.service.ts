import { IAnswersState } from "../../redux/test.slice";
import { IAnswerDTO } from "../../types/test-dto.type";

export const answerFromDtoServiceObject = (dto: IAnswerDTO): IAnswersState => {
	const {
		_id,

		...other
	} = dto;

	return {
		...other,
		id: _id,
	};
};

export const answerFromDtoServiceArray = (
	dto: IAnswerDTO[]
): IAnswersState[] => {
	return dto.map((answer) => {
		const { _id, ...other } = answer;

		return {
			...other,
			id: _id,
		};
	});
};
