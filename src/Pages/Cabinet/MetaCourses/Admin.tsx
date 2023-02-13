import React from "react";

import { useGetCoursesQuery } from "Store/api/course/course.api";
import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import RoutesList from "Router/routesList";
import WrapperContent from "Components/WrapperContent";
import CourseCard from "Components/UI-KIT/CourseCard";
import WrapperRequest from "Components/WrapperRequest";
import { routeBuilderWithReplace } from "Router/services/route-builder";
import Banner from "Components/UI-KIT/Banner";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";

import * as ST from "./styled";

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
	{ id: 1, name: "Главная", url: RoutesList.USER },
	{ id: 2, name: "Курсы Meta", url: RoutesList.META_COURSES },
];

const MetaCourses = () => {
	const result = useGetCoursesQuery("metaCourses");
	const { data, isError, isLoading } = result;

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
			<Banner
				role={UserRoleEnum.ADMIN}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.MetaCourses>
	);
};

export default MetaCourses;
