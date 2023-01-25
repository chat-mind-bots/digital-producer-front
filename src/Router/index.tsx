import { Route, Routes } from 'react-router-dom';
import CourseId from 'Pages/Cabinet/CourseId';
import News from 'Pages/Cabinet/NewsId';
import PrivateRouteAnother from 'Router/PrivateRoute/PrivateRouteAnother';
import LogIn from 'Pages/Main/LogIn';
import Registration from 'Pages/Main/Registration';
import Home from 'Pages/Main/Home';
import Test from 'Pages/Cabinet/Test';
import Main from 'Layout/Main';
import Cabinet from 'Layout/Cabinet';
import NavBarData from 'Constants/NavBar';
import Lector from 'Components/UI-KIT/Lector';
import { ReactComponent as IconForNewsView } from 'Icons/IconForNewsView.svg';

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
        path="/news/:id"
        element={
          <Cabinet>
            <News />
          </Cabinet>
        }
      />
      <Route
        path="/course/:id"
        element={
          <Cabinet>
            <CourseId />
          </Cabinet>
        }
      />
      <Route
        path="/lector/:id"
        element={
          <Cabinet>
            <Lector
              name={'Жульен Николаевич А'}
              description={'Самый лучший на планете'}
              svg={<IconForNewsView />}
            />
          </Cabinet>
        }
      />
      <Route
        path="/test/:id"
        element={
          <Cabinet>
            <Test
              description={
                'Хронические интоксикации - "потайной" краеугольный камень в\n' +
                'фундаменте болезней цивилизации. Полисистемная детоксификация, как\n' +
                'универсальный и высокоэффективный терапевтический инструмент".'
              }
            />
          </Cabinet>
        }
      />
    </Route>
  </Routes>
);

export const RouterNoAuth = () => (
  <Routes>
    <Route
      path="/logIn"
      element={
        <Main isRegistration={true}>
          <LogIn />
        </Main>
      }
    />
    <Route
      path="/registration"
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
