import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterCabinet, RouterNoAuth } from 'Router';
import { BrowserRouter } from 'react-router-dom';
import Cabinet from 'Layout/Cabinet';
import '18n.ts';
import 'index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>...loading</div>}>
      <BrowserRouter>
        <Cabinet>
          <RouterCabinet />
        </Cabinet>
      </BrowserRouter>
      <BrowserRouter>
        <RouterNoAuth />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
