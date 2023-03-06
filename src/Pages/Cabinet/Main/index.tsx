import React from "react";

import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import Banner from "Components/UI-KIT/Banner";

import * as ST from "./styled";
import Courses from "../../../Components/UI-KIT/Courses";
import { CoursesCreatedAt } from "../../../Shared/Courses/redux/course.api";

const Main = () => (
	<ST.Main>
		<Banner
			role={UserRoleEnum.USER}
			type={BannerEnum.BANNER_TOP}
		/>
		<ST.WrapperMain>
			<Banner
				role={UserRoleEnum.USER}
				type={BannerEnum.BANNER_SLIDER}
			/>
			<ST.WrapperCourses>
				<Courses
					role={UserRoleEnum.USER}
					header={"Новые курсы платформы"}
					sortBy={CoursesCreatedAt.createdAt}
				/>
			</ST.WrapperCourses>
		</ST.WrapperMain>

		<Banner
			role={UserRoleEnum.USER}
			type={BannerEnum.BANNER_RIGHT}
		/>
	</ST.Main>
);

export default Main;
