import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ListType } from "Types/News";
import { ReactComponent as IconForPlatformNewsCard } from "Icons/IconForPlatformNewsCard.svg";
import Date from "Components/UI-KIT/Atoms/Date";
import Time from "Components/UI-KIT/Atoms/Time";
import Tags from "Components/UI-KIT/Atoms/Tags";
import * as ST from "./styled";

type NewsCardProps = ListType & {
	tagsColors: boolean;
	url: string;
};

const NewsCard: FC<NewsCardProps> = ({
	name,
	description,
	timeRead,
	date,
	tags,
	tagsColors,
	url,
}) => (
	<Link to={url}>
		<ST.NewsCard>
			<IconForPlatformNewsCard />
			<Tags
				tags={tags}
				tagsColors={tagsColors}
			/>
			<ST.Title>{name}</ST.Title>
			<ST.Description>{description}</ST.Description>
			<ST.WrapperTime>
				<Time value={timeRead} />
			</ST.WrapperTime>
			<ST.WrapperDate>
				<Date value={date} />
			</ST.WrapperDate>
		</ST.NewsCard>
	</Link>
);

export default NewsCard;
