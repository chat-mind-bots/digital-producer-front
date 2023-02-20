import React, { useState } from "react";

import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import WrapperContent from "Components/WrapperContent";
import CourseCard from "Components/UI-KIT/CourseCard";
import RoutesList from "Router/routesList";
import { useGetCoursesQuery } from "Store/api/course/course.api";
import WrapperRequest from "Components/WrapperRequest";
import CourseCardProducer from "Components/UI-KIT/CourseCard/Producer";
import CreateCourse from "Components/ModalWindows/Body/CreateCourse";
import Modal from "Components/ModalWindows/WrappersModalWindows/Classic";
import { routeBuilderWithReplace } from "Router/services/route-builder";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import Banner from "Components/UI-KIT/Banner";

import * as ST from "./styled";

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
	{ id: 1, name: "Главная", url: RoutesList.USER },
	{ id: 2, name: "Мои курсы", url: RoutesList.COURSES },
];

const Courses = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const result = useGetCoursesQuery("myCourses");
	const { data, isError, isLoading } = result;

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
								<CourseCardProducer onClick={() => setIsOpen(true)} />
								{data &&
									data.list.map((course) => (
										<CourseCard
											key={`Courses-CourseCard-${course.id}`}
											url={routeBuilderWithReplace(
												[RoutesList.PRODUCER, RoutesList.COURSE_ID],
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
				role={UserRoleEnum.PRODUCER}
				type={BannerEnum.BANNER_RIGHT}
			/>
			{/*MODAL WINDOW_______________________*/}
			<Modal
				handleClose={() => setIsOpen(false)}
				isOpen={isOpen}
				title={"Создание курса"}
			>
				<CreateCourse />
			</Modal>
			{/*MODAL WINDOW_______________________*/}
		</ST.Courses>
	);
};

export default Courses;
