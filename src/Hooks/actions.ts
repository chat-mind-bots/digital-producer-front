import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { testActions } from "Store/api/test/test.slice";

const actions = {
	...testActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(actions, dispatch);
};
