import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'Store';
import Loader from './Components/UI-KIT/Loader';
import {
  RoutersCabinetProducer,
  RoutersCabinetUser,
  RoutersNoAuth,
  RoutersCabinetAdmin,
} from './Router';
import '18n.ts';
import 'index.css';
import 'style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  ...RoutersNoAuth,
  ...RoutersCabinetUser,
  ...RoutersCabinetProducer,
  ...RoutersCabinetAdmin,
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
        {/*<CreateCourse />*/}
      </Suspense>
    </Provider>
  </React.StrictMode>
);
