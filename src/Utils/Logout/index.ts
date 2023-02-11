import {
	LocalStorageMethodEnum,
	localStorageService,
} from "Utils/local-storage.service";
import RequestStatusesType from "Types/RequestStatusesType";
import RequestStatuses from "RequestStatuses";

const logout = (status: RequestStatusesType): RequestStatusesType => {
	if (status === RequestStatuses.UNAUTHORIZED) {
		for (let i = 0; i < localStorage.length; i++) {
			localStorageService(LocalStorageMethodEnum.REMOVE, {
				key: String(localStorage.key(i)),
			});
		}
		// TODO: заменить эту хуйню
		window.location.href = "/";
	}

	return status;
};

export default logout;
