import React, { FC, useCallback, useEffect, useState } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { Link } from "react-router-dom";

import { AccordionType, HandleClickType } from "../../Accordion/type";
import { BreadCrumbsArrayType } from "../../BreadCrumbs";
import RoutesList from "../../../../Router/routesList";
import * as ST from "../../../../Pages/Cabinet/CourseId/styled";
import WrapperContent from "../../../WrapperContent";
import LessonView from "../../LessonView/Admin";
import { ICourseState } from "../../../../Shared/Courses/redux/course.slice";
import LectorCard from "../../LectorCard";
import DocumentCard from "../../DocumentCard";
import Accordion from "../../Accordion";
import { ILessonState } from "../../../../Shared/Lesson/redux/lesson.slice";
import {
	GetLessonApiProps,
	useGetLessonMutation,
} from "../../../../Shared/Lesson/redux/lesson.api";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import TestCard from "../../TestCard";
import CourseResultType from "../course-props.type";
import StudentsTable from "../../StudentsTable";
import { UserRoleEnum } from "../../../../Shared/Auth/types/role.enum";

const delay = 2000;

const CourseId: FC<ICourseState & Pick<CourseResultType, "refetch">> = ({
	id,
	name,
	description,
	image,
	video,
	// isFree,
	language,
	// status,
	// price,
	levelDifficulty,
	// tags,
	notes,
	documents,
	owner,
	// subCategory,
	modules,
	// createdAt,
	// updatedAt,
	// statusCode,
	refetch,
	status,
	lessonLength,
	moduleLength,
	tags,
	students,
	studentsTotal,
}) => {
	const auth = useAppSelector((state) => state.auth);

	const [state, setState] = useState<{
		module?: string;
		lesson?: string;
	}>({
		module: undefined,
		lesson: undefined,
	});
	const [currentLesson, setCurrentLesson] = useState<ILessonState>();
	const [accordion, setAccordion] = useState<AccordionType[]>();
	const [loading, setLoading] = useState<boolean>(false);

	const breadCrumbs: BreadCrumbsArrayType[] = [
		{ id: 1, name: "Главная", url: `/${RoutesList.ADMIN.toLocaleLowerCase()}` },
		{
			id: 1,
			name: "Курсы",
			url: `/${RoutesList.ADMIN.toLocaleLowerCase()}/reviewCourses`,
		},
		{
			id: 3,
			name: name,
			url: routeBuilderWithReplace(
				[RoutesList.ADMIN, RoutesList.COURSE_ID],
				"id",
				id
			),
			onClick: () => {
				backToMainPageCourse();
			},
		},
	];

	if (currentLesson) {
		breadCrumbs.push({
			id: 4,
			name: currentLesson ? currentLesson.name : "",
			url: RoutesList.ADMIN,
		});
	}

	const [getLesson, lesson] = useGetLessonMutation();

	const backToMainPageCourse = useCallback(() => {
		setLoading(true);

		setState({ module: undefined, lesson: undefined });

		setTimeout(() => {
			setCurrentLesson(undefined);
			setLoading(false);
		}, delay);
	}, []);

	useEffect(() => {
		if (lesson.status === QueryStatus.fulfilled) {
			if (lesson.data?.statusCode === RequestStatuses.SUCCESS) {
				setCurrentLesson(lesson.data);
				setTimeout(() => {
					setLoading(false);
				}, delay);
			}
		}
	}, [lesson]);

	useEffect(() => {
		const arrayAccordion: AccordionType[] = modules.map((module) => {
			return {
				id: module.id,
				name: module.name,
				items: module.lessons
					? module.lessons.map((lesson) => {
							return {
								id: lesson.id,
								name: lesson.name,
								isActive:
									module.id === state.module && lesson.id === state.lesson,
							};
					  })
					: [],
			} as AccordionType;
		});
		setAccordion(arrayAccordion);
	}, [state]);

	const handleClickAccordion = ({ moduleId, itemId }: HandleClickType) => {
		setLoading(true);

		setState({ module: moduleId, lesson: itemId });

		setTimeout(() => {
			const query: GetLessonApiProps = {
				authToken: auth.token ?? "",
				id: itemId,
			};
			getLesson(query);
		}, delay);
	};

	return (
		<ST.CourseID>
			<ST.WrapperInfo>
				<WrapperContent header={breadCrumbs}>
					<ST.Content style={{ pointerEvents: loading ? "none" : undefined }}>
						{currentLesson ? (
							<>
								<LessonView
									id={currentLesson.id}
									idCourse={id}
									name={currentLesson.name}
									video={currentLesson.video}
									levelDifficulty={currentLesson.levelDifficulty}
									description={currentLesson.description}
									studentsLength={studentsTotal}
									language={language}
									notes={notes}
									lessonsLength={lessonLength}
									modulesLength={moduleLength}
									isLoading={loading}
									image={currentLesson.image}
									status={status}
									refetch={refetch}
									isLesson={true}
								/>
							</>
						) : (
							<>
								<LessonView
									id={id}
									idCourse={id}
									name={name}
									video={video}
									levelDifficulty={levelDifficulty}
									description={description}
									studentsLength={studentsTotal}
									language={language}
									notes={notes}
									lessonsLength={lessonLength}
									modulesLength={moduleLength}
									isLoading={loading}
									image={image}
									status={status}
									refetch={refetch}
									isLesson={false}
									tags={tags}
								/>
							</>
						)}
					</ST.Content>
				</WrapperContent>
				{!loading && (
					<WrapperContent header={"Лекторы"}>
						<ST.Content>
							{owner && (
								<LectorCard
									name={owner.username || ""}
									img={owner.photos?.big || ""}
								/>
							)}
						</ST.Content>
					</WrapperContent>
				)}

				{currentLesson?.test && !loading && (
					<WrapperContent header={"Тесты"}>
						<ST.Content>
							<Link
								to={routeBuilderWithReplace(
									[RoutesList.ADMIN, RoutesList.TEST_ID],
									"id",
									currentLesson?.test.id
								)}
							>
								<TestCard
									{...currentLesson?.test}
									totalPoints={currentLesson.totalPoints}
									totalQuestions={currentLesson.totalQuestions}
									testStatus={currentLesson.testStatus}
								/>
							</Link>
						</ST.Content>
					</WrapperContent>
				)}

				{currentLesson
					? !!currentLesson.documents?.length &&
					  !loading && (
							<>
								<WrapperContent header={"Документы урока"}>
									<ST.Content>
										{currentLesson.documents?.map((document) => (
											<DocumentCard
												key={`CourseId-DocumentCard-currentLesson-DocumentLesson-${document.id}`}
												name={document.name}
												description={document.description}
												url={document.url}
											/>
										))}
									</ST.Content>
								</WrapperContent>
							</>
					  )
					: documents &&
					  !!documents.length &&
					  !loading && (
							<>
								<WrapperContent header={"Документы курса"}>
									<ST.Content>
										{documents.map((document) => (
											<DocumentCard
												key={`CourseId-DocumentCard-currentLesson-DocumentCourse-${document.id}`}
												name={document.name}
												description={document.description}
												url={document.url}
											/>
										))}
									</ST.Content>
								</WrapperContent>
							</>
					  )}

				{!loading && (
					<WrapperContent header={"Студенты"}>
						<ST.Content>
							<StudentsTable
								idCourse={id}
								refetch={refetch}
								students={students}
								isAddFunction={
									auth.id === owner?.id ||
									auth.role.includes(UserRoleEnum.SUPER_ADMIN)
								}
							/>
						</ST.Content>
					</WrapperContent>
				)}
			</ST.WrapperInfo>
			{accordion && (
				<Accordion
					array={accordion}
					handleClick={handleClickAccordion}
					isOnClick={!loading}
				/>
			)}
		</ST.CourseID>
	);
};

export default CourseId;
