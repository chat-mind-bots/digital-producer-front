import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterCabinet, RouterNoAuth } from 'Router';
import { BrowserRouter } from 'react-router-dom';
import '18n.ts';
import 'index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>...loading</div>}>
      <BrowserRouter>
        <RouterCabinet />
        <RouterNoAuth />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
