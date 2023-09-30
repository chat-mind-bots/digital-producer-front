import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { useGetUserInfoQuery } from "Shared/Auth/redux/auth.api";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import {
	authActions,
	IAuthUserState,
	initialAuthState,
} from "Shared/Auth/redux/auth.slice";
import { routeBuilder } from "Router/services/route-builder";
import { getUrlByRoleService } from "Shared/Auth/services/get-url-by-role.service";
import { getMainRoleService } from "Shared/Auth/services/get-main-role.service";
import checkAuth from "Utils/CheckAuth";
import Initialization from "Pages/Main/Initialization";

const ParseToken = () => {
	const { token: authTokenParams } = useParams();
	const authTokenFromLocalStorage = checkAuth();
	const navigate = useNavigate();

	const { status, data } = useGetUserInfoQuery(
		authTokenParams ?? authTokenFromLocalStorage ?? ""
	);

	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth);
	const setLogin = (data: IAuthUserState) => {
		dispatch(authActions.login(data));
	};

	useEffect(() => {
		status === QueryStatus.fulfilled && setLogin(data ?? initialAuthState);
	}, [status]);

	useEffect(() => {
		authTokenParams &&
			auth.id &&
			navigate(
				routeBuilder(getUrlByRoleService(getMainRoleService(auth.role)))
			);
	}, [auth.id]);

	return auth.id ? <Outlet /> : <Initialization />;
};
export default ParseToken;
