interface ServerResponse<T> {
	count?: number; // удалить это после того как полностью перейдем на Shared
	pageCount?: number; // удалить это после того как полностью перейдем на Shared
	currentPage?: number; // удалить это после того как полностью перейдем на Shared
	total?: number; // сделать обязательным после того как полностью перейдем на Shared
	statusCode?: number; // сделать обязательным после того как полностью перейдем на Shared
	data: T;
}

export default ServerResponse;
