import React, { FC } from "react";
import { Link } from "react-router-dom";

import Tags from "Components/UI-KIT/Atoms/Tags";

import * as ST from "./styled";
import { ITagState } from "../../../Shared/Tag/redux/tag.slice";

type ReadMoreCardProps = {
	name: string;
	tags: ITagState[];
	tagsColors: boolean;
	url: string;
	description: string;
};

const ReadMoreCard: FC<ReadMoreCardProps> = ({
	name,
	description,
	tagsColors,
	tags,
	url,
}) => (
	<Link to={url}>
		<ST.ReadMoreCard>
			<Tags
				tags={tags}
				tagsColors={tagsColors}
			/>
			<ST.Name>{name}</ST.Name>
			<ST.Description>{description}</ST.Description>
		</ST.ReadMoreCard>
	</Link>
);

export default ReadMoreCard;
