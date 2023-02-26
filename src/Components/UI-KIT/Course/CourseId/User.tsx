import React, { FC, useCallback, useEffect, useState } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { AccordionType, HandleClickType } from "../../Accordion/type";
import { BreadCrumbsArrayType } from "../../BreadCrumbs";
import RoutesList from "../../../../Router/routesList";
import * as ST from "../../../../Pages/Cabinet/CourseId/styled";
import WrapperContent from "../../../WrapperContent";
import LessonView from "../../LessonView";
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
import RequestStatuses from "../../../../RequestStatuses";
import { routeBuilderWithReplace } from "../../../../Router/services/route-builder";
import TestCard from "../../TestCard";
import ShoppingCard from "../../ShoppingCard";
import CourseResultType from "../course-props.type";

const delay = 2000;

const CourseId: FC<ICourseState & Pick<CourseResultType, "refetch">> = ({
	id,
	name,
	description,
	image,
	video,
	isFree,
	language,
	// status,
	price,
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
	isEnrolled,
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
				[RoutesList.USER, RoutesList.COURSE_ID],
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
								/>
							</>
						)}
					</ST.Content>
				</WrapperContent>
				<WrapperContent header={"Лекторы"}>
					<ST.Content>
						{owner && (
							<LectorCard
								name={owner.firstName || ""}
								description={"asadsadasd"}
								img={"2123"}
							/>
						)}
					</ST.Content>
				</WrapperContent>
				{currentLesson?.tests && (
					<WrapperContent header={"Тесты"}>
						<ST.Content>
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
								{!!currentLesson.documents?.length &&
									currentLesson.documents?.map((document) => (
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
				) : (
					documents &&
					documents.length && (
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
					)
				)}
			</ST.WrapperInfo>

			{isEnrolled ? (
				accordion && (
					<Accordion
						array={accordion}
						handleClick={handleClickAccordion}
					/>
				)
			) : (
				<ShoppingCard
					name={name}
					paymentLink={""}
					isFree={isFree}
					idCourse={id}
					refetch={refetch}
					price={
						price
							? {
									now: `${price.actual}`,
									discount: `${price.discount}`,
									old: `${price.actual + price.discount}`,
							  }
							: undefined
					}
				/>
			)}
		</ST.CourseID>
	);
};

export default CourseId;
