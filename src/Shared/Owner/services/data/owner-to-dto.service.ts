import { IOwnerDTO } from "../../types/owner-dto.type";
import { IOwnerState } from "../../redux/owner.slice";

export const OwnerToDtoServiceObject = (state: IOwnerState): IOwnerDTO => {
	const { id, firstName, ...other } = state;

	return {
		...other,
		_id: id,
		first_name: firstName,
	};
};
