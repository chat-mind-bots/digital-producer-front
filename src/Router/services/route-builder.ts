import RoutesList from 'Router/routesList';

export const routeBuilder = (routes: RoutesList | RoutesList[]): string => {
  const isArray = Array.isArray(routes);
  const url = isArray ? routes.join('/') : routes;
  return `/${url}`;
};

export const routeBuilderWithReplace = (
  routes: RoutesList | RoutesList[],
  key: string,
  value: string | number
): string => {
  const url = routeBuilder(routes);
  return url.replace(`:${key}`, value.toString());
};
