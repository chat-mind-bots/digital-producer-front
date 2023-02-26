import React from "react";

import MainComponent from "Pages/Cabinet/Main";
import CoursesComponent from "Pages/Cabinet/Courses/User";
import NewsComponent from "Pages/Cabinet/News";
import { ReactComponent as Main } from "Icons/NavBar/Main.svg";
import { ReactComponent as MyCourses } from "Icons/NavBar/MyCourses.svg";
import { ReactComponent as News } from "Icons/NavBar/News.svg";
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

const NavBarDataProducer: NavBarType[] = [
	{
		id: 1,
		name: "Главная",
		count: 10,
		url: routeBuilder(RoutesList.PRODUCER),
		svg: <Main />,
		element: <MainComponent />,
	},
	{
		id: 2,
		name: "Мои курсы",
		count: 0,
		url: routeBuilder([RoutesList.PRODUCER, RoutesList.COURSES]),
		svg: <MyCourses />,
		element: <CoursesComponent />,
	},
	{
		id: 3,
		name: "Новости",
		count: 0,
		url: routeBuilder([RoutesList.PRODUCER, RoutesList.NEWS]),
		svg: <News />,
		element: <NewsComponent />,
	},
];

export default NavBarDataProducer;
