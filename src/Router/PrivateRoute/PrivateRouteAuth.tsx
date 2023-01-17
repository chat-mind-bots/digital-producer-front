import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteAuth = () => {
  const auth = true;
  return auth ? <Navigate to="/main" /> : <Outlet />;
};
export default PrivateRouteAuth;
