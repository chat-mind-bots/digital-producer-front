import React from "react";

import Logo from "Components/UI-KIT/Logo";
import NavBar from "Components/UI-KIT/NavBar";
import NavBarDataAdmin from "Constants/NavBarAdmin";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import Banner from "Components/UI-KIT/Banner";

import * as ST from "./styled";

const LeftBar = () => (
	<ST.LeftBar>
		<ST.WrapperInfo>
			<Logo isMax={false} />
			<ST.Sections>Разделы платформы</ST.Sections>
			<NavBar arrayNav={NavBarDataAdmin} />
		</ST.WrapperInfo>
		<Banner
			role={UserRoleEnum.ADMIN}
			type={BannerEnum.BANNER_LEFT}
		/>
	</ST.LeftBar>
);

export default LeftBar;
