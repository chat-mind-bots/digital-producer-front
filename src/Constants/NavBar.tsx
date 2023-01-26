import MainComponent from 'Pages/Cabinet/Main';
import CoursesComponent from 'Pages/Cabinet/Courses';
import NewsComponent from 'Pages/Cabinet/News';
import MetaCoursesComponent from 'Pages/Cabinet/MetaCourses';
import { ReactComponent as Main } from 'Icons/NavBar/Main.svg';
import { ReactComponent as MyCourses } from 'Icons/NavBar/MyCourses.svg';
import { ReactComponent as News } from 'Icons/NavBar/News.svg';
import { ReactComponent as MetaCourses } from 'Icons/NavBar/MetaCourses.svg';

export type NavBarType = {
  id: number;
  name: string;
  count: number;
  svg: JSX.Element;
  url: string;
  element: JSX.Element;
};

const NavBarData: NavBarType[] = [
  {
    id: 1,
    name: 'Главная',
    count: 10,
    url: '/main',
    svg: <Main />,
    element: <MainComponent />,
  },
  {
    id: 2,
    name: 'Мои курсы',
    count: 0,
    url: '/courses',
    svg: <MyCourses />,
    element: <CoursesComponent />,
  },
  {
    id: 3,
    name: 'Новости',
    count: 0,
    url: '/news',
    svg: <News />,
    element: <NewsComponent />,
  },
  {
    id: 4,
    name: 'Курсы meta',
    count: 0,
    url: '/metaCourses',
    svg: <MetaCourses />,
    element: <MetaCoursesComponent />,
  },
];

export default NavBarData;
