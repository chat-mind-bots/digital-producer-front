import React, { FC, Children, cloneElement } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "Hooks/redux";
import NewsResultType from "Components/UI-KIT/News/news-props.type";
import Loader from "Components/UI-KIT/Loader";

import { GetNewsApiProps, useGetNewsQuery } from "../../redux/news.api";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import NotFound from "../../../../Pages/NotFound";
import * as ST from "./styled";

type NewsGetProps = Record<"children", React.ReactElement<NewsResultType>>;

const NewsGet: FC<NewsGetProps> = ({ children }) => {
	const { id } = useParams();
	const auth = useAppSelector((state) => state.auth);
	const query: GetNewsApiProps = {
		authToken: auth.token ?? "",
		idNews: id,
	};
	const { data, refetch } = useGetNewsQuery(query);

	return data ? (
		data?.statusCode === RequestStatuses.SUCCESS ? (
			<>
				{Children.toArray(children).map((child) =>
					cloneElement(child as React.ReactElement<NewsResultType>, {
						result: data,
						refetch: refetch,
					})
				)}
			</>
		) : (
			<ST.NotFoundWrapper>
				<NotFound />
			</ST.NotFoundWrapper>
		)
	) : (
		<Loader />
	);
};

export default NewsGet;
