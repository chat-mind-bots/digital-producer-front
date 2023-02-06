import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as IconForCourseCard } from "Icons/IconForCourseCard.svg";
import LevelDifficulty, {
	LevelDifficultyType,
} from "Components/UI-KIT/Atoms/LevelDificulty";
import Tags, { TagType } from "Components/UI-KIT/Atoms/Tags";

import * as ST from "./styled";

type CourseCardProps = {
	title: string;
	description: string;
	levelDifficulty: LevelDifficultyType;
	url: string;
	tagsColors: boolean;
	tags: TagType[];
};

const CourseCard: FC<CourseCardProps> = ({
	title,
	description,
	levelDifficulty,
	url,
	tags,
	tagsColors,
}) => (
	<ST.CourseCard>
		<Link to={url}>
			<ST.Wrapper>
				<ST.Image>
					<IconForCourseCard />
				</ST.Image>
				<ST.MainWrapper>
					<Tags
						tags={tags}
						tagsColors={tagsColors}
					/>
					<ST.Title>{title}</ST.Title>
					<ST.Description>{description}</ST.Description>
					<ST.WrapperLevel>
						<LevelDifficulty data={levelDifficulty} />
					</ST.WrapperLevel>
				</ST.MainWrapper>
			</ST.Wrapper>
		</Link>
	</ST.CourseCard>
);

export default CourseCard;
