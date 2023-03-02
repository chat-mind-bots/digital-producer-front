import React, { FC } from "react";
import { Link } from "react-router-dom";

import NewsesResultType from "../newses-props.type";
import NewsCard from "./NewsCard";
import { NewsCreate } from "../../../../Shared/News/components/NewsSet/create";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import RoutesList from "../../../../Router/routesList";
import * as ST from "./styled";
import { NewsUpdate } from "../../../../Shared/News/components/NewsSet/update";

const AdminNewsList: FC<NewsesResultType> = ({ result, refetch }) => {
	return (
		<ST.NewsesList>
			<NewsCreate refetch={refetch} />
			{result &&
				result.map((news) => (
					<ST.WrapperContent key={`AdminNewsList-${news.id}`}>
						<ST.WrapperSetting>
							<NewsUpdate
								idNews={news.id}
								refetch={refetch}
							/>
						</ST.WrapperSetting>
						<Link
							to={routeBuilderWithReplace(
								[RoutesList.ADMIN, RoutesList.NEWS_ID],
								"id",
								news.id
							)}
						>
							<NewsCard {...news} />
						</Link>
					</ST.WrapperContent>
				))}
		</ST.NewsesList>
	);
};

export default AdminNewsList;
