import React from "react";

// import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
// import WrapperContent from "Components/WrapperContent";
// import NewsView from "Components/UI-KIT/NewsView";
// import ReadMoreCard from "Components/UI-KIT/ReadMoreCard";
// import RoutesList from "Router/routesList";
// import { useGetNewsIdQuery } from "Store/api/news/news.api";
// import WrapperRequest from "Components/WrapperRequest";
// import { routeBuilderWithReplace } from "Router/services/route-builder";
import Banner from "Components/UI-KIT/Banner";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";

import * as ST from "./styled";

// const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
// 	{ id: 1, name: "Главная", url: RoutesList.USER },
// 	{ id: 2, name: "Новости платформы", url: RoutesList.NEWS },
// ];

const NewsId = () => {
	// const result = useGetNewsIdQuery(1);
	// const { data, isError, isLoading } = result;

	return (
		<ST.News>
			<Banner
				role={UserRoleEnum.PRODUCER}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.News>
	);
};

export default NewsId;
