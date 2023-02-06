import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import checkAuth from "Utils/CheckAuth";
import Loader from "Components/UI-KIT/Loader";
import { routeBuilder } from "Router/services/route-builder";
import RoutesList from "Router/routesList";

const LazyCabinet = lazy(() => import("Layout/Cabinet/Producer"));

const PrivateRouteProducer = () => {
	const token = checkAuth();

	return token ? (
		<Suspense fallback={<Loader />}>
			<LazyCabinet />
		</Suspense>
	) : (
		<Navigate
			to={routeBuilder(RoutesList.HOME)}
			replace
		/>
	);
};

export default PrivateRouteProducer;
