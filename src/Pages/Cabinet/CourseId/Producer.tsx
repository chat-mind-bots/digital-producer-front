import React, { FC, useEffect, useState } from "react";

import LessonView from "Components/UI-KIT/LessonView/Producer";
import WrapperContent from "Components/WrapperContent";
import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import LectorCard from "Components/UI-KIT/LectorCard";
import LectorCardProducer from "Components/UI-KIT/LectorCard/Producer";
import TestCard from "Components/UI-KIT/TestCard";
import TestCardProducer from "Components/UI-KIT/TestCard/Producer";
import DocumentCard from "Components/UI-KIT/DocumentCard";
import DocumentCardProducer from "Components/UI-KIT/DocumentCard/Producer";
import { ReactComponent as IconForPlatformNewsCard } from "Icons/IconForPlatformNewsCard.svg";
import RoutesList from "Router/routesList";
import { CourseIdType, LessonType } from "Types/CourseId";
import {
	AccordionType,
	HandleClickType,
} from "Components/UI-KIT/Accordion/type";
import Accordion from "Components/UI-KIT/Accordion/Producer";
import { useGetCourseIdQuery } from "Store/api/course/course.api";
import EditLesson from "Components/ModalWindows/Body/EditLesson";
import StudentsTable from "Components/UI-KIT/StudentsTable";
import AddDocument from "Components/ModalWindows/Body/AddDocument";
import AddLector from "Components/ModalWindows/Body/AddLector";
import AddLesson from "Components/ModalWindows/Body/AddLesson";
import AddModule from "Components/ModalWindows/Body/AddModule";
import AddTest from "Components/ModalWindows/Body/AddTest";
import Modal from "Components/ModalWindows/WrappersModalWindows/Classic";
import { routeBuilderWithReplace } from "Router/services/route-builder";

import * as ST from "./styled";

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
	{ id: 1, name: "Главная", url: RoutesList.USER },
	{ id: 2, name: "Мои курсы", url: RoutesList.COURSES },
];

const CourseId = () => {
	const result = useGetCourseIdQuery(1);
	const { data } = result;

	return <>{data && <CourseIdView {...data} />}</>;
};

const CourseIdView: FC<CourseIdType> = ({
	id,
	name,
	description,
	image,
	video,
	studentsLength,
	modulesLength,
	lessonsLength,
	language,
	lecturers,
	levelDifficulty,
	otherNotes,
	modules,
	documents,
}) => {
	const [state, setState] = useState({
		module: 1,
		lesson: 1,
	});
	const [currentLesson, setCurrentLesson] = useState<LessonType>();
	const [accordion, setAccordion] = useState<AccordionType[]>();
	const [loading, setLoading] = useState<boolean>(false);
	const breadCrumbs: BreadCrumbsArrayType[] = [
		{ id: 3, name: name, url: `${RoutesList.COURSE_ID}${id}` },
		{
			id: 4,
			name: currentLesson ? currentLesson.name : "",
			url: RoutesList.USER,
		},
	];

	useEffect(() => {
		(() => {
			let currentLesson: LessonType | undefined = undefined;
			modules.forEach((module) => {
				if (module.id === state.module) {
					module.lessons.forEach((lesson) => {
						if (lesson.id === state.lesson) {
							currentLesson = lesson;
						}
					});
				}
			});
			currentLesson && setCurrentLesson(currentLesson);
		})();
		(() => {
			const arrayAccordion: AccordionType[] = modules.map((module) => {
				return {
					id: module.id,
					name: module.name,
					items: module.lessons.map((lesson) => {
						return {
							id: lesson.id,
							name: lesson.name,
							isActive:
								module.id === state.module && lesson.id === state.lesson,
						};
					}),
				};
			});
			setAccordion(arrayAccordion);
		})();
	}, [state]);
	const handleClickAccordion = ({ moduleId, itemId }: HandleClickType) => {
		setLoading(true);
		const delay = 3000;
		setTimeout(() => {
			setState({
				module: moduleId,
				lesson: itemId,
			});
			setLoading(false);
		}, delay);
	};

	const [windowEditLesson, setWindowEditLesson] = useState<boolean>(false);
	const [windowAddLesson, setWindowAddLesson] = useState<boolean>(false);
	const [windowAddModule, setWindowAddModule] = useState<boolean>(false);
	const [windowAddLector, setWindowAddLector] = useState<boolean>(false);
	const [windowAddTest, setWindowAddTest] = useState<boolean>(false);
	const [windowAddDocument, setWindowAddDocument] = useState<boolean>(false);

	return (
		<ST.CourseID>
			<ST.WrapperInfo>
				<WrapperContent header={[...defaultBreadCrumbs, ...breadCrumbs]}>
					<ST.Content>
						{currentLesson && (
							<>
								<LessonView
									id={currentLesson.id}
									name={currentLesson ? currentLesson.name : name}
									video={currentLesson ? currentLesson.video : video}
									levelDifficulty={
										currentLesson
											? currentLesson.levelDifficulty
											: levelDifficulty
									}
									description={
										currentLesson ? currentLesson.description : description
									}
									studentsLength={studentsLength}
									language={language}
									otherNotes={otherNotes}
									lessonsLength={lessonsLength}
									modulesLength={modulesLength}
									isLoading={loading}
									image={currentLesson ? currentLesson.image : image}
									documents={
										currentLesson ? currentLesson.documents : documents
									}
									tests={currentLesson.tests}
									onClick={() => setWindowEditLesson(true)}
								/>
							</>
						)}
					</ST.Content>
				</WrapperContent>
				<WrapperContent header={"Лекторы"}>
					<ST.Content>
						<LectorCardProducer onClick={() => setWindowAddLector(true)} />
						{lecturers &&
							lecturers.map((lecture) => (
								<LectorCard
									key={`CourseId-LectorCard-${lecture.id}`}
									name={lecture.name}
									description={lecture.description}
									img={<IconForPlatformNewsCard />}
								/>
							))}
					</ST.Content>
				</WrapperContent>
				{currentLesson?.tests && (
					<WrapperContent header={"Тесты"}>
						<ST.Content>
							<TestCardProducer onClick={() => setWindowAddTest(true)} />
							{currentLesson?.tests.map((test) => (
								<TestCard
									key={`CourseId-TestCard-${test.id}`}
									id={test.id}
									description={test.description}
									name={test.name}
									levelDifficulty={test.levelDifficulty}
									transitTime={test.transitTime}
									minCountForSuccess={test.minCountForSuccess}
									countQuestions={test.countQuestions}
									currentResult={test.currentResult}
									status={test.status}
									url={routeBuilderWithReplace(
										[RoutesList.PRODUCER, RoutesList.TEST_ID],
										"id",
										id
									)}
								/>
							))}
						</ST.Content>
					</WrapperContent>
				)}
				<WrapperContent header={"Документы"}>
					<ST.Content>
						<DocumentCardProducer onClick={() => setWindowAddDocument(true)} />
						{documents
							? documents.map((document) => (
									<DocumentCard
										key={`CourseId-DocumentCard-${document.id}`}
										name={document.name}
										description={document.description}
										url={document.url}
									/>
							  ))
							: currentLesson?.documents.map((document) => (
									<DocumentCard
										key={`CourseId-DocumentCard-currentLesson-${document.id}`}
										name={document.name}
										description={document.description}
										url={document.url}
									/>
							  ))}
					</ST.Content>
				</WrapperContent>
				<WrapperContent header={"Студенты"}>
					<ST.Content>
						<StudentsTable />
					</ST.Content>
				</WrapperContent>
			</ST.WrapperInfo>
			{accordion && (
				<Accordion
					array={accordion}
					handleClick={handleClickAccordion}
					onClickAddLesson={() => setWindowAddLesson(true)}
					onClickAddModule={() => setWindowAddModule(true)}
				/>
			)}
			<Modal
				handleClose={() => setWindowEditLesson(false)}
				isOpen={windowEditLesson}
				title={"Редактирование урока"}
			>
				<EditLesson />
			</Modal>
			<Modal
				handleClose={() => setWindowAddLesson(false)}
				isOpen={windowAddLesson}
				title={"Создание урока"}
			>
				<AddLesson />
			</Modal>
			<Modal
				handleClose={() => setWindowAddModule(false)}
				isOpen={windowAddModule}
				title={"Добавление модуля"}
			>
				<AddModule />
			</Modal>
			<Modal
				handleClose={() => setWindowAddLector(false)}
				isOpen={windowAddLector}
				title={"Добавление лектора"}
			>
				<AddLector />
			</Modal>
			<Modal
				handleClose={() => setWindowAddTest(false)}
				isOpen={windowAddTest}
				title={"Создание теста"}
			>
				<AddTest />
			</Modal>
			<Modal
				handleClose={() => setWindowAddDocument(false)}
				isOpen={windowAddDocument}
				title={"Добавление документа"}
			>
				<AddDocument />
			</Modal>
		</ST.CourseID>
	);
};

export default CourseId;
