import React from "react";

import { useGetNewsQuery } from "Store/api/news/news.api";
import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import WrapperContent from "Components/WrapperContent";
import NewsCard from "Components/UI-KIT/NewsCard";
import RoutesList from "Router/routesList";
import WrapperRequest from "Components/WrapperRequest";
import { routeBuilderWithReplace } from "Router/services/route-builder";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import Banner from "Components/UI-KIT/Banner";

import * as ST from "./styled";

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
	{ id: 1, name: "Главная", url: RoutesList.USER },
	{ id: 2, name: "Новости платформы", url: RoutesList.NEWS },
];

const News = () => {
	const result = useGetNewsQuery("myNewsUser");
	const { data, isError, isLoading } = result;

	return (
		<ST.News>
			<ST.WrapperNews>
				<WrapperContent header={[...defaultBreadCrumbs]}>
					<ST.Wrapper>
						<WrapperRequest
							isError={isError}
							isLoading={isLoading}
						>
							<>
								{data &&
									data.list.map((newsItem) => (
										<NewsCard
											key={`News-NewsCard-${newsItem.id}`}
											id={newsItem.id}
											name={newsItem.name}
											description={newsItem.description}
											date={newsItem.date}
											timeRead={`Время чтения: ${newsItem.timeRead} мин`}
											image={""}
											url={routeBuilderWithReplace(
												[RoutesList.USER, RoutesList.NEWS_ID],
												"id",
												newsItem.id
											)}
											tagsColors={data.tagsColors}
											tags={newsItem.tags}
										/>
									))}
							</>
						</WrapperRequest>
					</ST.Wrapper>
				</WrapperContent>
			</ST.WrapperNews>
			<Banner
				role={UserRoleEnum.USER}
				type={BannerEnum.BANNER_RIGHT}
			/>
		</ST.News>
	);
};

export default News;
