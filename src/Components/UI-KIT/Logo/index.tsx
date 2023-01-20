import React, { FC } from 'react';
import { ReactComponent as LogoIcon } from 'Icons/Logo.svg';
import { ReactComponent as LogoIconMax } from 'Icons/LogoMax.svg';
import * as ST from './styled';

type LogoProps = {
  isMax: boolean;
};

const Logo: FC<LogoProps> = ({ isMax }) => (
  <ST.Logo>{isMax ? <LogoIconMax /> : <LogoIcon />}</ST.Logo>
);

export default Logo;
