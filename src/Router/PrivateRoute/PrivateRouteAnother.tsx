import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import checkAuth from "Utils/CheckAuth";

const PrivateRouteAnother = () =>
	checkAuth() ? <Outlet /> : <Navigate to="auth" />;

export default PrivateRouteAnother;
