export enum UserRoleEnum {
	USER = "USER",
	PRODUCER = "PRODUCER",
	ADMIN = "ADMIN",
	SUPER_ADMIN = "SUPER_ADMIN",
}

export const UserRoleArray = [
	{ id: UserRoleEnum.USER, value: UserRoleEnum.USER },
	{ id: UserRoleEnum.PRODUCER, value: UserRoleEnum.PRODUCER },
	{ id: UserRoleEnum.ADMIN, value: UserRoleEnum.ADMIN },
];
