import { Route, Routes } from 'react-router-dom';
import CourseId from 'Pages/Cabinet/CourseId';
import PrivateRouteAnother from 'Router/PrivateRoute/PrivateRouteAnother';
import LogIn from 'Pages/Main/LogIn';
import Registration from 'Pages/Main/Registration';
import Home from 'Pages/Main/Home';
import Test from 'Pages/Cabinet/Test';
import Main from 'Layout/Main';
import Cabinet from 'Layout/Cabinet';
import NewsId from 'Pages/Cabinet/NewsId';
import NavBarData from 'Constants/NavBar';
import RoutesList from 'Router/routesList';
import { NewsIdData } from 'Types/NewsId';
import { CourseIdData } from 'Types/CourseId';
import { TestIdData } from 'Types/TestId';

export const RouterCabinet = () => (
  <Routes>
    <Route element={<PrivateRouteAnother />}>
      {NavBarData.map((item) => (
        <Route
          path={item.url}
          element={<Cabinet>{item.element}</Cabinet>}
          key={`Route-main-page-${item.id}`}
        />
      ))}
      <Route
        path={`${RoutesList.NEWS_ID}:id`}
        element={
          <Cabinet>
            <NewsId {...NewsIdData} />
          </Cabinet>
        }
      />
      <Route
        path={`${RoutesList.COURSE_ID}:id`}
        element={
          <Cabinet>
            <CourseId {...CourseIdData} />
          </Cabinet>
        }
      />
      <Route
        path={`${RoutesList.TEST_ID}id`}
        element={
          <Cabinet>
            <Test {...TestIdData} />
          </Cabinet>
        }
      />
    </Route>
  </Routes>
);

export const RouterNoAuth = () => (
  <Routes>
    <Route
      path={RoutesList.LOGIN}
      element={
        <Main isRegistration={true}>
          <LogIn />
        </Main>
      }
    />
    <Route
      path={RoutesList.REGISTRATION}
      element={
        <Main isRegistration={false}>
          <Registration />
        </Main>
      }
    />
    <Route
      path="/"
      element={
        <Main isRegistration={true}>
          <Home />
        </Main>
      }
    />
  </Routes>
);
