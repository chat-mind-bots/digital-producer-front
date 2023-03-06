import { INoteState } from "../../redux/note.slice";
import { INoteDTO } from "../../types/module-dto.type";

export const courseFromDtoServiceArray = (dto: INoteDTO[]): INoteState[] => {
	return dto.map((course) => {
		const { ...other } = course;

		return {
			...other,
		};
	});
};

export const noteFromDtoServiceObject = (dto: INoteDTO): INoteState => {
	const { ...other } = dto;

	return {
		...other,
	};
};
