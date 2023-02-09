import React, { FC } from "react";
import { Link } from "react-router-dom";

import Tags, { TagType } from "Components/UI-KIT/Atoms/Tags";

import * as ST from "./styled";

type ReadMoreCardProps = {
	name: string;
	tags: TagType[];
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
