import { IDocumentDTO } from "../../types/document-dto.type";
import { IDocumentState } from "../../redux/document.slice";

export const documentFromDtoServiceObject = (
	dto: IDocumentDTO
): IDocumentState => {
	const { _id, ...other } = dto;

	return {
		...other,
		id: _id,
	};
};

export const documentFromDtoServiceArray = (
	dto: IDocumentDTO[]
): IDocumentState[] => {
	return dto.map((document) => {
		const { _id, ...other } = document;

		return {
			...other,
			id: _id,
		};
	});
};
