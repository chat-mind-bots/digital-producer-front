import { ICourseState } from "Shared/Courses/redux/course.slice";

import CourseResultType from "../Course/course-props.type";

type CoursesResultType = Pick<CourseResultType, "refetch"> & {
	result?: ICourseState[];
	search?: (q: string) => void;
};

export default CoursesResultType;
