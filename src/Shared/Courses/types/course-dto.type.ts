import { INoteState } from "../../Note/redux/note.slice";
import { IPriceState } from "../../Price/redux/price.slice";
import { ITagDTO } from "../../Tag/Types/tag-dto.type";
import { IDocumentDTO } from "../../Document/types/document-dto.type";
import { IOwnerDTO } from "../../Owner/types/owner-dto.type";
import { IModuleDTO } from "../../Module/types/module-dto.type";

export interface ICourseDTO {
	_id: string;
	name: string;
	description: string;
	image: string;
	video: string;
	is_enrolled: boolean;
	is_free: boolean;
	language: string;
	status: number;
	price?: IPriceState;
	level_difficulty: number;
	logic_number?: number;
	tags: ITagDTO[];
	notes: INoteState[];
	documents: IDocumentDTO[];
	owner?: IOwnerDTO;
	sub_category: string;
	modules: IModuleDTO[];
	createdAt: string;
	updatedAt: string;
}
