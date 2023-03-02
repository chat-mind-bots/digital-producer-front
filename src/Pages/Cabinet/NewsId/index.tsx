import React from "react";

import Banner from "Components/UI-KIT/Banner";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";

import * as ST from "./styled";
import News from "../../../Components/UI-KIT/News";

const NewsId = () => {
	return (
		<ST.News>
			<News role={UserRoleEnum.USER} />
			<Banner
				role={UserRoleEnum.USER}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.News>
	);
};

export default NewsId;
