import React, { FC } from "react";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import CoursesGet from "Shared/Courses/components/CoursesGet";

import CoursesResultType from "./courses-props.type";
import ProducerCoursesList from "./CoursesList/Producer";
import AdminCoursesList from "./CoursesList/Admin";
import UserCoursesList from "./CoursesList/User";
import { GetCoursesApiProps } from "../../../Shared/Courses/redux/course.api";

type Type = Pick<
	GetCoursesApiProps,
	"subCategoryId" | "enrolledUserId" | "ownerId" | "status"
> &
	Pick<GetCoursesApiProps, "sortBy"> & {
		role: UserRoleEnum;
		header: string;
		isAdd?: boolean;
	};

const Courses: FC<Type> = ({
	role,
	header,
	subCategoryId,
	enrolledUserId,
	ownerId,
	status,
	sortBy,
	isAdd,
}) => {
	return (
		<CoursesGet
			header={header}
			subCategoryId={subCategoryId}
			enrolledUserId={enrolledUserId}
			ownerId={ownerId}
			status={status}
			sortBy={sortBy}
			role={role}
		>
			<SwitchCourses
				role={role}
				header={header}
				isAdd={isAdd}
			/>
		</CoursesGet>
	);
};

const SwitchCourses: FC<Type & CoursesResultType> = ({
	result,
	role,
	refetch,
	isAdd,
}) => {
	switch (role) {
		case UserRoleEnum.USER:
			return <UserCoursesList result={result} />;
		case UserRoleEnum.PRODUCER:
			return (
				<ProducerCoursesList
					result={result}
					refetch={refetch}
					isAdd={isAdd}
				/>
			);
		case UserRoleEnum.ADMIN:
			return <AdminCoursesList result={result} />;
		default:
			return <></>;
	}
};

export default Courses;
