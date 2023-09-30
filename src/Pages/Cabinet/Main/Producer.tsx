import React from "react";

import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import Banner from "Components/UI-KIT/Banner";

import * as ST from "./styled";
import Courses from "../../../Components/UI-KIT/Courses";
import { useAppSelector } from "../../../Hooks/redux";
import { CoursesStatuses } from "../../../Shared/Courses/redux/course.api";

const Main = () => {
	const auth = useAppSelector((state) => state.auth);

	return (
		<ST.Main>
			<Banner
				role={UserRoleEnum.PRODUCER}
				type={BannerEnum.BANNER_TOP}
			/>
			<ST.WrapperMain>
				<Banner
					role={UserRoleEnum.PRODUCER}
					type={BannerEnum.BANNER_SLIDER}
				/>
				<ST.WrapperCourses>
					{auth.id && (
						<Courses
							role={UserRoleEnum.PRODUCER}
							header={"Мои опубликованные курсы "}
							ownerId={[auth.id]}
							status={CoursesStatuses.AVAILABLE}
							isAdd={false}
						/>
					)}
				</ST.WrapperCourses>
			</ST.WrapperMain>

			<Banner
				role={UserRoleEnum.PRODUCER}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.Main>
	);
};

export default Main;
