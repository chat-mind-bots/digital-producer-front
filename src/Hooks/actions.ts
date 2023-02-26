import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { testActions } from "Store/api/test/test.slice";
import { newsActions } from "Store/api/news/news.slice";

const actions = {
	...newsActions,
	...testActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(actions, dispatch);
};
