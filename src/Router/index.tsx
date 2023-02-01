import React from 'react';
import LogIn from 'Pages/Main/LogIn';
import Registration from 'Pages/Main/Registration';
import Home from 'Pages/Main/Home';
import Main from 'Layout/Main';
import RoutesList from 'Router/routesList';
import PrivateRouteAuth from './PrivateRoute/PrivateRouteAuth';
import Err from 'Pages/Err';
import Cabinet from 'Layout/Cabinet';
import MainCabinet from 'Pages/Cabinet/Main';
import CoursesCabinet from 'Pages/Cabinet/Courses';
import NewsCabinet from 'Pages/Cabinet/News';
import MetaCoursesCabinet from 'Pages/Cabinet/MetaCourses';
import NewsIdCabinet from 'Pages/Cabinet/NewsId';
import CourseIdCabinet from 'Pages/Cabinet/CourseId';
import TestIdCabinet from 'Pages/Cabinet/TestId';
import CabinetProducer from 'Layout/Cabinet/Producer';
import CabinetAdmin from 'Layout/Cabinet/Admin';
import MainCabinetProducer from 'Pages/Cabinet/Main/Producer';
import CoursesCabinetProducer from 'Pages/Cabinet/Courses/Producer';
import NewsCabinetProducer from 'Pages/Cabinet/News/Producer';
import MetaCoursesCabinetProducer from 'Pages/Cabinet/MetaCourses/Producer';
import NewsIdCabinetProducer from 'Pages/Cabinet/NewsId/Producer';
import CourseIdCabinetProducer from 'Pages/Cabinet/CourseId/Producer';
import TestIdCabinetProducer from 'Pages/Cabinet/TestId/Producer';
import MainCabinetAdmin from 'Pages/Cabinet/Main/Admin';
import CoursesCabinetAdmin from 'Pages/Cabinet/Courses/Admin';
import NewsCabinetAdmin from 'Pages/Cabinet/News/Admin';
import MetaCoursesCabinetAdmin from 'Pages/Cabinet/MetaCourses/Admin';
import NewsIdCabinetAdmin from 'Pages/Cabinet/NewsId/Admin';
import CourseIdCabinetAdmin from 'Pages/Cabinet/CourseId/Admin';
import TestIdCabinetAdmin from 'Pages/Cabinet/TestId/Admin';

export const RoutersCabinetUser = [
  {
    path: RoutesList.HOME,
    element: <PrivateRouteAuth />,
    children: [
      {
        path: RoutesList.MAIN,
        errorElement: (
          <Cabinet>
            <Err />
          </Cabinet>
        ),
        element: (
          <Cabinet>
            <MainCabinet />
          </Cabinet>
        ),
      },
      {
        errorElement: (
          <Cabinet>
            <Err />
          </Cabinet>
        ),
        path: RoutesList.COURSES,
        element: (
          <Cabinet>
            <CoursesCabinet />
          </Cabinet>
        ),
      },
      {
        errorElement: (
          <Cabinet>
            <Err />
          </Cabinet>
        ),
        path: RoutesList.NEWS,
        element: (
          <Cabinet>
            <NewsCabinet />
          </Cabinet>
        ),
      },
      {
        errorElement: (
          <Cabinet>
            <Err />
          </Cabinet>
        ),
        path: RoutesList.META_COURSES,
        element: (
          <Cabinet>
            <MetaCoursesCabinet />
          </Cabinet>
        ),
      },
      {
        errorElement: (
          <Cabinet>
            <Err />
          </Cabinet>
        ),
        path: `${RoutesList.NEWS_ID}:id`,
        element: (
          <Cabinet>
            <NewsIdCabinet />
          </Cabinet>
        ),
      },
      {
        errorElement: (
          <Cabinet>
            <Err />
          </Cabinet>
        ),
        path: `${RoutesList.COURSE_ID}:id`,
        element: (
          <Cabinet>
            <CourseIdCabinet />
          </Cabinet>
        ),
      },
      {
        errorElement: (
          <Cabinet>
            <Err />
          </Cabinet>
        ),
        path: `${RoutesList.TEST_ID}:id`,
        element: (
          <Cabinet>
            <TestIdCabinet />
          </Cabinet>
        ),
      },
    ],
  },
];

export const RoutersCabinetProducer = [
  {
    path: RoutesList.HOME,
    element: <PrivateRouteAuth />,
    errorElement: <Err />,
    children: [
      {
        errorElement: (
          <CabinetProducer>
            <Err />
          </CabinetProducer>
        ),
        children: [
          {
            path: RoutesList.PRODUCER_MAIN,
            element: (
              <CabinetProducer>
                <MainCabinetProducer />
              </CabinetProducer>
            ),
          },
        ],
      },
      {
        errorElement: <Err />,
        children: [
          {
            path: RoutesList.PRODUCER_COURSES,
            element: (
              <CabinetProducer>
                <CoursesCabinetProducer />
              </CabinetProducer>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetProducer>
            <Err />
          </CabinetProducer>
        ),
        children: [
          {
            path: RoutesList.PRODUCER_NEWS,
            element: (
              <CabinetProducer>
                <NewsCabinetProducer />
              </CabinetProducer>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetProducer>
            <Err />
          </CabinetProducer>
        ),
        children: [
          {
            path: RoutesList.PRODUCER_META_COURSES,
            element: (
              <CabinetProducer>
                <MetaCoursesCabinetProducer />
              </CabinetProducer>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetProducer>
            <Err />
          </CabinetProducer>
        ),
        children: [
          {
            path: `${RoutesList.PRODUCER_NEWS_ID}:id`,
            element: (
              <CabinetProducer>
                <NewsIdCabinetProducer />
              </CabinetProducer>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetProducer>
            <Err />
          </CabinetProducer>
        ),
        children: [
          {
            path: `${RoutesList.PRODUCER_COURSE_ID}:id`,
            element: (
              <CabinetProducer>
                <CourseIdCabinetProducer />
              </CabinetProducer>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetProducer>
            <Err />
          </CabinetProducer>
        ),
        children: [
          {
            path: `${RoutesList.PRODUCER_TEST_ID}:id`,
            element: (
              <CabinetProducer>
                <TestIdCabinetProducer />
              </CabinetProducer>
            ),
          },
        ],
      },
    ],
  },
];

export const RoutersNoAuth = [
  {
    path: RoutesList.HOME,
    element: <PrivateRouteAuth />,
    errorElement: <Err />,
    children: [
      {
        errorElement: <Err />,
        children: [
          {
            path: RoutesList.HOME,
            element: (
              <Main>
                <Home />
              </Main>
            ),
          },
        ],
      },
      {
        errorElement: <Err />,
        children: [
          {
            path: RoutesList.REGISTRATION,
            element: (
              <Main isRegistration={false}>
                <Registration />
              </Main>
            ),
          },
        ],
      },
      {
        errorElement: <Err />,
        children: [
          {
            path: RoutesList.LOGIN,
            element: (
              <Main isRegistration={true}>
                <LogIn />
              </Main>
            ),
          },
        ],
      },
    ],
  },
];

export const RoutersCabinetAdmin = [
  {
    path: RoutesList.HOME,
    element: <PrivateRouteAuth />,
    errorElement: <Err />,
    children: [
      {
        errorElement: (
          <CabinetAdmin>
            <Err />
          </CabinetAdmin>
        ),
        children: [
          {
            path: RoutesList.ADMIN_MAIN,
            element: (
              <CabinetAdmin>
                <MainCabinetAdmin />
              </CabinetAdmin>
            ),
          },
        ],
      },
      {
        errorElement: <Err />,
        children: [
          {
            path: RoutesList.ADMIN_COURSES,
            element: (
              <CabinetAdmin>
                <CoursesCabinetAdmin />
              </CabinetAdmin>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetAdmin>
            <Err />
          </CabinetAdmin>
        ),
        children: [
          {
            path: RoutesList.ADMIN_NEWS,
            element: (
              <CabinetAdmin>
                <NewsCabinetAdmin />
              </CabinetAdmin>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetAdmin>
            <Err />
          </CabinetAdmin>
        ),
        children: [
          {
            path: RoutesList.ADMIN_META_COURSES,
            element: (
              <CabinetAdmin>
                <MetaCoursesCabinetAdmin />
              </CabinetAdmin>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetAdmin>
            <Err />
          </CabinetAdmin>
        ),
        children: [
          {
            path: `${RoutesList.ADMIN_NEWS_ID}:id`,
            element: (
              <CabinetAdmin>
                <NewsIdCabinetAdmin />
              </CabinetAdmin>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetAdmin>
            <Err />
          </CabinetAdmin>
        ),
        children: [
          {
            path: `${RoutesList.ADMIN_COURSE_ID}:id`,
            element: (
              <CabinetAdmin>
                <CourseIdCabinetAdmin />
              </CabinetAdmin>
            ),
          },
        ],
      },
      {
        errorElement: (
          <CabinetAdmin>
            <Err />
          </CabinetAdmin>
        ),
        children: [
          {
            path: `${RoutesList.ADMIN_TEST_ID}:id`,
            element: (
              <CabinetAdmin>
                <TestIdCabinetAdmin />
              </CabinetAdmin>
            ),
          },
        ],
      },
    ],
  },
];
