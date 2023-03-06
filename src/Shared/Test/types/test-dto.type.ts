import { IQuestionDTO } from "../../Question/types/question-dto.type";

export interface ITestDTO {
	_id: string;
	name: string;
	description: string;
	duration?: number;
	lesson_id: string;
	questions?: IQuestionDTO[];
}
