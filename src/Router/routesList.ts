enum RoutesList {
	HOME = "",
	// USELESS TODO need remove
	LOGIN = "/login",
	REGISTRATION = "/registration",

	COURSES = "courses",
	NEWS = "news",
	META_COURSES = "metaCourses",
	DOCUMENT_ID = "document/:id",
	NEWS_ID = "news/:id",
	COURSE_ID = "course/:id",
	TEST_ID = "test/:id",

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
