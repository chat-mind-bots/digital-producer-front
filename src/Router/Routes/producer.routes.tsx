import React from "react";
import { RouteObject } from "react-router-dom";
import RoutesList from "Router/routesList";
import Err from "Pages/Err";
import MainCabinetProducer from "Pages/Cabinet/Main/Producer";
import CoursesCabinetProducer from "Pages/Cabinet/Courses/Producer";
import NewsCabinetProducer from "Pages/Cabinet/News/Producer";
import MetaCoursesCabinetProducer from "Pages/Cabinet/MetaCourses/Producer";
import NewsIdCabinetProducer from "Pages/Cabinet/NewsId/Producer";
import CourseIdCabinetProducer from "Pages/Cabinet/CourseId/Producer";
import TestIdCabinetProducer from "Pages/Cabinet/TestId/Producer";
import PrivateRouteProducer from "Router/PrivateRoute/PrivateRouteProducer";

export const RoutesProducer: RouteObject[] = [
	{
		path: RoutesList.PRODUCER,
		element: <PrivateRouteProducer />,
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
				path: RoutesList.META_COURSES,
				element: <MetaCoursesCabinetProducer />,
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
		],
	},
];
