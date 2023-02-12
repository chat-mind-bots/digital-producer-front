import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesList from "Router/routesList";
import Err from "Pages/Err";
import MainCabinet from "Pages/Cabinet/Main";
import CoursesCabinet from "Pages/Cabinet/Courses";
import NewsCabinet from "Pages/Cabinet/News";
import MetaCoursesCabinet from "Pages/Cabinet/MetaCourses";
import NewsIdCabinet from "Pages/Cabinet/NewsId";
import CourseIdCabinet from "Pages/Cabinet/CourseId";
import TestIdCabinet from "Pages/Cabinet/TestId";
import NotFound from "Pages/NotFound";
import LazyCabinet from "Layout";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";

export const RoutesUser: RouteObject[] = [
	{
		path: RoutesList.USER,
		element: <LazyCabinet role={UserRoleEnum.USER} />,
		errorElement: <Err />,
		children: [
			{
				index: true,
				element: <MainCabinet />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.COURSES,
				element: <CoursesCabinet />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.NEWS,
				element: <NewsCabinet />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.META_COURSES,
				element: <MetaCoursesCabinet />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.NEWS_ID,
				element: <NewsIdCabinet />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.COURSE_ID,
				element: <CourseIdCabinet />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.TEST_ID,
				element: <TestIdCabinet />,
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
