import RequestStatuses from "../RequestStatuses";

type RequestStatusesType =
	| RequestStatuses.UNAUTHORIZED
	| RequestStatuses.SUCCESS
	| RequestStatuses.PENDING;

export default RequestStatusesType;
