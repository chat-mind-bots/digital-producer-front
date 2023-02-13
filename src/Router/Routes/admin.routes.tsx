import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesList from "Router/routesList";
import Err from "Pages/Err";
import MainCabinetAdmin from "Pages/Cabinet/Main/Admin";
import CoursesCabinetAdmin from "Pages/Cabinet/Courses/Admin";
import NewsCabinetAdmin from "Pages/Cabinet/News/Admin";
import MetaCoursesCabinetAdmin from "Pages/Cabinet/MetaCourses/Admin";
import NewsIdCabinetAdmin from "Pages/Cabinet/NewsId/Admin";
import CourseIdCabinetAdmin from "Pages/Cabinet/CourseId/Admin";
import TestIdCabinetAdmin from "Pages/Cabinet/TestId/Admin";
import NotFound from "Pages/NotFound";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import LazyCabinet from "Layout";

export const RoutesAdmin: RouteObject[] = [
	{
		path: RoutesList.ADMIN,
		element: <LazyCabinet role={UserRoleEnum.ADMIN} />,
		errorElement: <Err />,
		children: [
			{
				index: true,
				element: <MainCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.COURSES,
				element: <CoursesCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.NEWS,
				element: <NewsCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.META_COURSES,
				element: <MetaCoursesCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.NEWS_ID,
				element: <NewsIdCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.COURSE_ID,
				element: <CourseIdCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.TEST_ID,
				element: <TestIdCabinetAdmin />,
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
