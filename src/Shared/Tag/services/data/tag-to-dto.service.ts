import { ITagDTO } from "../../Types/tag-dto.type";
import { ITagState } from "../../redux/tag.slice";

export const tagToDtoServiceArray = (state: ITagState[]): ITagDTO[] => {
	return state.map((subCategory) => tagToDtoServiceObject(subCategory));
};

export const tagToDtoServiceObject = (state: ITagState): ITagDTO => {
	const { id, ...other } = state;

	return {
		...other,
		_id: id,
	};
};
