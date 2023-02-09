import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesList from "Router/routesList";
import Err from "Pages/Err";
import Auth from "Pages/Auth";
import AuthParseToken from "Shared/Auth/components/parseToken";

export const RoutesAuth: RouteObject[] = [
	{
		path: RoutesList.AUTH,
		element: <Auth />,
		errorElement: <Err />,
		children: [
			{
				path: RoutesList.TOKEN,
				element: <AuthParseToken />,
			},
		],
	},
];
