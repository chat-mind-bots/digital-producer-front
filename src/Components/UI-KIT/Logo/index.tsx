import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'Icons/Logo.svg';
import { ReactComponent as LogoIconMax } from 'Icons/LogoMax.svg';
import * as ST from './styled';

type LogoProps = {
  isMax: boolean;
};

const Logo: FC<LogoProps> = ({ isMax }) => (
  <Link to={'/'}>
    <ST.Logo>{isMax ? <LogoIconMax /> : <LogoIcon />}</ST.Logo>
  </Link>
);

export default Logo;
