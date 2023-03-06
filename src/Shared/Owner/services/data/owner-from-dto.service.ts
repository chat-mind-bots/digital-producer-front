import { IOwnerDTO } from "../../types/owner-dto.type";
import { IOwnerState } from "../../redux/owner.slice";

export const OwnerFromDtoServiceObject = (dto: IOwnerDTO): IOwnerState => {
	const { _id, first_name, ...other } = dto;

	return {
		...other,
		id: _id,
		firstName: first_name,
	};
};
