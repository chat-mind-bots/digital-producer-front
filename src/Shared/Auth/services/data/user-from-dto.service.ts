import { IAuthUserDTO } from "Shared/Auth/types/user-dto.type";
import { IAuthUserState } from "Shared/Auth/redux/auth.slice";

export const userFromDtoService = (
	dto: IAuthUserDTO,
	token: string
): IAuthUserState => {
	const { _id, tg_id, first_name, ...other } = dto;
	return {
		...other,
		token,
		id: _id,
		tgId: tg_id,
		firstName: first_name,
	};
};
