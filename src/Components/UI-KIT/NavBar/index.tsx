import React, { FC } from 'react';
import * as ST from './styled';

export type NavBarProps = {
  arrayNav: NavBarType[];
};

export type NavBarType = {
  id: number;
  name: string;
  count: number;
  isActive: boolean;
  svg: JSX.Element;
};

const NavBar: FC<NavBarProps> = ({ arrayNav }) => (
  <ST.NavBar>
    {arrayNav.map((item) => (
      <ST.Wrapper isActive={item.isActive}>
        <ST.Name isActive={item.isActive}>
          {item.svg}
          {item.name}
        </ST.Name>
        {!!item.count && <ST.Count>{item.count}</ST.Count>}
      </ST.Wrapper>
    ))}
  </ST.NavBar>
);

export default NavBar;
