import { INewsState } from "Shared/News/redux/news.slice";

import NewsResultType from "../Course/course-props.type";

type NewsesResultType = Pick<NewsResultType, "refetch"> & {
	result?: INewsState[];
};

export default NewsesResultType;
