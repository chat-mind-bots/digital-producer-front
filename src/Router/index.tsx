import { Route, Routes } from 'react-router-dom';
import CourseId from 'Pages/CourseId';
import Auth from 'Pages/Auth';
import Updates from 'Pages/Updates';
import PrivateRouteAnother from 'Router/PrivateRoute/PrivateRouteAnother';
import NavBarData from 'Constants/NavBar';

export const RouterCabinet = () => (
  <Routes>
    <Route element={<PrivateRouteAnother />}>
      {NavBarData.map((item) => (
        <Route
          path={item.url}
          element={item.element}
          key={`Route-main-page-${item.id}`}
        />
      ))}

      <Route
        path="/news/:id"
        element={<Updates />}
      />
      <Route
        path="/course/:id"
        element={<CourseId />}
      />
    </Route>
  </Routes>
);

export const RouterNoAuth = () => (
  <Routes>
    <Route
      path="/auth"
      element={<Auth />}
    />
  </Routes>
);
