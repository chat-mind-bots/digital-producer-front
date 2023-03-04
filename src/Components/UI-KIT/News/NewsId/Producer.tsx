import React, { FC } from "react";

import { BreadCrumbsArrayType } from "../../BreadCrumbs";
import RoutesList from "../../../../Router/routesList";
import * as ST from "./styled";
import WrapperContent from "../../../WrapperContent";
import { INewsState } from "../../../../Shared/News/redux/news.slice";
import {
	routeBuilder,
	routeBuilderWithReplace,
} from "../../../../Router/services/route-builder";
import NewsResultType from "../news-props.type";
import Time from "../../Atoms/Time";
import Date from "../../Atoms/Date";
import Tags from "../../Atoms/Tags";

const NewsId: FC<INewsState & Pick<NewsResultType, "refetch">> = ({
	id,
	name,
	description,
	timeRead,
	createdAt,
	image,
	tags,
}) => {
	const breadCrumbs: BreadCrumbsArrayType[] = [
		{ id: 1, name: "Главная", url: `/${RoutesList.PRODUCER}` },
		{
			id: 3,
			name: "Новости",
			url: routeBuilder([RoutesList.PRODUCER, RoutesList.NEWS]),
		},
		{
			id: 3,
			name: name,
			url: routeBuilderWithReplace(
				[RoutesList.PRODUCER, RoutesList.NEWS_ID],
				"id",
				id
			),
		},
	];

	return (
		<ST.NewsView>
			<WrapperContent header={breadCrumbs}>
				<>
					<ST.WrapperIcon>{image}</ST.WrapperIcon>
					<ST.WrapperInfo>
						<ST.WrapperDateInfo>
							<Time value={`${timeRead}`} />
							<Date value={createdAt} />
						</ST.WrapperDateInfo>
						<Tags
							tags={tags}
							tagsColors={true}
						/>
						<ST.Title>{name}</ST.Title>
						<ST.WrapperText dangerouslySetInnerHTML={{ __html: description }} />
					</ST.WrapperInfo>
				</>
			</WrapperContent>
		</ST.NewsView>
	);
};

export default NewsId;
