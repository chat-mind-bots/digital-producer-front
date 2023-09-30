import { ISubCategoryDTO } from "../../types/subCategory-dto.type";
import { ISubCategoryState } from "../../redux/subCategory.slice";

export const subCategoryFromDtoServiceArray = (
	dto: ISubCategoryDTO[]
): ISubCategoryState[] => {
	return dto.map((subCategory) => subCategoryFromDtoServiceObject(subCategory));
};

export const subCategoryFromDtoServiceObject = (
	dto: ISubCategoryDTO
): ISubCategoryState => {
	const { _id, category_id, tags_color, ...other } = dto;

	return {
		...other,
		id: _id,
		tagsColor: tags_color,
		categoryId: category_id,
	};
};
