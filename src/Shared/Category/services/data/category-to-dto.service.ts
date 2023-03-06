import { ICategoryDTO } from "../../types/category-dto.type";
import { ICategoryState } from "../../redux/category.slice";
import { subCategoryToDtoServiceArray } from "../../../SubCategory/services/data/subCategory-to-dto.service";

export const categoryToDtoServiceArray = (
	state: ICategoryState[]
): ICategoryDTO[] => {
	return state.map((category) => categoryToDtoServiceObject(category));
};

export const categoryToDtoServiceObject = (
	state: ICategoryState
): ICategoryDTO => {
	const { id, tagsColor, subCategories, ...other } = state;

	return {
		...other,
		_id: id,
		tags_color: tagsColor,
		sub_categories: subCategories
			? subCategoryToDtoServiceArray(subCategories)
			: [],
	};
};
