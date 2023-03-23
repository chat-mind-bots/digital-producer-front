export enum UserRoleEnum {
	USER = "USER",
	PRODUCER = "PRODUCER",
	ADMIN = "ADMIN",
	SUPER_ADMIN = "SUPER_ADMIN",
}

export const UserRoleArray = [
	{ id: UserRoleEnum.USER, value: "USER" },
	{ id: UserRoleEnum.PRODUCER, value: "PRODUCER" },
	{ id: UserRoleEnum.ADMIN, value: "ADMIN" },
];
