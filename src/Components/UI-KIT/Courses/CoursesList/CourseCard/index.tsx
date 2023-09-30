import React, { FC } from "react";

import LevelDifficulty from "Components/UI-KIT/Atoms/LevelDificulty";
import { ICourseState } from "Shared/Courses/redux/course.slice";
import Tags from "Components/UI-KIT/Atoms/Tags";
import Image from "Components/UI-KIT/Atoms/Image";

import * as ST from "./styled";

const CourseCard: FC<ICourseState> = ({
	// id,
	name,
	description,
	image,
	// video,
	// isFree,
	// language,
	// status,
	// price,
	levelDifficulty,
	tags,
	// notes,
	// documents,
	// owner,
	// subCategory,
	// modules,
	// createdAt,
	// updatedAt,
}) => (
	<ST.CourseCard>
		<ST.Wrapper>
			<ST.ImageWrapper>
				<ST.BlockImage />
				<Image src={image} />
			</ST.ImageWrapper>
			<ST.MainWrapper>
				<Tags
					tags={tags}
					tagsColors={true}
				/>
				<ST.Title>{name}</ST.Title>
				<ST.Description>{description}</ST.Description>
				<ST.WrapperLevel>
					<LevelDifficulty
						data={{
							curren: levelDifficulty,
							max: 3,
						}}
					/>
				</ST.WrapperLevel>
			</ST.MainWrapper>
		</ST.Wrapper>
	</ST.CourseCard>
);

export default CourseCard;
