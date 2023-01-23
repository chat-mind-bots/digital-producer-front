import MainComponent from 'Pages/Main';
import CoursesComponent from 'Pages/Courses';
import NewsComponent from 'Pages/News';
import { ReactComponent as Main } from 'Icons/NavBar/Main.svg';
import { ReactComponent as MyCourses } from 'Icons/NavBar/MyCourses.svg';
import { ReactComponent as News } from 'Icons/NavBar/News.svg';

export type NavBarType = {
  id: number;
  name: string;
  count: number;
  isActive: boolean;
  svg: JSX.Element;
  url: string;
  element: JSX.Element;
};

const NavBarData: NavBarType[] = [
  {
    id: 1,
    name: 'Главная',
    count: 10,
    isActive: true,
    url: '/main',
    svg: <Main />,
    element: <MainComponent />,
  },
  {
    id: 2,
    name: 'Мои курсы',
    count: 0,
    isActive: false,
    url: '/courses',
    svg: <MyCourses />,
    element: <CoursesComponent />,
  },
  {
    id: 3,
    name: 'Новости',
    count: 0,
    isActive: false,
    url: '/news',
    svg: <News />,
    element: <NewsComponent />,
  },
];

export default NavBarData;
