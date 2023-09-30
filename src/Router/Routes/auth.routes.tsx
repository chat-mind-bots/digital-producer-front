import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesList from "Router/routesList";
import Main from "Layout/Main";
import Initialization from "Pages/Main/Initialization";
import AuthParseToken from "Shared/Auth/components/parseToken";
import Err from "Components/UI-KIT/Err";

export const RoutesAuth: RouteObject[] = [
	{
		path: RoutesList.AUTH,
		element: <Main isRegistration={false} />,
		errorElement: <Err />,
		children: [
			{
				path: RoutesList.TOKEN,
				element: <AuthParseToken />,
				children: [
					{
						index: true,
						element: <Initialization />,
					},
				],
			},
		],
	},
];
