import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesList from "Router/routesList";
import Home from "Pages/Main/Home";
import { RoutesUser } from "Router/Routes/user.routes";
import { RoutesProducer } from "Router/Routes/producer.routes";
import { RoutesAdmin } from "Router/Routes/admin.routes";
import { RoutesAuth } from "Router/Routes/auth.routes";
import Main from "Layout/Main";
import NotFound from "Pages/NotFound";
import ParseToken from "Shared/Auth/components/parseToken";
import Err from "Components/UI-KIT/Err";

export const Router: RouteObject[] = [
	{
		path: RoutesList.HOME,
		element: <Main isRegistration={false} />,
		errorElement: <Err />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	...RoutesAuth,
	{
		path: RoutesList.HOME,
		element: <ParseToken />,
		errorElement: <Err />,
		children: [...RoutesUser, ...RoutesProducer, ...RoutesAdmin],
	},

	{
		path: RoutesList.NOT_FOUND,
		element: <Main isRegistration={false} />,
		errorElement: <Err />,
		children: [
			{
				path: RoutesList.NOT_FOUND,
				element: <NotFound />,
			},
		],
	},
];
