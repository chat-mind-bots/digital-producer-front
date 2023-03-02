import { ITagDTO } from "../../Tag/Types/tag-dto.type";
import { UserRoleEnum } from "../../Auth/types/role.enum";

export interface INewsDTO {
	_id: string;
	name: string;
	description: string;
	time_read?: number;
	role?: UserRoleEnum;
	image: string;
	tags?: ITagDTO[];
	category: string;
	category_id?: string;
	createdAt: string;
	updatedAt: string;
}
