import React, { FC } from "react";

import Colors from "Constants/Colors";

import * as ST from "./styled";
import { ITagState } from "../../../../Shared/Tag/redux/tag.slice";

type NewsCardProps = {
	tags: ITagState[];
	tagsColors: boolean;
};

const Tags: FC<NewsCardProps> = ({ tags, tagsColors }) => (
	<ST.Tags>
		{tags.map(
			(tag, i) =>
				i <= 2 && (
					<ST.Tag
						key={`NewsCard-tag-${tag.color}-${tag.id}-${i}`}
						background={tagsColors ? tag.background : Colors.WHITE3}
						color={tagsColors ? tag.color : Colors.GREY4}
					>
						{tag.name}
					</ST.Tag>
				)
		)}
	</ST.Tags>
);

export default Tags;
