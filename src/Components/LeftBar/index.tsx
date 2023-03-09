import React, { useState } from "react";

import Logo from "Components/UI-KIT/Logo";
import NavBar from "Components/UI-KIT/NavBar";
import NavBarData from "Constants/NavBar";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import Banner from "Components/UI-KIT/Banner";

import * as ST from "./styled";
import Burger from "../UI-KIT/Burger";

const LeftBar = () => {
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);

	return (
		<ST.LeftBar
			open={mobileOpen}
			onClick={() => setMobileOpen(!mobileOpen)}
		>
			<ST.WrapperInfo>
				<Logo isMax={false} />
				<ST.MobileBurger>
					<Burger open={mobileOpen} />
				</ST.MobileBurger>
				<ST.Sections>Разделы платформы</ST.Sections>
				<NavBar arrayNav={NavBarData} />
			</ST.WrapperInfo>
			<Banner
				role={UserRoleEnum.USER}
				type={BannerEnum.BANNER_LEFT}
			/>
		</ST.LeftBar>
	);
};

export default LeftBar;
