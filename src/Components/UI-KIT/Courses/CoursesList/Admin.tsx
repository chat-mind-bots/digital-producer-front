import React, { FC } from "react";
import { Link } from "react-router-dom";

import CoursesResultType from "../courses-props.type";
import CourseCard from "./CourseCard";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import * as ST from "./styled";

const AdminCoursesList: FC<CoursesResultType> = ({ result }) => {
	return (
		<ST.CoursesList>
			{result &&
				result.map((course) => (
					<Link
						to={routeBuilderWithReplace(
							[RoutesList.ADMIN, RoutesList.COURSE_ID],
							"id",
							course.id
						)}
						key={`AdminCoursesList-${course.id}`}
					>
						<CourseCard {...course} />
					</Link>
				))}
		</ST.CoursesList>
	);
};

export default AdminCoursesList;
