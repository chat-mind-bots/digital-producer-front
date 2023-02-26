import { ICourseState } from "Shared/Courses/redux/course.slice";

import CourseResultType from "../Course/course-props.type";

type CoursesResultType = Pick<CourseResultType, "refetch"> & {
	result?: ICourseState[];
};

export default CoursesResultType;
