import React, { FC } from "react";
import Colors from "Colors";
import * as ST from "./styled";

type NewsCardProps = {
	tags: TagType[];
	tagsColors: boolean;
};

export interface TagType {
	id: number;
	name: string;
	background: string;
	color: string;
}

const Tags: FC<NewsCardProps> = ({ tags, tagsColors }) => (
	<ST.Tags>
		{tags.map((tag) => (
			<ST.Tag
				key={`NewsCard-tag-${tag.id}`}
				background={tagsColors ? tag.background : Colors.WHITE3}
				color={tagsColors ? tag.color : Colors.GREY4}
			>
				{tag.name}
			</ST.Tag>
		))}
	</ST.Tags>
);

export default Tags;
