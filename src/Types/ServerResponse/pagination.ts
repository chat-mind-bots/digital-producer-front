interface ServerResponse<T> {
	count: number;
	pageCount: number;
	currentPage: number;
	total: number;
	statusCode: number;
	data: T;
}

export default ServerResponse;
