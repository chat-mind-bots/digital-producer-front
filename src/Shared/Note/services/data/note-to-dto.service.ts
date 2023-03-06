import { INoteState } from "../../redux/note.slice";
import { INoteDTO } from "../../types/module-dto.type";

export const noteToDtoServiceArray = (state: INoteState[]): INoteDTO[] => {
	return state.map((note) => {
		const { ...other } = note;

		return {
			...other,
		};
	});
};

export const noteToDtoServiceObject = (state: INoteState): INoteDTO => {
	const { ...other } = state;

	return {
		...other,
	};
};
