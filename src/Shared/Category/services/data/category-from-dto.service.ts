import { ICategoryDTO } from "../../types/category-dto.type";
import { ICategoryState } from "../../redux/category.slice";
import { subCategoryFromDtoServiceArray } from "../../../SubCategory/services/data/subCategory-from-dto.service";

export const categoryFromDtoServiceArray = (
	dto: ICategoryDTO[]
): ICategoryState[] => {
	return dto.map((category) => categoryFromDtoServiceObject(category));
};

export const categoryFromDtoServiceObject = (
	dto: ICategoryDTO
): ICategoryState => {
	const { _id, tags_color, sub_categories, ...other } = dto;

	return {
		...other,
		id: _id,
		tagsColor: tags_color,
		subCategories: sub_categories
			? subCategoryFromDtoServiceArray(sub_categories)
			: [],
	};
};
