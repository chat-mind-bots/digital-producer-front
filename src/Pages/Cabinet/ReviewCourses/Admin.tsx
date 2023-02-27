import React from "react";
import { useSearchParams } from "react-router-dom";

import Banner from "Components/UI-KIT/Banner";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import Courses from "Components/UI-KIT/Courses";

import * as ST from "./styled";
import { CoursesStatuses } from "../../../Shared/Courses/redux/course.api";

const ReviewCourses = () => {
	const [searchParams] = useSearchParams();

	const query = searchParams.get("ownerId") as string;

	const ownerId = query ? [query] : undefined;

	return (
		<ST.MetaCourses>
			<Courses
				role={UserRoleEnum.ADMIN}
				header={query ? "Все курсы продюсера" : "Курсы на проверке"}
				status={query ? CoursesStatuses.AVAILABLE : CoursesStatuses.IN_REVIEW}
				ownerId={ownerId}
			/>
			<Banner
				role={UserRoleEnum.ADMIN}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.MetaCourses>
	);
};

export default ReviewCourses;
