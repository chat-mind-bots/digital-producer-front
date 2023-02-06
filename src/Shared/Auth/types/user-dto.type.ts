import { UserRoleEnum } from 'Shared/Auth/types/role.enum';
import { IPhotos } from 'Shared/Auth/types/user-photos.type';

export interface IAuthUserDTO {
  _id: string;
  tg_id: number;
  first_name: string;
  username: string;
  type: string;
  role: UserRoleEnum[];
  photos?: IPhotos;
}
