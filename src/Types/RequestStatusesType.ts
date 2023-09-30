import RequestStatuses from "../Constants/RequestStatuses";

type RequestStatusesType =
	| RequestStatuses.UNAUTHORIZED
	| RequestStatuses.SUCCESS
	| RequestStatuses.PENDING;

export default RequestStatusesType;
