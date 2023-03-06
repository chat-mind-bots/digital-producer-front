import { IOwnerDTO } from "../../Owner/types/owner-dto.type";
import { ILessonDTO } from "../../Lesson/types/lesson-dto.type";

export interface IModuleDTO {
	_id?: string;
	name?: string;
	logic_number?: number;
	owner?: IOwnerDTO;
	lessons?: ILessonDTO[];
	createdAt?: string;
	updatedAt?: string;
}
