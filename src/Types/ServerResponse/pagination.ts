export interface ServerResponse<T> {
	count: number;
	pageCount: number;
	currentPage: number;
	data: T;
}

export default ServerResponse;
