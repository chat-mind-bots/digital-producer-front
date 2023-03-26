import React, { FC, useCallback, useEffect, useState } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";

import LevelDifficulty, {
	LoadingLevelDifficulty,
} from "Components/UI-KIT/Atoms/LevelDificulty";
import { ICourseEnum, ICourseState } from "Shared/Courses/redux/course.slice";

import * as ST from "./styled";
import Image from "../Atoms/Image";
import PlayVideo from "../Atoms/PlayVideo";
import { ReactComponent as StatusFalse } from "../../../Icons/StatusFalse.svg";
import { ReactComponent as Approved } from "../../../Icons/Approved.svg";
import { ReactComponent as StatusTrue } from "../../../Icons/StatusTrue.svg";
import { ReactComponent as StatusWait } from "../../../Icons/StatusWait.svg";
import { ReactComponent as Progress } from "../../../Icons/Progress.svg";
import {
	CoursesStatuses,
	useRemoveCourseMutation,
} from "../../../Shared/Courses/redux/course.api";
import { CourseSetStatus } from "../../../Shared/Courses/components/CourseSet/setStatus";
import CourseResultType from "../Course/course-props.type";
import { ITagState } from "../../../Shared/Tag/redux/tag.slice";
import Tags from "../Atoms/Tags";
import { routeBuilder } from "../../../Router/services/route-builder";
import RequestStatuses from "../../../Constants/RequestStatuses";
import RoutesList from "../../../Router/routesList";
import Colors from "../../../Constants/Colors";
import Button from "../Atoms/Button";
import { useAppSelector } from "../../../Hooks/redux";
import { UserRoleEnum } from "../../../Shared/Auth/types/role.enum";
import StatusCourseToText from "../../../Utils/StatusCourseToText";
import Loader from "../Loader";

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
	const [loaderStatus, setLoaderStatus] = useState<boolean>(false);

	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};
	const navigate = useNavigate();
	const [removeCourse, resultRemoveCourse] = useRemoveCourseMutation();
	const remove = useCallback(
		(id: string) =>
			removeCourse({
				...queryAuth,
				id,
			}),
		[removeCourse]
	);

	useEffect(() => {
		if (resultRemoveCourse.status === QueryStatus.fulfilled) {
			if (
				resultRemoveCourse.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveCourse.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Курс удален");

				setTimeout(
					() =>
						navigate(routeBuilder([RoutesList.PRODUCER, RoutesList.COURSES])),
					1000
				);
			} else {
				resultRemoveCourse.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveCourse]);

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
			<ST.Title isLoading={isLoading}>{name}</ST.Title>
			{status && (
				<ST.LinkToCourse>
					<ST.WrapperStatuses isLoaded={loaderStatus}>
						<Loader />
						<CourseSetStatus
							id={"APPROVED-admin"}
							status={CoursesStatuses.APPROVED}
							idCourse={idCourse}
							refetch={refetch}
							setLoader={setLoaderStatus}
						>
							<ST.Status
								onClick={() => setLoaderStatus(true)}
								isActive={status === CoursesStatuses.APPROVED}
							>
								<Approved />
							</ST.Status>
						</CourseSetStatus>
						<ReactTooltip
							anchorId="APPROVED-admin"
							place="right"
							content="Курс прошел модерацию и ожидает публикации."
						/>
						<CourseSetStatus
							id={"NOT_ACTIVE-admin"}
							status={CoursesStatuses.NOT_ACTIVE}
							idCourse={idCourse}
							refetch={refetch}
							setLoader={setLoaderStatus}
						>
							<ST.Status isActive={status === CoursesStatuses.NOT_ACTIVE}>
								<StatusFalse />
							</ST.Status>
						</CourseSetStatus>
						<ReactTooltip
							anchorId="NOT_ACTIVE-admin"
							place="right"
							content="Курс заблокирован или удален."
						/>
						{/**/}
						<CourseSetStatus
							id={"AVAILABLE-admin"}
							status={CoursesStatuses.AVAILABLE}
							idCourse={idCourse}
							refetch={refetch}
							setLoader={setLoaderStatus}
						>
							<ST.Status isActive={status === CoursesStatuses.AVAILABLE}>
								<StatusTrue />
							</ST.Status>
						</CourseSetStatus>
						<ReactTooltip
							anchorId="AVAILABLE-admin"
							place="right"
							content="Курс опубликован."
						/>
						{/**/}
						<CourseSetStatus
							id={"IN_REVIEW-admin"}
							status={CoursesStatuses.IN_REVIEW}
							idCourse={idCourse}
							refetch={refetch}
							setLoader={setLoaderStatus}
						>
							<ST.Status isActive={status === CoursesStatuses.IN_REVIEW}>
								<StatusWait />
							</ST.Status>
						</CourseSetStatus>
						<ReactTooltip
							anchorId="IN_REVIEW-admin"
							place="right"
							content="Курс на проверке у модератора."
						/>
						{/**/}
						<CourseSetStatus
							id={"IN_PROGRESS"}
							status={CoursesStatuses.IN_PROGRESS}
							idCourse={idCourse}
							refetch={refetch}
							setLoader={setLoaderStatus}
						>
							<ST.Status isActive={status === CoursesStatuses.IN_PROGRESS}>
								<Progress />
							</ST.Status>
						</CourseSetStatus>
						<ReactTooltip
							anchorId={"IN_PROGRESS"}
							place="right"
							content="Курс в работе или на доработке."
						/>
					</ST.WrapperStatuses>
				</ST.LinkToCourse>
			)}

			{!isLoading && status && (
				<ST.LinkToCourse>
					<ST.TitleInfo>Статус курса:</ST.TitleInfo>
					<ST.WrapperSubTitle
						delay={0.1}
						isLoading={isLoading}
					>
						<ST.SubTitleInfo>
							{status && StatusCourseToText(status)}
						</ST.SubTitleInfo>
					</ST.WrapperSubTitle>
				</ST.LinkToCourse>
			)}
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
				<ST.WrapperButton>
					{idCourse && auth.role.includes(UserRoleEnum.SUPER_ADMIN) && (
						<Button
							title={"Удалить"}
							padding={"11px 28px"}
							fontSize={"14px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							background={Colors.RED}
							color={Colors.WHITE}
							backgroundAnimation={Colors.BLUE_DARK}
							colorHover={Colors.WHITE}
							width={"100%"}
							onClick={() => remove(idCourse)}
						/>
					)}
				</ST.WrapperButton>
			</ST.WrapperInfo>
		</ST.LessonView>
	);
};

export default LessonView;
