import React, { useState } from "react";

import { useGetNewsQuery } from "Store/api/news/news.api";
import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import WrapperContent from "Components/WrapperContent";
import AddBlock from "Components/UI-KIT/AddBlock";
import NewsCard from "Components/UI-KIT/NewsCard";
import NewsCardAdmin from "Components/UI-KIT/NewsCard/Admin";
import RoutesList from "Router/routesList";
import WrapperRequest from "Components/WrapperRequest";
import Modal from "Components/ModalWindows/WrappersModalWindows/Classic";
import CreateNews from "Components/ModalWindows/CreateNews";
import { routeBuilderWithReplace } from "Router/services/route-builder";

import * as ST from "./styled";

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
	{ id: 1, name: "Главная", url: RoutesList.USER },
	{ id: 2, name: "Новости платформы", url: RoutesList.NEWS },
];

const News = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
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
								<NewsCardAdmin onClick={() => setIsOpen(true)} />
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
												[RoutesList.ADMIN, RoutesList.NEWS_ID],
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
			<AddBlock
				title={"Создайте свой курс"}
				description={
					"Станьте продюсером своего курса и проводите уроки на платформе"
				}
				textButton={"Создать курс"}
				urlButton={""}
				styleButton={""}
			/>
			{/*MODAL WINDOW_______________________*/}
			<Modal
				handleClose={() => setIsOpen(false)}
				isOpen={isOpen}
				title={"Создание новости"}
			>
				<CreateNews />
			</Modal>
			{/*MODAL WINDOW_______________________*/}
		</ST.News>
	);
};

export default News;
