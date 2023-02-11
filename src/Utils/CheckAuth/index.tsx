import {
	LocalStorageMethodEnum,
	localStorageService,
} from "Utils/local-storage.service";

const checkAuth = (): string | undefined | null => {
	return localStorageService(LocalStorageMethodEnum.GET, {
		key: "auth",
	});
};

export default checkAuth;
