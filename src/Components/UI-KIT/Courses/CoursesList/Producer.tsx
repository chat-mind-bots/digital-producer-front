import React, { FC } from "react";
import { Link } from "react-router-dom";

import CoursesResultType from "../courses-props.type";
import CourseCard from "./CourseCard";
import { CourseCreate } from "../../../../Shared/Courses/components/CourseSet/create";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import * as ST from "./styled";

const ProducerCoursesList: FC<CoursesResultType> = ({ result, refetch }) => {
	return (
		<ST.CoursesList>
			<CourseCreate refetch={refetch} />
			{result &&
				result.map((course) => (
					<Link
						to={routeBuilderWithReplace(
							[RoutesList.PRODUCER, RoutesList.COURSE_ID],
							"id",
							course.id
						)}
						key={`ProducerCoursesList-${course.id}`}
					>
						<CourseCard {...course} />
					</Link>
				))}
		</ST.CoursesList>
	);
};

export default ProducerCoursesList;
