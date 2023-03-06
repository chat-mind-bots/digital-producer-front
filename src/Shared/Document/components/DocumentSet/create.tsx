import React, { FC, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import ModalToaster from "Components/ModalWindows/WrappersModalWindows/ModalToaster";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import {
	AddDocumentToCourseApiProps,
	AddDocumentToLessonApiProps,
	useAddDocumentToCourseMutation,
	useAddDocumentToLessonMutation,
	useCreateDocumentMutation,
} from "../../redux/document.api";
import {
	IDocumentState,
	initialDocumentState,
} from "../../redux/document.slice";
import DocumentSettingsBodyWindow from "../../../../Components/ModalWindows/Body/DocumentSettingsBodyWindow";
import DocumentCardProducer from "../../../../Components/UI-KIT/DocumentCard/Producer";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";

type LessonCreateProps = Pick<AddDocumentToCourseApiProps, "idCourse"> &
	Pick<AddDocumentToLessonApiProps, "idLesson"> &
	Pick<CourseResultType, "refetch">;

export const DocumentCreate: FC<LessonCreateProps> = ({
	idCourse,
	idLesson,
	refetch,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const [createDocument, resultCreateDocument] = useCreateDocumentMutation();
	const [addDocumentToCourse, resultAddDocumentToCourse] =
		useAddDocumentToCourseMutation();
	const [addDocumentToLesson, resultAddDocumentToLesson] =
		useAddDocumentToLessonMutation();

	const create = useCallback(
		(res: IDocumentState) =>
			createDocument({
				...queryAuth,
				data: res,
			}),
		[createDocument]
	);

	useEffect(() => {
		if (resultCreateDocument.status === QueryStatus.fulfilled) {
			if (
				resultCreateDocument.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateDocument.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				if (idCourse) {
					toast.success("Все гуд Курс создался");
					const query: AddDocumentToCourseApiProps = {
						...queryAuth,
						idDocument: resultCreateDocument.data.id as string,
						idCourse: idCourse,
					};
					setOpen(false);
					addDocumentToCourse(query);
				} else {
					toast.success("Все гуд Курс создался");
					const query: AddDocumentToLessonApiProps = {
						...queryAuth,
						idDocument: resultCreateDocument.data.id as string,
						idLesson: idLesson,
					};
					setOpen(false);
					addDocumentToLesson(query);
				}
			} else {
				resultCreateDocument.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateDocument]);

	useEffect(() => {
		if (resultAddDocumentToCourse.status === QueryStatus.fulfilled) {
			if (
				resultAddDocumentToCourse.data?.statusCode ===
					RequestStatuses.SUCCESS ||
				resultAddDocumentToCourse.data?.statusCode ===
					RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд документ привязался к курсу");
				refetch && refetch();
			} else {
				resultCreateDocument.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultAddDocumentToCourse]);

	useEffect(() => {
		if (resultAddDocumentToLesson.status === QueryStatus.fulfilled) {
			if (
				resultAddDocumentToLesson.data?.statusCode ===
					RequestStatuses.SUCCESS ||
				resultAddDocumentToLesson.data?.statusCode ===
					RequestStatuses.SUCCESS_201
			) {
				toast.success("Все гуд документ привязался к уроку");
				refetch && refetch();
			} else {
				resultCreateDocument.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultAddDocumentToLesson]);

	return (
		<>
			<DocumentCardProducer onClick={() => setOpen(true)} />

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Созданние урока "}
				>
					<DocumentSettingsBodyWindow
						initialValues={initialDocumentState}
						sendData={async (data: IDocumentState) => {
							return create(data);
						}}
						handleClose={() => setOpen(false)}
					/>
				</WindowFormik>
			)}

			<ModalToaster>
				<Toaster
					position="bottom-left"
					reverseOrder={false}
				/>
			</ModalToaster>
		</>
	);
};
