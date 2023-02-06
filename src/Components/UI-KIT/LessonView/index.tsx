import React, { FC } from "react";
import { ReactComponent as IconForLessonCard } from "Icons/IconForLessonCard.svg";
import LevelDifficulty, {
	LoadingLevelDifficulty,
} from "Components/UI-KIT/Atoms/LevelDificulty";
import { LessonType, OtherNote } from "Types/CourseId";
import * as ST from "./styled";

type LessonViewProps = LessonType & {
	studentsLength: number;
	language: string;
	otherNotes: OtherNote[];
	lessonsLength: number;
	modulesLength: number;
	isLoading: boolean;
};

const LessonView: FC<LessonViewProps> = ({
	name,
	levelDifficulty,
	description,
	studentsLength,
	language,
	otherNotes,
	lessonsLength,
	modulesLength,
	isLoading,
}) => (
	<ST.LessonView>
		<ST.WrapperVideo isLoading={isLoading}>
			<ST.Loader />
			<IconForLessonCard />
		</ST.WrapperVideo>
		<ST.Title isLoading={isLoading}>{name}</ST.Title>
		<ST.WrapperLevelDifficulty>
			{isLoading ? (
				<LoadingLevelDifficulty />
			) : (
				<LevelDifficulty data={levelDifficulty} />
			)}
		</ST.WrapperLevelDifficulty>
		<ST.WrapperInfo>
			<ST.TitleInfo>Описание курса:</ST.TitleInfo>
			<ST.WrapperSubTitle
				delay={0.1}
				isLoading={isLoading}
			>
				<ST.SubTitleInfo>{description}</ST.SubTitleInfo>
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
			{otherNotes.map((nete) => (
				<ST.WrapperSubTitle
					isLoading={isLoading}
					key={`note-${nete.id}`}
					delay={0.6}
				>
					<ST.SubTitleInfo>
						{nete.name}: {nete.value}
					</ST.SubTitleInfo>
				</ST.WrapperSubTitle>
			))}
		</ST.WrapperInfo>
	</ST.LessonView>
);

export default LessonView;
