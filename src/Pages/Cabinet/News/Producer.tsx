import React from "react";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import Banner from "Components/UI-KIT/Banner";
import Newses from "Components/UI-KIT/Newses";

import * as ST from "./styled";

const News = () => {
	return (
		<ST.News>
			<Newses
				role={UserRoleEnum.PRODUCER}
				header={"Новости"}
			/>
			<Banner
				role={UserRoleEnum.PRODUCER}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.News>
	);
};

export default News;
