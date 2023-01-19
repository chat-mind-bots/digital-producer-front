import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'Router';
import '18n.ts';
import AddBlock from 'Components/UI-KIT/AddBlock';
import CourseCard from 'Components/UI-KIT/CourseCard';
import NewsBanner from 'Components/UI-KIT/NewsBanner';
import Insights from 'Components/UI-KIT/Insights';
import Button from 'Components/UI-KIT/Atoms/Button';
import BlockAllCoursesPlatform from 'Components/UI-KIT/BlockAllCoursesPlatform';
import NewsCard from 'Components/UI-KIT/NewsCard';
import BreadCrumbs, {
  BreadCrumbsArrayType,
} from 'Components/UI-KIT/BreadCrumbs';
import AuthBlock from 'Components/UI-KIT/AuthBlock';
import Colors from 'Colors';
import 'index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const breadCrumbsArr: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/Main' },
  { id: 1, name: 'Мои курсы', url: '/myCourses' },
  { id: 1, name: 'Название курса', url: '/courseName' },
  { id: 1, name: 'Урок 1 ', url: '/Course/1' },
];

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>...loading</div>}>
      <Button
        title={'Читать статью'}
        padding={'11px 28px'}
        fontSize={'14px'}
        lineHeight={'20px'}
        fontWeight={'600'}
        background={Colors.BLUE}
        color={Colors.WHITE}
        backgroundAnimation={Colors.BLUE_DARK}
        colorHover={Colors.WHITE}
        width={'max-content'}
      />
      <Button
        title={'Читать статью'}
        padding={'13px 23px'}
        fontSize={'14px'}
        lineHeight={'20px'}
        fontWeight={'600'}
        background={Colors.TRANSPARENT}
        color={Colors.BLACK1}
        backgroundAnimation={Colors.BLACK1}
        colorHover={Colors.WHITE}
        border={`2px solid ${Colors.BLACK1}`}
        width={'max-content'}
      />
      <AuthBlock />
      <BreadCrumbs array={breadCrumbsArr} />
      <AuthBlock />
      <NewsCard />
      <BlockAllCoursesPlatform />
      <Insights />
      <NewsBanner />
      <CourseCard />
      <AddBlock />
      <Router />
    </Suspense>
  </React.StrictMode>
);
