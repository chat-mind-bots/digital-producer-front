enum RoutesList {
	NOT_FOUND = "*",
	MAIN = "/",
	HOME = "",
	// USELESS TODO need remove
	LOGIN = "/login",
	REGISTRATION = "/registration",
	NO_AUTH = "/no_auth",

	COURSES = "course",
	NEWS = "news",
	META_COURSES = "metaCourses",
	COURSES_REVIEW = "reviewCourses",
	DOCUMENT_ID = "document/:id",
	NEWS_ID = "news/:id",
	COURSE_ID = "course/:id",
	TEST_ID = "test/:id",
	BANNERS = "banners",
	TEXT_EDITOR = "textEditor",
	CATEGORIES = "categories",
	USERS = "users",

	// USER
	USER = "user",
	//   PRODUCER
	PRODUCER = "producer",

	//   ADMIN
	ADMIN = "admin",

	// AUTH
	AUTH = "/auth",
	TOKEN = ":token",

	// SUPER ADMIN
	SUPER_ADMIN = "super",
}

export default RoutesList;
