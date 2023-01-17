import { Navigate, Outlet } from 'react-router-dom';
import CheckAuth from 'Utils/CheckAuth';

const PrivateRouteAuth = () => {
  const auth = CheckAuth();
  return auth ? <Navigate to="/main" /> : <Outlet />;
};
export default PrivateRouteAuth;
