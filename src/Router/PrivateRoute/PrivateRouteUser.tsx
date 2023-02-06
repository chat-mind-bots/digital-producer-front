import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import checkAuth from "Utils/CheckAuth";
import Loader from "Components/UI-KIT/Loader";
import RoutesList from "Router/routesList";
import { routeBuilder } from "Router/services/route-builder";

const LazyCabinet = lazy(() => import("Layout/Cabinet"));

const PrivateRouteUser = () => {
	const token = checkAuth();

	return token ? (
		<Suspense fallback={<Loader />}>
			<LazyCabinet />
		</Suspense>
	) : (
		<Navigate
			to={routeBuilder(RoutesList.HOME)}
			replace={true}
		/>
	);
};

export default PrivateRouteUser;
