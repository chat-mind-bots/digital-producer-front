import { IAnswerDTO } from "../../Answer/types/test-dto.type";
import { IOwnerDTO } from "../../Owner/types/owner-dto.type";

export interface ITestDTO {
	_id: string;
	name: string;
	description: string;
	question: string;
	answers: IAnswerDTO[];
	right_answer: string;
	owner?: IOwnerDTO;
	createdAt?: string;
	updatedAt?: string;
}
