import React, { useEffect, useState } from "react";

import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import WrapperContent from "Components/WrapperContent";
import CourseCard from "Components/UI-KIT/CourseCard";
import AddBlock from "Components/UI-KIT/AddBlock";
import RoutesList from "Router/routesList";
import { useGetCoursesQuery } from "Store/api/course/course.api";
import { CoursesType } from "Types/Course";
import WrapperRequest from "Components/WrapperRequest";
import { routeBuilderWithReplace } from "Router/services/route-builder";

import * as ST from "./styled";

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
	{ id: 1, name: "Главная", url: RoutesList.USER },
	{ id: 2, name: "Мои курсы", url: RoutesList.COURSES },
];

const Courses = () => {
	const result = useGetCoursesQuery("myCourses");
	const { data, isError, isLoading } = result;
	const [currentData, setNumberPosition] = useState<CoursesType>();

	useEffect(() => {
		data && setNumberPosition(data);
	}, [data]);

	return (
		<ST.Courses>
			<ST.WrapperCourses>
				<WrapperContent header={[...defaultBreadCrumbs]}>
					<ST.Wrapper>
						<WrapperRequest
							isError={isError}
							isLoading={isLoading}
						>
							<>
								{currentData &&
									currentData.list.map((course) => (
										<CourseCard
											key={`Courses-CourseCard-${course.id}`}
											url={routeBuilderWithReplace(
												[RoutesList.USER, RoutesList.NEWS_ID],
												"id",
												course.id
											)}
											title={course.name}
											description={course.description}
											levelDifficulty={course.levelDifficulty}
											tagsColors={currentData.tagsColors}
											tags={course.tags}
										/>
									))}
							</>
						</WrapperRequest>
					</ST.Wrapper>
				</WrapperContent>
			</ST.WrapperCourses>
			<AddBlock
				title={"Создайте свой курс"}
				description={
					"Станьте продюсером своего курса и проводите уроки на платформе"
				}
				textButton={"Создать курс"}
				urlButton={""}
				styleButton={""}
			/>
		</ST.Courses>
	);
};

export default Courses;
