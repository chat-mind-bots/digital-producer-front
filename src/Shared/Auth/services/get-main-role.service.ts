import { UserRoleEnum } from "Shared/Auth/types/role.enum";

export const getMainRoleService = (roles: UserRoleEnum[]): UserRoleEnum => {
	const rolePriorities = {
		USER: 1,
		PRODUCER: 2,
		ADMIN: 3,
		SUPER_ADMIN: 4,
	};

	return roles.reduce((highestRole, currentRole) => {
		return rolePriorities[currentRole] > rolePriorities[highestRole]
			? currentRole
			: highestRole;
	}, UserRoleEnum.USER);
};
