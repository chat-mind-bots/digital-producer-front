import React from "react";

import MainComponent from "Pages/Cabinet/Main";
import CoursesComponent from "Pages/Cabinet/Courses";
import NewsComponent from "Pages/Cabinet/News";
import MetaCoursesComponent from "Pages/Cabinet/MetaCourses";
import BannersComponent from "Pages/Cabinet/Banners/Admin";
import { ReactComponent as Main } from "Icons/NavBar/Main.svg";
import { ReactComponent as MyCourses } from "Icons/NavBar/MyCourses.svg";
import { ReactComponent as News } from "Icons/NavBar/News.svg";
import { ReactComponent as MetaCourses } from "Icons/NavBar/MetaCourses.svg";
import RoutesList from "Router/routesList";
import { routeBuilder } from "Router/services/route-builder";

export type NavBarType = {
	id: number;
	name: string;
	count: number;
	svg: JSX.Element;
	url: string;
	element: JSX.Element;
};

const NavBarDataAdmin: NavBarType[] = [
	{
		id: 1,
		name: "Главная",
		count: 10,
		url: routeBuilder(RoutesList.ADMIN),
		svg: <Main />,
		element: <MainComponent />,
	},
	{
		id: 2,
		name: "Мои курсы",
		count: 0,
		url: routeBuilder([RoutesList.ADMIN, RoutesList.COURSES]),
		svg: <MyCourses />,
		element: <CoursesComponent />,
	},
	{
		id: 3,
		name: "Новости",
		count: 0,
		url: routeBuilder([RoutesList.ADMIN, RoutesList.NEWS]),
		svg: <News />,
		element: <NewsComponent />,
	},
	{
		id: 4,
		name: "Курсы meta",
		count: 0,
		url: routeBuilder([RoutesList.ADMIN, RoutesList.META_COURSES]),
		svg: <MetaCourses />,
		element: <BannersComponent />,
	},
	{
		id: 5,
		name: "Банеры",
		count: 0,
		url: routeBuilder([RoutesList.ADMIN, RoutesList.BANNERS]),
		svg: <MetaCourses />,
		element: <MetaCoursesComponent />,
	},

	{
		id: 6,
		name: "TextEditor",
		count: 0,
		url: routeBuilder([RoutesList.ADMIN, RoutesList.TEXT_EDITOR]),
		svg: <MetaCourses />,
		element: <MetaCoursesComponent />,
	},
];

export default NavBarDataAdmin;
