import React, { FC, useCallback, useEffect, useState } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { AccordionType, HandleClickType } from "../../Accordion/type";
import { BreadCrumbsArrayType } from "../../BreadCrumbs";
import RoutesList from "../../../../Router/routesList";
import * as ST from "../../../../Pages/Cabinet/CourseId/styled";
import WrapperContent from "../../../WrapperContent";
import LessonView from "../../LessonView/Producer";
import LectorCard from "../../LectorCard";
import TestCard from "../../TestCard";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import StudentsTable from "../../StudentsTable";
import Accordion from "../../Accordion/Producer";
import { useAppSelector } from "../../../../Hooks/redux";
import { ILessonState } from "../../../../Shared/Lesson/redux/lesson.slice";
import {
	GetLessonApiProps,
	useGetLessonMutation,
} from "../../../../Shared/Lesson/redux/lesson.api";
import RequestStatuses from "../../../../RequestStatuses";
import { ICourseState } from "../../../../Shared/Courses/redux/course.slice";
import CourseResultType from "../course-props.type";
import { DocumentCreate } from "../../../../Shared/Document/components/DocumentSet/create";
import { DocumentCardSettings } from "../../DocumentCard/Producer";
import { TestCreate } from "../../../../Shared/Test/components/TestSet/create";

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
	status,
	refetch,
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
		{
			id: 3,
			name: name,
			url: routeBuilderWithReplace(
				[RoutesList.PRODUCER, RoutesList.COURSE_ID],
				"id",
				id
			),
			onClick: () => {
				backToMainPageCourse();
			},
		},
		{
			id: 4,
			name: currentLesson ? currentLesson.name : "",
			url: RoutesList.USER,
		},
	];

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
			}
		}

		setTimeout(() => {
			setLoading(false);
		}, delay);
	}, [lesson]);

	useEffect(() => {
		const arrayAccordion: AccordionType[] = modules.map((module) => {
			return {
				id: module.id,
				name: module.name,
				logicNumber: module.logicNumber,
				items: module.lessons
					? module.lessons.map((lesson) => {
							return {
								id: lesson.id,
								name: lesson.name,
								logicNumber: lesson.logicNumber,
								isActive:
									module.id === state.module && lesson.id === state.lesson,
							};
					  })
					: [],
			} as AccordionType;
		});
		setAccordion(arrayAccordion);
	}, [state, modules]);

	const handleClickAccordion = ({ moduleId, itemId }: HandleClickType) => {
		setLoading(true);

		setState({ module: moduleId, lesson: itemId });

		setTimeout(() => {
			requestLesson(itemId);
		}, delay);
	};

	const requestLesson = useCallback(
		(itemId: string) => {
			const query: GetLessonApiProps = {
				authToken: auth.token ?? "",
				id: itemId,
			};
			getLesson(query);
		},
		[getLesson]
	);

	return (
		<ST.CourseID>
			<ST.WrapperInfo>
				<WrapperContent header={breadCrumbs}>
					<ST.Content>
						{currentLesson ? (
							<>
								<LessonView
									id={currentLesson.id}
									name={currentLesson.name}
									video={currentLesson.video}
									levelDifficulty={levelDifficulty}
									description={currentLesson.description}
									studentsLength={23}
									language={language}
									notes={notes}
									lessonsLength={23}
									modulesLength={23}
									isLoading={loading}
									image={currentLesson.image}
									refetch={refetch}
									status={status}
								/>
							</>
						) : (
							<>
								<LessonView
									id={id}
									name={name}
									video={video}
									levelDifficulty={levelDifficulty}
									description={description}
									studentsLength={23}
									language={language}
									notes={notes}
									lessonsLength={23}
									modulesLength={23}
									isLoading={loading}
									image={image}
									idCourse={id}
									refetch={refetch}
									status={status}
								/>
							</>
						)}
					</ST.Content>
				</WrapperContent>

				<WrapperContent header={"Лекторы"}>
					<ST.Content>
						<ST.Content>
							{owner && (
								<LectorCard
									name={owner.firstName || ""}
									description={"asadsadasd"}
									img={"2123"}
								/>
							)}
						</ST.Content>
					</ST.Content>
				</WrapperContent>

				{!!currentLesson?.tests && (
					<WrapperContent header={"Тесты"}>
						<ST.Content>
							<TestCreate
								idLesson={currentLesson.id}
								refetch={() => state.lesson && requestLesson(state.lesson)}
							/>
							{currentLesson?.tests.map((test) => (
								<TestCard
									key={`CourseId-TestCard-${test.id}`}
									{...test}
								/>
							))}
						</ST.Content>
					</WrapperContent>
				)}

				{currentLesson ? (
					<>
						<WrapperContent header={"Документы урока"}>
							<ST.Content>
								<DocumentCreate
									idLesson={currentLesson.id}
									idCourse={""}
									refetch={() => state.lesson && requestLesson(state.lesson)}
								/>
								{currentLesson.documents?.map((document) => (
									<DocumentCardSettings
										key={`CourseId-DocumentCard-currentLesson-DocumentLesson-${document.id}`}
										id={document.id}
										name={document.name}
										description={document.description}
										refetch={() => state.lesson && requestLesson(state.lesson)}
									/>
								))}
							</ST.Content>
						</WrapperContent>
					</>
				) : (
					<>
						<WrapperContent header={"Документы курса"}>
							<ST.Content>
								<DocumentCreate
									idLesson={""}
									idCourse={id}
									refetch={refetch}
								/>
								{documents?.map((document) => (
									<DocumentCardSettings
										key={`CourseId-DocumentCard-currentLesson-DocumentCourse-${document.id}`}
										id={document.id}
										name={document.name}
										description={document.description}
										refetch={refetch}
									/>
								))}
							</ST.Content>
						</WrapperContent>
					</>
				)}

				<WrapperContent header={"Студенты"}>
					<ST.Content>
						<StudentsTable
							idCourse={id}
							refetch={refetch}
						/>
					</ST.Content>
				</WrapperContent>
			</ST.WrapperInfo>
			{accordion && (
				<Accordion
					array={accordion}
					handleClick={handleClickAccordion}
					refetch={refetch}
					idCourse={id}
					isOnClick={!loading}
				/>
			)}

			{/*MODAL WINDOW_______________________*/}
		</ST.CourseID>
	);
};

export default CourseId;
