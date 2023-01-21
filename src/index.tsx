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
import NewsView from 'Components/UI-KIT/NewsView';
import LessonView from 'Components/UI-KIT/LessonView';
import Logo from 'Components/UI-KIT/Logo';
import Accordion, { HandleClickType } from 'Components/UI-KIT/Accordion';
import NavBar, { NavBarType } from 'Components/UI-KIT/NavBar';
import { ReactComponent as Main } from 'Icons/NavBar/Main.svg';
import { ReactComponent as MetaCourse } from 'Icons/NavBar/MetaCourses.svg';
import { ReactComponent as MyCourses } from 'Icons/NavBar/MyCourses.svg';
import { ReactComponent as News } from 'Icons/NavBar/News.svg';
import Colors from 'Colors';
import 'index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const breadCrumbsArr: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/Main' },
  { id: 2, name: 'Мои курсы', url: '/myCourses' },
  { id: 3, name: 'Название курса', url: '/courseName' },
  { id: 4, name: 'Урок 1 ', url: '/Course/1' },
];

const array = [
  {
    id: 0,
    name: 'Мышление успешного человека',
    items: [
      {
        id: 0,
        name: 'Работа со страхами',
        isActive: false,
      },
      {
        id: 1,
        name: 'Синдром самозванца',
        isActive: true,
      },
      {
        id: 2,
        name: 'Практика "контроль над мыслями"',
        isActive: false,
      },
      {
        id: 3,
        name: 'Работа со страхами',
        isActive: false,
      },
      {
        id: 4,
        name: 'Аффирмации',
        isActive: false,
      },
    ],
  },
  {
    id: 1,
    name: 'Мышление на миллион',
    items: [
      {
        id: 5,
        name: 'Работа со страхами',
        isActive: false,
      },
      {
        id: 6,
        name: 'Синдром самозванца',
        isActive: false,
      },
      {
        id: 7,
        name: 'Практика "контроль над мыслями"',
        isActive: false,
      },
      {
        id: 8,
        name: 'Работа со страхами',
        isActive: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Выбор и анализ ниши',
    items: [
      {
        id: 9,
        name: 'Работа со страхами',
        isActive: false,
      },
      {
        id: 10,
        name: 'Синдром самозванца',
        isActive: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Визуальная айдентика для эксперта',
    items: [
      {
        id: 11,
        name: 'Работа со страхами',
        isActive: false,
      },
      {
        id: 12,
        name: 'Синдром самозванца',
        isActive: false,
      },
      {
        id: 13,
        name: 'Практика "контроль над мыслями"',
        isActive: false,
      },
      {
        id: 14,
        name: 'Работа со страхами',
        isActive: false,
      },
      {
        id: 15,
        name: 'Аффирмации',
        isActive: false,
      },
      {
        id: 16,
        name: 'Аффирмации',
        isActive: false,
      },
    ],
  },
];

const arrayNav: NavBarType[] = [
  {
    id: 1,
    name: 'Главная',
    count: 10,
    isActive: true,
    svg: <Main />,
  },
  {
    id: 2,
    name: 'Мои курсы',
    count: 12,
    isActive: false,
    svg: <MyCourses />,
  },
  {
    id: 3,
    name: 'Новости',
    count: 15,
    isActive: false,
    svg: <News />,
  },
  {
    id: 4,
    name: 'Курсы meta',
    count: 0,
    isActive: false,
    svg: <MetaCourse />,
  },
];

const f = ({ moduleId, itemId }: HandleClickType) => {
  console.log(moduleId);
  console.log(itemId);
};

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
      <NavBar arrayNav={arrayNav} />
      <Accordion
        array={array}
        handleClick={f}
      />
      <Logo isMax={true} />
      <Logo isMax={false} />
      <LessonView />
      <NewsView />
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
