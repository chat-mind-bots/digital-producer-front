import { Link } from 'react-router-dom';
import Button from 'Components/UI-KIT/Atoms/Button';
import RoutesList from 'Router/routesList';
import Colors from 'Colors';
import * as ST from './styled';

const Home = () => (
  <ST.Home>
    <ST.Title>Платформа для создания и продажи онлайн-курсов</ST.Title>
    <ST.Description>
      Самые последние и актуальные новости и обновления платформы
    </ST.Description>
    <ST.Buttons>
      <Link to={RoutesList.MAIN}>
        <Button
          title={'Попробовать бесплатно'}
          padding={'18px 24px'}
          fontSize={'16px'}
          lineHeight={'20px'}
          fontWeight={'600'}
          background={Colors.BLUE}
          color={Colors.WHITE}
          backgroundAnimation={Colors.BLUE_DARK}
          colorHover={Colors.WHITE}
          width={'max-content'}
        />
      </Link>
      <Button
        title={'О платформе'}
        padding={'18px 24px'}
        fontSize={'16px'}
        lineHeight={'20px'}
        fontWeight={'600'}
        background={Colors.TRANSPARENT}
        color={Colors.BLACK1}
        backgroundAnimation={Colors.BLACK1}
        colorHover={Colors.WHITE}
        border={`2px solid ${Colors.BLACK1}`}
        width={'max-content'}
      />
    </ST.Buttons>
  </ST.Home>
);

export default Home;
