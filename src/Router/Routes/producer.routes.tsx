import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesList from "Router/routesList";
import MainCabinetProducer from "Pages/Cabinet/Main/Producer";
import CoursesCabinetProducer from "Pages/Cabinet/Courses/Producer";
import NewsCabinetProducer from "Pages/Cabinet/News/Producer";
import NewsIdCabinetProducer from "Pages/Cabinet/NewsId/Producer";
import CourseIdCabinetProducer from "Pages/Cabinet/CourseId/Producer";
import TestIdCabinetProducer from "Pages/Cabinet/TestId/Producer";
import NotFound from "Pages/NotFound";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import LazyCabinet from "Layout";
import Err from "Components/UI-KIT/Err";

export const RoutesProducer: RouteObject[] = [
	{
		path: RoutesList.PRODUCER,
		element: <LazyCabinet role={UserRoleEnum.PRODUCER} />,
		errorElement: <Err />,
		children: [
			{
				index: true,
				element: <MainCabinetProducer />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.COURSES,
				element: <CoursesCabinetProducer />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.NEWS,
				element: <NewsCabinetProducer />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.NEWS_ID,
				element: <NewsIdCabinetProducer />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.COURSE_ID,
				element: <CourseIdCabinetProducer />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.TEST_ID,
				element: <TestIdCabinetProducer />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.NOT_FOUND,
				element: <NotFound />,
				errorElement: <Err />,
			},
		],
	},
];
