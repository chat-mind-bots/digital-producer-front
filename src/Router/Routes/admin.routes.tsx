import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesList from "Router/routesList";
import Err from "Pages/Err";
import MainCabinetAdmin from "Pages/Cabinet/Main/Admin";
import NewsCabinetAdmin from "Pages/Cabinet/News/Admin";
import ReviewCoursesCabinetAdmin from "Pages/Cabinet/ReviewCourses/Admin";
import NewsIdCabinetAdmin from "Pages/Cabinet/NewsId/Admin";
import CourseIdCabinetAdmin from "Pages/Cabinet/CourseId/Admin";
import TestIdCabinetAdmin from "Pages/Cabinet/TestId/Admin";
import BannersCabinetAdmin from "Pages/Cabinet/Banners/Admin";
import TextEditorCabinetAdmin from "Pages/Cabinet/TextEditor/Admin";
import NotFound from "Pages/NotFound";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import LazyCabinet from "Layout";

import CategoriesCabinetAdmin from "../../Pages/Cabinet/Categories/Admin";
import UsersCabinetAdmin from "../../Pages/Cabinet/Users/Admin";

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
				path: RoutesList.NEWS,
				element: <NewsCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.COURSES_REVIEW,
				element: <ReviewCoursesCabinetAdmin />,
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
				path: RoutesList.BANNERS,
				element: <BannersCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.TEXT_EDITOR,
				element: <TextEditorCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.CATEGORIES,
				element: <CategoriesCabinetAdmin />,
				errorElement: <Err />,
			},
			{
				path: RoutesList.USERS,
				element: <UsersCabinetAdmin />,
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
