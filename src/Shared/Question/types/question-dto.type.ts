import { IAnswerDTO } from "../../Answer/types/answer-dto.type";

export interface IQuestionDTO {
	_id: string;
	name: string;
	description: string;
	question?: string;
	answers: IAnswerDTO[];
	right_answer?: string;
	right_answers?: string[];
	is_multiply?: boolean;
}
