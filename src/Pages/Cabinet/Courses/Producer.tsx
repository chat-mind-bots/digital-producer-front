import React from "react";

import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import Banner from "Components/UI-KIT/Banner";
import Courses from "Components/UI-KIT/Courses";

import * as ST from "./styled";
import { useAppSelector } from "../../../Hooks/redux";

const CoursesPage = () => {
	const auth = useAppSelector((state) => state.auth);

	return (
		<ST.CoursesPage>
			<Courses
				role={UserRoleEnum.PRODUCER}
				header={"Мои курсы "}
				ownerId={[auth.id]}
				isAdd={true}
			/>
			<Banner
				role={UserRoleEnum.PRODUCER}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.CoursesPage>
	);
};

export default CoursesPage;
