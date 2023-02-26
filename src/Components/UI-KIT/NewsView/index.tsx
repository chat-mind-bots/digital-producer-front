import React, { FC } from "react";

import { ReactComponent as IconForNewsView } from "Icons/IconForNewsView.svg";
import Date from "Components/UI-KIT/Atoms/Date";
import Time from "Components/UI-KIT/Atoms/Time";
import Tags from "Components/UI-KIT/Atoms/Tags";

import * as ST from "./styled";
import { ITagState } from "../../../Shared/Tag/redux/tag.slice";

type NewsViewProps = {
	name: string;
	text: string;
	time: string;
	date: string;
	tags: ITagState[];
	tagsColors: boolean;
};

const NewsView: FC<NewsViewProps> = ({
	name,
	text,
	time,
	date,
	tags,
	tagsColors,
}) => (
	<ST.NewsView>
		<ST.WrapperIcon>
			<IconForNewsView />
		</ST.WrapperIcon>
		<ST.WrapperInfo>
			<ST.WrapperDateInfo>
				<Time value={time} />
				<Date value={date} />
			</ST.WrapperDateInfo>
			<Tags
				tags={tags}
				tagsColors={tagsColors}
			/>
			<ST.Title>{name}</ST.Title>
			<ST.WrapperText dangerouslySetInnerHTML={{ __html: text }} />
		</ST.WrapperInfo>
	</ST.NewsView>
);

export default NewsView;
