import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './18n.ts';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>...loading</div>}>
      <Router />
    </Suspense>
  </React.StrictMode>
);
