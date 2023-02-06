import React from 'react';
import RoutesList from 'Router/routesList';
import Err from 'Pages/Err';
import { RouteObject } from 'react-router-dom';
import { RoutesUser } from 'Router/Routes/user.routes';
import { RoutesProducer } from 'Router/Routes/producer.routes';
import { RoutesAdmin } from 'Router/Routes/admin.routes';
import { RoutesAuth } from 'Router/Routes/auth.routes';

export const Router: RouteObject[] = [
  {
    path: RoutesList.HOME,
    element: <></>,
    errorElement: <Err />,
  },
  ...RoutesAuth,
  ...RoutesUser,
  ...RoutesProducer,
  ...RoutesAdmin,
];
