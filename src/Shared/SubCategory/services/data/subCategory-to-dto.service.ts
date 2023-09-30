import { ISubCategoryDTO } from "../../types/subCategory-dto.type";
import { ISubCategoryState } from "../../redux/subCategory.slice";

export const subCategoryToDtoServiceArray = (
	state: ISubCategoryState[]
): ISubCategoryDTO[] => {
	return state.map((subCategory) => subCategoryToDtoServiceObject(subCategory));
};

export const subCategoryToDtoServiceObject = (
	state: ISubCategoryState
): ISubCategoryDTO => {
	const { id, tagsColor, categoryId, ...other } = state;

	return {
		...other,
		_id: id,
		tags_color: tagsColor,
		category_id: categoryId,
	};
};
