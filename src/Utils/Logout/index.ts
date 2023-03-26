import {
	LocalStorageMethodEnum,
	localStorageService,
} from "Utils/local-storage.service";
import RequestStatusesType from "Types/RequestStatusesType";
import RequestStatuses from "Constants/RequestStatuses";

const logout = (status: RequestStatusesType): RequestStatusesType => {
	if (status === RequestStatuses.UNAUTHORIZED) {
		localStorageService(LocalStorageMethodEnum.REMOVE, {
			key: "role",
		});
		localStorageService(LocalStorageMethodEnum.REMOVE, {
			key: "auth",
		});
		for (let i = 0; i < localStorage.length; i++) {
			localStorageService(LocalStorageMethodEnum.REMOVE, {
				key: String(localStorage.key(i)),
			});
		}
		if (
			window.location.pathname.indexOf("/auth") !== 0 &&
			location.pathname !== "/"
		) {
			window.location.href = "/no_auth";
		}
	}

	return status;
};

export default logout;
