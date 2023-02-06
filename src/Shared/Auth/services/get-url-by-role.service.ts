import { UserRoleEnum } from 'Shared/Auth/types/role.enum';
import RoutesList from 'Router/routesList';

export const getUrlByRoleService = (mainRole: UserRoleEnum): RoutesList => {
  switch (mainRole) {
    case UserRoleEnum.USER:
      return RoutesList.USER;
    case UserRoleEnum.PRODUCER:
      return RoutesList.PRODUCER;
    case UserRoleEnum.ADMIN:
      return RoutesList.ADMIN;
    case UserRoleEnum.SUPER_ADMIN:
      return RoutesList.SUPER_ADMIN;
    default:
      return RoutesList.HOME;
  }
};
