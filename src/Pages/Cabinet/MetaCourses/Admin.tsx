import React from "react";
import { useGetCoursesQuery } from "Store/api/course/course.api";
import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import RoutesList from "Router/routesList";
import WrapperContent from "Components/WrapperContent";
import CourseCard from "Components/UI-KIT/CourseCard";
import AddBlock from "Components/UI-KIT/AddBlock";
import WrapperRequest from "Components/WrapperRequest";
import * as ST from "./styled";
import { routeBuilderWithReplace } from "Router/services/route-builder";

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
	{ id: 1, name: "Главная", url: RoutesList.USER },
	{ id: 2, name: "Курсы Meta", url: RoutesList.META_COURSES },
];

const MetaCourses = () => {
	const ptops = useGetCoursesQuery("metaCourses");
	const { data, isError, isLoading } = ptops;

	return (
		<ST.MetaCourses>
			<ST.WrapperCourses>
				<WrapperContent header={[...defaultBreadCrumbs]}>
					<ST.Wrapper>
						<WrapperRequest
							isError={isError}
							isLoading={isLoading}
						>
							<>
								{data &&
									data.list.map((course) => (
										<CourseCard
											key={`Courses-CourseCard-${course.id}`}
											url={routeBuilderWithReplace(
												[RoutesList.ADMIN, RoutesList.COURSE_ID],
												"id",
												course.id
											)}
											title={course.name}
											description={course.description}
											levelDifficulty={course.levelDifficulty}
											tagsColors={data.tagsColors}
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
		</ST.MetaCourses>
	);
};

export default MetaCourses;
