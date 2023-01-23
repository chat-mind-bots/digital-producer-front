import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'Components/UI-KIT/Logo';
import Button from 'Components/UI-KIT/Atoms/Button';
import Colors from 'Colors';
import * as ST from './styled';

type MainProps = {
  children: JSX.Element;
  isRegistration?: boolean;
};

const Main: FC<MainProps> = ({ children, isRegistration }) => (
  <ST.Main>
    <ST.Image>
      <img
        src={'/mainPage.svg'}
        alt="Заставка сайта"
      />
    </ST.Image>
    <ST.Wrapper>
      <ST.Header>
        <ST.WrapperLogo>
          <Link to={'/'}>
            <Logo isMax={true} />
          </Link>
        </ST.WrapperLogo>
        <ST.WrapperButton>
          {isRegistration ? (
            <Link to={'/registration'}>
              <Button
                title={'Регистрация'}
                padding={'10px 14px'}
                fontSize={'16px'}
                lineHeight={'20px'}
                fontWeight={'600'}
                background={Colors.TRANSPARENT}
                color={Colors.BLACK1}
                backgroundAnimation={Colors.BLACK1}
                colorHover={Colors.WHITE}
                width={'max-content'}
              />
            </Link>
          ) : (
            <Link to={'/logIn'}>
              <Button
                title={'Уже есть аккаунт'}
                padding={'10px 14px'}
                fontSize={'16px'}
                lineHeight={'20px'}
                fontWeight={'600'}
                background={Colors.TRANSPARENT}
                color={Colors.BLACK1}
                backgroundAnimation={Colors.BLACK1}
                colorHover={Colors.WHITE}
                width={'max-content'}
              />
            </Link>
          )}
        </ST.WrapperButton>
      </ST.Header>
      <ST.WrapperContent>{children}</ST.WrapperContent>
      <ST.Footer>
        <ST.Name>Пользовательское соглашение</ST.Name>
        <ST.Name>Политика конфидециальности</ST.Name>
      </ST.Footer>
    </ST.Wrapper>
  </ST.Main>
);

export default Main;
