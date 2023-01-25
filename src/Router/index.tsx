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
import LectorCard from 'Components/UI-KIT/LectorCard';
import { ReactComponent as IconForNewsView } from 'Icons/IconForNewsView.svg';
import TestCard from 'Components/UI-KIT/TestCard';

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
            <LectorCard
              name={'Жульен Николаевич А'}
              description={'Самый лучший на планете'}
              img={<IconForNewsView />}
            />
          </Cabinet>
        }
      />
      <Route
        path="/testCard"
        element={
          <Cabinet>
            <TestCard
              title={'Выбор и анализ ниши'}
              description={
                'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
              }
              levelDifficulty={2}
              time={'10 часов'}
              date={'29 февраля 2093'}
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
