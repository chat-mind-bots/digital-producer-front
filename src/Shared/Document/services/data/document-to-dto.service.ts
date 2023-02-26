import { IDocumentDTO } from "../../types/document-dto.type";
import { IDocumentState } from "../../redux/document.slice";

export const documentToDtoServiceObject = (
	state: IDocumentState
): IDocumentDTO => {
	const { id, ...other } = state;

	return {
		...other,
		_id: id,
	};
};

export const documentToDtoServiceArray = (
	state: IDocumentState[]
): IDocumentDTO[] => {
	return state.map((document) => {
		const { id, ...other } = document;

		return {
			...other,
			_id: id,
		};
	});
};
