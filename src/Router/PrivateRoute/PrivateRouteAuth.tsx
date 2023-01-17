import { Navigate, Outlet } from 'react-router-dom';
import checkAuth from 'Utils/CheckAuth';

const PrivateRouteAuth = () =>
  checkAuth() ? <Navigate to="/main" /> : <Outlet />;

export default PrivateRouteAuth;
