interface StatusCodeType {
	statusCode?: number;
}

type FetchBaseQueryMeta = { request: Request; response?: Response } | undefined;

export const setStatusToDtoService = <T extends StatusCodeType>(
	response: T,
	meta: FetchBaseQueryMeta
): T => {
	if (meta && meta.response) response.statusCode = meta.response.status;

	return response;
};

export const removeStatusToDtoService = <T extends StatusCodeType>(
	response: T
): T => {
	delete response.statusCode;

	return response;
};
