import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { IPhotos } from "Shared/Auth/types/user-photos.type";
import RequestStatusesType from "Types/RequestStatusesType";

export interface IAuthUserDTO {
	_id: string;
	tg_id: number;
	first_name: string;
	username: string;
	type: string;
	statusCode: RequestStatusesType;
	role: UserRoleEnum[];
	photos?: IPhotos;
}
