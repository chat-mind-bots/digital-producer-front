import { Navigate, Outlet } from 'react-router-dom';
import CheckAuth from 'Utils/CheckAuth';

const PrivateRouteAnother = () => {
  const auth = CheckAuth();
  return auth ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRouteAnother;
