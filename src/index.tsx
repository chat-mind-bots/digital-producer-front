import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './18n.ts';
import AddBlock from 'Components/UI-KIT/AddBlock';
import CourseCard from 'Components/UI-KIT/CourseCard';
import CardNews from './Components/UI-KIT/CardNews';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>...loading</div>}>
      <CardNews />
      <CourseCard />
      <AddBlock />
      <Router />
    </Suspense>
  </React.StrictMode>
);
