import Logo from 'Components/UI-KIT/Logo';
import NavBar from 'Components/UI-KIT/NavBar';
import BlockAllCoursesPlatform from 'Components/UI-KIT/BlockAllCoursesPlatform';
import NavBarData from 'Constants/NavBar';
import RoutesList from 'Router/routesList';
import * as ST from './styled';

const LeftBar = () => (
  <ST.LeftBar>
    <ST.WrapperInfo>
      <Logo isMax={false} />
      <ST.Sections>Разделы платформы</ST.Sections>
      <NavBar arrayNav={NavBarData} />
    </ST.WrapperInfo>
    <BlockAllCoursesPlatform
      textButton={'Курсы платформы'}
      urlButton={RoutesList.META_COURSES}
      styleButton={''}
    />
  </ST.LeftBar>
);

export default LeftBar;
