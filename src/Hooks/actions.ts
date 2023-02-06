import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { courseActions } from "Store/api/course/course.slice";
import { testActions } from "Store/api/test/test.slice";
import { newsActions } from "Store/api/news/news.slice";

const actions = {
	...courseActions,
	...newsActions,
	...testActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(actions, dispatch);
};
