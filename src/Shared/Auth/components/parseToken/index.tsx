import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserInfoQuery } from 'Shared/Auth/redux/auth.api';
import { useAppDispatch, useAppSelector } from 'Hooks/redux';
import { QueryStatus } from '@reduxjs/toolkit/query';
import {
  authActions,
  IAuthUserState,
  initialAuthState,
} from 'Shared/Auth/redux/auth.slice';
import { routeBuilder } from 'Router/services/route-builder';
import { getUrlByRoleService } from 'Shared/Auth/services/get-url-by-role.service';
import { getMainRoleService } from 'Shared/Auth/services/get-main-role.service';

export default function () {
  const { token: authTokenParams } = useParams();
  const navigate = useNavigate();

  const { status, data } = useGetUserInfoQuery(authTokenParams ?? '');

  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const setLogin = (data: IAuthUserState) => {
    dispatch(authActions.login(data));
  };

  useEffect(() => {
    status === QueryStatus.fulfilled && setLogin(data ?? initialAuthState);
  }, [status]);

  useEffect(() => {
    auth.id &&
      navigate(
        routeBuilder(getUrlByRoleService(getMainRoleService(auth.role)))
      );
  }, [auth.id]);

  return <></>;
}
