import React, { FC } from "react";
import { NavBarType } from "Constants/NavBar";
import { Link, useLocation } from "react-router-dom";
import * as ST from "./styled";

export type NavBarProps = {
	arrayNav: NavBarType[];
};

const NavBar: FC<NavBarProps> = ({ arrayNav }) => {
	const location = useLocation();

	return (
		<ST.NavBar>
			{arrayNav.map((item) => (
				<Link
					to={item.url}
					key={`NavBar-item-${item.id}`}
				>
					<ST.Wrapper isActive={location.pathname === item.url}>
						<ST.Name isActive={location.pathname === item.url}>
							{item.svg}
							{item.name}
						</ST.Name>
						{!!item.count && <ST.Count>{item.count}</ST.Count>}
					</ST.Wrapper>
				</Link>
			))}
		</ST.NavBar>
	);
};

export default NavBar;
