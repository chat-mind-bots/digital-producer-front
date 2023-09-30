import { ISubCategoryDTO } from "../../SubCategory/types/subCategory-dto.type";

export interface ICategoryDTO {
	_id: string;
	title: string;
	tags_color: string;
	createdAt: string;
	updatedAt: string;
	sub_categories?: ISubCategoryDTO[];
}
