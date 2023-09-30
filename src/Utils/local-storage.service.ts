export enum LocalStorageMethodEnum {
	SET = "SET",
	GET = "GET",
	REMOVE = "REMOVE",
}
export interface ILocalStorageParams {
	key: string;
	data?: any;
}
export const localStorageService = (
	method: LocalStorageMethodEnum,
	{ key, data }: ILocalStorageParams
) => {
	switch (method) {
		case LocalStorageMethodEnum.GET:
			return localStorage.getItem(key);
		case LocalStorageMethodEnum.REMOVE:
			localStorage.removeItem(key);
			break;
		case LocalStorageMethodEnum.SET:
			localStorage.setItem(key, data);
			break;
	}
};
