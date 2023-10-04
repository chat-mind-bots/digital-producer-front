import React from "react";

import Banner from "Components/UI-KIT/Banner";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import Courses from "Components/UI-KIT/Courses";

import * as ST from "./styled";

const MetaCourses = () => {
	return (
		<ST.MetaCourses>
			<Courses
				role={UserRoleEnum.ADMIN}
				header={"Все курсы"}
			/>
			<Banner
				role={UserRoleEnum.ADMIN}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.MetaCourses>
	);
};

export default MetaCourses;
