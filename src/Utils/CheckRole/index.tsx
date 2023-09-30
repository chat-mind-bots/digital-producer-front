import {
	LocalStorageMethodEnum,
	localStorageService,
} from "Utils/local-storage.service";

const checkRole = (): string[] => {
	return JSON.parse(
		localStorageService(
			LocalStorageMethodEnum.GET,
			{
				key: "role",
			} || {}
		) as string
	) as string[];
};

export default checkRole;
