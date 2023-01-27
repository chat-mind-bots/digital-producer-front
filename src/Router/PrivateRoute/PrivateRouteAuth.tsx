import { Navigate, Outlet } from 'react-router-dom';
import checkAuth from 'Utils/CheckAuth';
import RoutesList from 'Router/routesList';

const PrivateRouteAuth = () =>
  checkAuth() ? <Navigate to={RoutesList.MAIN} /> : <Outlet />;

export default PrivateRouteAuth;
