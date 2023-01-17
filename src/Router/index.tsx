import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'Pages/Main';
import Courses from 'Pages/Courses';
import CourseId from 'Pages/CourseId';
import Auth from 'Pages/Auth';
import PrivateRouteAnother from './PrivateRoute/PrivateRouteAnother';
import PrivateRouteAuth from './PrivateRoute/PrivateRouteAuth';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PrivateRouteAnother />}>
        <Route
          path="/courses"
          element={<Courses />}
        />
        <Route
          path="/main"
          element={<Main />}
        />
        <Route
          path="/course/id"
          element={<CourseId />}
        />
      </Route>
      <Route element={<PrivateRouteAuth />}>
        <Route
          path="/auth"
          element={<Auth />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
