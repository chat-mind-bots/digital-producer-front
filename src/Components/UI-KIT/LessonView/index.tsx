import React, { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import LevelDifficulty, {
	LoadingLevelDifficulty,
} from "Components/UI-KIT/Atoms/LevelDificulty";
import { ICourseEnum, ICourseState } from "Shared/Courses/redux/course.slice";

import * as ST from "./styled";
import Image from "../Atoms/Image";
import PlayVideo from "../Atoms/PlayVideo";
import { ITagState } from "../../../Shared/Tag/redux/tag.slice";
import Tags from "../Atoms/Tags";
import Button from "../Atoms/Button";
import Colors from "../../../Constants/Colors";
import { EnrollToCourse } from "../../../Shared/Courses/components/CourseSet/enroll";

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
	| ICourseEnum.price
> & {
	studentsLength: number;
	lessonsLength: number;
	modulesLength: number;
	isLoading: boolean;
	isLesson: boolean;
	tags?: ITagState[];
	isFree?: boolean;
	paymentLink?: string;
	idCourse?: string;
	refetch?: () => void;
	isEnrolled?: boolean;
	isOwner?: boolean;
	setLoading: (e: boolean) => void;
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
	isLesson,
	tags,
	isFree,
	paymentLink,
	idCourse,
	refetch,
	isEnrolled,
	video,
	isOwner,
	price,
	setLoading,
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
					url={video}
					startVideo={startVideo}
					setStartVideo={setStartVideo}
					isOpen={!isLoading}
				/>
			</ST.WrapperVideo>
			<ST.Title isLoading={isLoading}>{name}</ST.Title>
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

			{!isLesson && (
				<ST.MobileBy
					disabled={isOwner}
					onClick={() => {
						isOwner &&
							toast.error(
								"Невозможно купить или участвовать в собственном курсе"
							);
					}}
				>
					{!isFree ? (
						<>
							<ST.Description>
								Для покупки курса вам необходимо связаться с создателем
								курса(нажать на кнопку купить), после проведения оплаты,
								создатель курса выдаст вам доступ и вы сможете приступить к
								просмотру.
							</ST.Description>
							<Button
								title={`Купить курс за ${price?.actual} руб.`}
								padding={"11px 28px"}
								fontSize={"14px"}
								lineHeight={"20px"}
								fontWeight={"600"}
								background={Colors.BLUE}
								color={Colors.WHITE}
								backgroundAnimation={Colors.BLUE_DARK}
								colorHover={Colors.WHITE}
								width={"100%"}
								onClick={() => window.open(paymentLink)}
								disabled={isOwner}
							/>
						</>
					) : (
						!isEnrolled && (
							<EnrollToCourse
								idCourse={idCourse}
								refetch={refetch}
								disabled={isOwner}
								setLoading={setLoading}
							/>
						)
					)}
				</ST.MobileBy>
			)}
		</ST.LessonView>
	);
};

export default LessonView;
