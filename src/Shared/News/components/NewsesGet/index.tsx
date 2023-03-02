import React, { FC, Children, cloneElement } from "react";

import NewsesResultType from "Components/UI-KIT/Newses/newses-props.type";
import { useAppSelector } from "Hooks/redux";
import BannerResultType from "Components/UI-KIT/Banner/banner-props.type";
import WrapperRequest from "Components/WrapperRequest";
import WrapperContent from "Components/WrapperContent";
import RoutesList from "Router/routesList";
import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";

import { GetNewsesApiProps, useGetNewsesQuery } from "../../redux/news.api";
import * as ST from "./styled";

type NewsGetProps = Record<"children", React.ReactElement<BannerResultType>> & {
	header: string;
};

const NewsesGet: FC<NewsGetProps> = ({ children, header }) => {
	const auth = useAppSelector((state) => state.auth);
	const query: GetNewsesApiProps = {
		authToken: auth.token ?? "",
	};
	const { data, isError, isLoading, refetch } = useGetNewsesQuery(query);

	const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
		{ id: 1, name: "Главная", url: RoutesList.USER },
		{ id: 2, name: header, url: RoutesList.NEWS },
	];

	return (
		<ST.WrapperNews>
			<WrapperContent header={[...defaultBreadCrumbs]}>
				<ST.Wrapper>
					<WrapperRequest
						isError={isError}
						isLoading={isLoading}
					>
						<>
							{Children.toArray(children).map((child) =>
								cloneElement(child as React.ReactElement<NewsesResultType>, {
									result: data?.data,
									refetch: refetch,
								})
							)}
						</>
					</WrapperRequest>
				</ST.Wrapper>
			</WrapperContent>
			{/*<WrapperContent header={"Читать также"}>*/}
			{/*	<ST.Wrapper>*/}
			{/*		<WrapperRequest*/}
			{/*			isError={isError}*/}
			{/*			isLoading={isLoading}*/}
			{/*		>*/}
			{/*			<>*/}
			{/*				{data &&*/}
			{/*					data.readAlsoList.map((readMoreCardItem) => (*/}
			{/*						<ReadMoreCard*/}
			{/*							key={`News-readMoreCard-item-${readMoreCardItem.id}`}*/}
			{/*							name={readMoreCardItem.name}*/}
			{/*							description={readMoreCardItem.description}*/}
			{/*							url={routeBuilderWithReplace(*/}
			{/*								[RoutesList.ADMIN, RoutesList.NEWS_ID],*/}
			{/*								"id",*/}
			{/*								readMoreCardItem.id*/}
			{/*							)}*/}
			{/*							tagsColors={data.tagsColors}*/}
			{/*							tags={readMoreCardItem.tags}*/}
			{/*						/>*/}
			{/*					))}*/}
			{/*			</>*/}
			{/*		</WrapperRequest>*/}
			{/*	</ST.Wrapper>*/}
			{/*</WrapperContent>*/}
		</ST.WrapperNews>
	);
};

export default NewsesGet;
