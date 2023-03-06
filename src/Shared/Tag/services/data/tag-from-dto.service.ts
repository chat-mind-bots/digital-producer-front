import { ITagDTO } from "../../Types/tag-dto.type";
import { ITagState } from "../../redux/tag.slice";

export const tagFromDtoServiceArray = (dto: ITagDTO[]): ITagState[] => {
	return dto?.map((subCategory) => tagFromDtoServiceObject(subCategory));
};

export const tagFromDtoServiceObject = (dto: ITagDTO): ITagState => {
	const { _id, ...other } = dto;

	return {
		...other,
		id: _id,
	};
};
