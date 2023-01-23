import { FC } from 'react';
import Header from 'Components/Header';
import LeftBar from 'Components/LeftBar';
import * as ST from './styled';

type CabinetProps = {
  children: JSX.Element;
};

const Cabinet: FC<CabinetProps> = ({ children }) => {
  return (
    <>
      <ST.Cabinet>
        <LeftBar />
      </ST.Cabinet>
      <ST.Wrapper>
        <Header />
        <ST.WrapperContent>{children}</ST.WrapperContent>
      </ST.Wrapper>
    </>
  );
};

export default Cabinet;
