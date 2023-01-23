import { ReactComponent as Main } from 'Icons/NavBar/Main.svg';
import { ReactComponent as MetaCourse } from 'Icons/NavBar/MetaCourses.svg';
import { ReactComponent as MyCourses } from 'Icons/NavBar/MyCourses.svg';
import { ReactComponent as News } from 'Icons/NavBar/News.svg';
import Logo from 'Components/UI-KIT/Logo';
import NavBar, { NavBarType } from 'Components/UI-KIT/NavBar';
import BlockAllCoursesPlatform from 'Components/UI-KIT/BlockAllCoursesPlatform';
import * as ST from './styled';

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
    count: 0,
    isActive: false,
    svg: <MyCourses />,
  },
  {
    id: 3,
    name: 'Новости',
    count: 0,
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

const LeftBar = () => (
  <ST.LeftBar>
    <ST.WrapperInfo>
      <Logo isMax={false} />
      <ST.Sections>Разделы платформы</ST.Sections>
      <NavBar arrayNav={arrayNav} />
    </ST.WrapperInfo>
    <BlockAllCoursesPlatform />
  </ST.LeftBar>
);

export default LeftBar;
