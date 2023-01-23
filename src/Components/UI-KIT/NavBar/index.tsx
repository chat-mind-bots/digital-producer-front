import React, { FC } from 'react';
import { NavBarType } from 'Constants/NavBar';
import { Link } from 'react-router-dom';
import * as ST from './styled';

export type NavBarProps = {
  arrayNav: NavBarType[];
};

const NavBar: FC<NavBarProps> = ({ arrayNav }) => (
  <ST.NavBar>
    {arrayNav.map((item) => (
      <Link
        to={item.url}
        key={`NavBar-item-${item.id}`}
      >
        <ST.Wrapper isActive={item.isActive}>
          <ST.Name isActive={item.isActive}>
            {item.svg}
            {item.name}
          </ST.Name>
          {!!item.count && <ST.Count>{item.count}</ST.Count>}
        </ST.Wrapper>
      </Link>
    ))}
  </ST.NavBar>
);

export default NavBar;
