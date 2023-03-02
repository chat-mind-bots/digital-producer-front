import { IDocumentDTO } from "../../Document/types/document-dto.type";
import { IOwnerDTO } from "../../Owner/types/owner-dto.type";
import { ITestDTO } from "../../Test/types/test-dto.type";

export interface ILessonDTO {
	_id: string;
	name: string;
	description: string;
	image: string;
	video: string;
	level_difficulty: number;
	logic_number?: number;
	documents?: IDocumentDTO[];
	owner?: IOwnerDTO;
	test?: ITestDTO;
	createdAt?: string;
	updatedAt?: string;
}
