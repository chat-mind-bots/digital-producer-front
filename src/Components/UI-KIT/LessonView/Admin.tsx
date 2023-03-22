import React, { FC, useEffect, useState } from "react";

import LevelDifficulty, {
	LoadingLevelDifficulty,
} from "Components/UI-KIT/Atoms/LevelDificulty";
import { ICourseEnum, ICourseState } from "Shared/Courses/redux/course.slice";

import * as ST from "./styled";
import Image from "../Atoms/Image";
import PlayVideo from "../Atoms/PlayVideo";
import { ReactComponent as StatusFalse } from "../../../Icons/StatusFalse.svg";
import { ReactComponent as StatusTrue } from "../../../Icons/StatusTrue.svg";
import { ReactComponent as StatusWait } from "../../../Icons/StatusWait.svg";
import { ReactComponent as Progress } from "../../../Icons/Progress.svg";
import { CoursesStatuses } from "../../../Shared/Courses/redux/course.api";
import { CourseSetStatus } from "../../../Shared/Courses/components/CourseSet/setStatus";
import CourseResultType from "../Course/course-props.type";
import { ITagState } from "../../../Shared/Tag/redux/tag.slice";
import Tags from "../Atoms/Tags";

type LessonViewProps = Pick<
	ICourseState,
	| ICourseEnum.id
	| ICourseEnum.name
	| ICourseEnum.levelDifficulty
	| ICourseEnum.description
	| ICourseEnum.language
	| ICourseEnum.notes
	| ICourseEnum.image
	| ICourseEnum.video
	| ICourseEnum.status
> &
	Pick<CourseResultType, "refetch"> & {
		studentsLength: number;
		lessonsLength: number;
		modulesLength: number;
		isLoading: boolean;
		idCourse: string;
		isLesson: boolean;
		tags?: ITagState[];
	};

const LessonView: FC<LessonViewProps> = ({
	name,
	levelDifficulty,
	description,
	studentsLength,
	language,
	notes,
	lessonsLength,
	modulesLength,
	isLoading,
	image,
	status,
	idCourse,
	refetch,
	isLesson,
	tags,

	video,
}) => {
	const [startVideo, setStartVideo] = useState<boolean>(false);

	useEffect(() => {
		if (isLoading) {
			setStartVideo(false);
		}
	}, [isLoading]);

	return (
		<ST.LessonView>
			<ST.WrapperVideo isLoading={isLoading}>
				<ST.Loader />
				{!startVideo && <Image src={image} />}
				<PlayVideo
					startVideo={startVideo}
					setStartVideo={setStartVideo}
					isOpen={!isLoading}
					url={video}
				/>
			</ST.WrapperVideo>
			<ST.Title isLoading={isLoading}>
				{name}
				<ST.WrapperStatuses>
					<CourseSetStatus
						status={CoursesStatuses.NOT_ACTIVE}
						idCourse={idCourse}
						refetch={refetch}
					>
						<ST.Status isActive={status === CoursesStatuses.NOT_ACTIVE}>
							<StatusFalse />
						</ST.Status>
					</CourseSetStatus>
					<CourseSetStatus
						status={CoursesStatuses.AVAILABLE}
						idCourse={idCourse}
						refetch={refetch}
					>
						<ST.Status isActive={status === CoursesStatuses.AVAILABLE}>
							<StatusTrue />
						</ST.Status>
					</CourseSetStatus>
					<CourseSetStatus
						status={CoursesStatuses.IN_REVIEW}
						idCourse={idCourse}
						refetch={refetch}
					>
						<ST.Status isActive={status === CoursesStatuses.IN_REVIEW}>
							<StatusWait />
						</ST.Status>
					</CourseSetStatus>
					<CourseSetStatus
						status={CoursesStatuses.IN_PROGRESS}
						idCourse={idCourse}
						refetch={refetch}
					>
						<ST.Status isActive={status === CoursesStatuses.IN_PROGRESS}>
							<Progress />
						</ST.Status>
					</CourseSetStatus>
				</ST.WrapperStatuses>
			</ST.Title>
			<ST.WrapperLevelDifficulty>
				{isLoading ? (
					<LoadingLevelDifficulty />
				) : (
					<LevelDifficulty
						data={{
							curren: levelDifficulty,
							max: 3,
						}}
					/>
				)}
			</ST.WrapperLevelDifficulty>
			<ST.WrapperInfo>
				<ST.TitleInfo>
					{isLesson ? "Описание урока:" : "Описание курса:"}
				</ST.TitleInfo>
				<ST.WrapperSubTitle
					delay={0.1}
					isLoading={isLoading}
				>
					<ST.SubTitleInfo dangerouslySetInnerHTML={{ __html: description }} />
				</ST.WrapperSubTitle>
				<ST.TitleInfo>Информация:</ST.TitleInfo>
				<ST.WrapperSubTitle
					delay={0.2}
					isLoading={isLoading}
				>
					<ST.SubTitleInfo>Уроков: {lessonsLength}</ST.SubTitleInfo>
				</ST.WrapperSubTitle>
				<ST.WrapperSubTitle
					delay={0.3}
					isLoading={isLoading}
				>
					<ST.SubTitleInfo>Модулей: {modulesLength}</ST.SubTitleInfo>
				</ST.WrapperSubTitle>
				<ST.WrapperSubTitle
					delay={0.4}
					isLoading={isLoading}
				>
					<ST.SubTitleInfo>Студенты: {studentsLength}</ST.SubTitleInfo>
				</ST.WrapperSubTitle>
				<ST.WrapperSubTitle
					delay={0.5}
					isLoading={isLoading}
				>
					<ST.SubTitleInfo>Язык: {language}</ST.SubTitleInfo>
				</ST.WrapperSubTitle>
				<ST.TitleInfo>Заметки (доп. описание):</ST.TitleInfo>
				{notes &&
					notes.map((nete, index) => (
						<ST.WrapperSubTitle
							isLoading={isLoading}
							key={`note-${index}-${nete.name}-${nete.value}`}
							delay={0.6}
						>
							<ST.SubTitleInfo>
								{nete.name}: {nete.value}
							</ST.SubTitleInfo>
						</ST.WrapperSubTitle>
					))}

				{tags && (
					<ST.WrapperTags
						delay={0.8}
						isLoading={isLoading}
					>
						<Tags
							tags={tags}
							tagsColors={false}
						/>
					</ST.WrapperTags>
				)}
			</ST.WrapperInfo>
		</ST.LessonView>
	);
};

export default LessonView;
