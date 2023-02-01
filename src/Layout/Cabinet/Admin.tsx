import { FC } from 'react';
import Header from 'Components/Header';
import LeftBar from 'Components/LeftBar/Admin';
import * as ST from './styled';

type CabinetProps = {
  children: JSX.Element;
};

const Cabinet: FC<CabinetProps> = ({ children }) => (
  <>
    <ST.Cabinet>
      <LeftBar />
    </ST.Cabinet>
    <ST.Wrapper>
      <Header />
      <ST.Content>{children}</ST.Content>
    </ST.Wrapper>
  </>
);

export default Cabinet;
