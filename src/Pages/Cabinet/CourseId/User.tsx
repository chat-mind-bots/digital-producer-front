import React from "react";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import Course from "Components/UI-KIT/Course";

const CoursePage = () => {
	return <Course role={UserRoleEnum.USER} />;
};

export default CoursePage;
