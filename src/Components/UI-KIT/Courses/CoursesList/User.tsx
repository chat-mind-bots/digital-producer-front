import React, { FC } from "react";
import { Link } from "react-router-dom";

import CoursesResultType from "../courses-props.type";
import CourseCard from "./CourseCard";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import * as ST from "./styled";

const UserCoursesList: FC<CoursesResultType> = ({ result }) => {
	return (
		<ST.CoursesList>
			{result &&
				result.map((course) => (
					<Link
						to={routeBuilderWithReplace(
							[RoutesList.USER, RoutesList.COURSE_ID],
							"id",
							course.id
						)}
						key={`UserCoursesList-${course.id}`}
					>
						<CourseCard {...course} />
					</Link>
				))}
		</ST.CoursesList>
	);
};

export default UserCoursesList;
