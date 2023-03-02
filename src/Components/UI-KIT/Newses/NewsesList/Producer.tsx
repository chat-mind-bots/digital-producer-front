import React, { FC } from "react";
import { Link } from "react-router-dom";

import NewsesResultType from "../newses-props.type";
import NewsCard from "./NewsCard";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import * as ST from "./styled";

const ProducerNewsesList: FC<NewsesResultType> = ({ result }) => {
	return (
		<ST.NewsesList>
			{result &&
				result.map((news) => (
					<Link
						to={routeBuilderWithReplace(
							[RoutesList.USER, RoutesList.NEWS_ID],
							"id",
							news.id
						)}
						key={`UserNewsesList-${news.id}`}
					>
						<NewsCard {...news} />
					</Link>
				))}
		</ST.NewsesList>
	);
};

export default ProducerNewsesList;
