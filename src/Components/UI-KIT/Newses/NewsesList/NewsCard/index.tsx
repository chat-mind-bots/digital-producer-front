import React, { FC } from "react";

import Date from "Components/UI-KIT/Atoms/Date";
import Time from "Components/UI-KIT/Atoms/Time";
import Tags from "Components/UI-KIT/Atoms/Tags";

import * as ST from "./styled";
import { INewsState } from "../../../../../Shared/News/redux/news.slice";
import Image from "../../../Atoms/Image";

const NewsCard: FC<INewsState> = ({
	image,
	name,
	description,
	timeRead,
	createdAt,
	tags,
}) => (
	<ST.NewsCard>
		<ST.WrapperTop>
			<ST.WrapperImage>
				<Image src={image} />
			</ST.WrapperImage>
			<Tags
				tags={tags}
				tagsColors={true}
			/>
			<ST.Title>{name}</ST.Title>
			<ST.Description dangerouslySetInnerHTML={{ __html: description }} />
		</ST.WrapperTop>
		<ST.WrapperBot>
			<ST.WrapperTime>
				<Time value={`${timeRead}`} />
			</ST.WrapperTime>
			<ST.WrapperDate>
				<Date value={createdAt} />
			</ST.WrapperDate>
		</ST.WrapperBot>
	</ST.NewsCard>
);

export default NewsCard;
