import { CoursesStatuses } from "../Shared/Courses/redux/course.api";

const StatusCourseToText = (status: CoursesStatuses): string => {
	switch (status) {
		case CoursesStatuses.NOT_ACTIVE:
			return "Курс заблокирован.";
		case CoursesStatuses.APPROVED:
			return "Курс прошел модерацию и ожидает публикации, для публикации нажмите на кнопку где есть описание 'Курс опубликован.'";
		case CoursesStatuses.IN_REVIEW:
			return "Курс находится на проверке у модератора, при данном статусе редактированние курса невозможно, подождите когда курс пройдет модерацию.";
		case CoursesStatuses.AVAILABLE:
			return "Курс опубликован, пользователи могут начать или продолжать прохождение.";
		case CoursesStatuses.IN_PROGRESS:
			return "Курс находится в работе, или на доработке.";
		default:
			return "";
	}
};

export default StatusCourseToText;
