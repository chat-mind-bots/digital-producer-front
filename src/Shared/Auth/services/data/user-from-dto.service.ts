import { IAuthUserDTO } from "Shared/Auth/types/user-dto.type";
import { IAuthUserState } from "Shared/Auth/redux/auth.slice";

import { UserRoleEnum } from "../../types/role.enum";

export const userFromDtoService = (
	dto: IAuthUserDTO,
	token: string
): IAuthUserState => {
	const { _id, tg_id, first_name, ...other } = dto;

	const role = [];

	if (dto?.role?.includes(UserRoleEnum.USER)) {
		role.push(UserRoleEnum.USER);
	}
	if (dto?.role?.includes(UserRoleEnum.PRODUCER)) {
		role.push(UserRoleEnum.PRODUCER);
	}
	if (dto?.role?.includes(UserRoleEnum.ADMIN)) {
		role.push(UserRoleEnum.ADMIN);
	}
	if (dto?.role?.includes(UserRoleEnum.SUPER_ADMIN)) {
		role.push(UserRoleEnum.SUPER_ADMIN);
	}

	return {
		...other,
		token,
		id: _id,
		tgId: tg_id,
		firstName: first_name,
		role,
	};
};

export const userFromDtoServiceArray = (
	dto: IAuthUserDTO[]
): IAuthUserState[] => {
	return dto.map((user) => {
		return userFromDtoService(user, "");
	});
};
