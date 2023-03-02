import { INewsState } from "Shared/News/redux/news.slice";

type NewsResultType = {
	result?: INewsState;
	refetch?: () => void;
};

export default NewsResultType;
