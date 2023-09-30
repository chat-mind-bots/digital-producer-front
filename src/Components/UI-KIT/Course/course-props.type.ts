import { ICourseState } from "Shared/Courses/redux/course.slice";

type CourseResultType = {
	result?: ICourseState;
	refetch?: () => void;
};

export default CourseResultType;
