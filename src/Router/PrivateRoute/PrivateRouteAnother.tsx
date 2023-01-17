import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteAnother = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRouteAnother;
