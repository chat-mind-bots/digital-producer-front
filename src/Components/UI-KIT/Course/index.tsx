import React, { FC } from "react";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import CourseGet from "Shared/Courses/components/CourseGet";

import CourseIdUserUser from "./CourseId/User";
import CourseResultType from "./course-props.type";
import Loader from "../Loader";
import CourseIdUserProducer from "./CourseId/Producer";
import CourseIdUserAdmin from "./CourseId/Admin";

type Type = { role: UserRoleEnum };

const Course: FC<Type> = ({ role }) => (
	<CourseGet>
		<SwitchCourse role={role} />
	</CourseGet>
);

const SwitchCourse: FC<Type & CourseResultType> = ({
	result,
	role,
	refetch,
}) => {
	if (result) {
		switch (role) {
			case UserRoleEnum.USER:
				return (
					<CourseIdUserUser
						{...result}
						refetch={refetch}
					/>
				);
			case UserRoleEnum.PRODUCER:
				return (
					<CourseIdUserProducer
						{...result}
						refetch={refetch}
					/>
				);
			case UserRoleEnum.ADMIN:
				return (
					<CourseIdUserAdmin
						{...result}
						refetch={refetch}
					/>
				);
			default:
				return <></>;
		}
	} else {
		return <Loader />;
	}
};

export default Course;
