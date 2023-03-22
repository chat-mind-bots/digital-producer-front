import React, { FC, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import { ReactComponent as IcoSettings } from "Icons/Settings2.svg";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import Loader from "../../../../Components/UI-KIT/Loader";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import { useAppSelector } from "../../../../Hooks/redux";
import { IDocumentState } from "../../redux/document.slice";
import RequestStatuses from "../../../../RequestStatuses";
import DocumentSettingsBodyWindow from "../../../../Components/ModalWindows/Body/DocumentSettingsBodyWindow";
import {
	GetDocumentApiProps,
	useDeleteDocumentMutation,
	useGetDocumentMutation,
	useUpdateDocumentMutation,
} from "../../redux/document.api";

type LessonSetProps = Pick<CourseResultType, "refetch"> &
	Pick<GetDocumentApiProps, "idDocument">;

export const DocumentUpdate: FC<LessonSetProps> = ({ refetch, idDocument }) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};

	const [getDocument, document] = useGetDocumentMutation();

	const [open, setOpen] = useState<boolean>(false);

	const [updateDocument, resultUpdateLesson] = useUpdateDocumentMutation();

	const [removeDocument, resultRemoveDocument] = useDeleteDocumentMutation();

	const update = useCallback(
		(res: IDocumentState) =>
			updateDocument({
				...queryAuth,
				data: res,
			}),
		[updateDocument]
	);

	const remove = useCallback(
		(id: string) =>
			removeDocument({
				...queryAuth,
				id,
			}),
		[updateDocument]
	);

	useEffect(() => {
		if (resultUpdateLesson.status === QueryStatus.fulfilled) {
			if (
				resultUpdateLesson.data?.statusCode === RequestStatuses.SUCCESS ||
				resultUpdateLesson.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Документ изменен");
				setOpen(false);
				refetch && refetch();
			} else {
				resultUpdateLesson.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultUpdateLesson]);

	useEffect(() => {
		if (resultRemoveDocument.status === QueryStatus.fulfilled) {
			if (
				resultRemoveDocument.data?.statusCode === RequestStatuses.SUCCESS ||
				resultRemoveDocument.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Документ удален");
				setOpen(false);
				refetch && refetch();
			} else {
				resultRemoveDocument.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultRemoveDocument]);

	useEffect(() => {
		if (open) {
			getDocument({
				...queryAuth,
				idDocument: idDocument,
			});
		}
	}, [open]);

	return (
		<>
			<IcoSettings
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					setOpen(true);
				}}
			/>

			{/*MODAL WINDOW_______________________*/}
			<WindowFormik
				handleClose={() => setOpen(false)}
				isOpen={open}
				title={"Редактирование документа"}
			>
				<>
					{document.data ? (
						<DocumentSettingsBodyWindow
							initialValues={document.data}
							sendData={async (data: IDocumentState) => {
								return update(data);
							}}
							// handleClose={() => setOpen(false)}
							remove={async (e: string) => remove(e)}
						/>
					) : (
						<Loader />
					)}
				</>
			</WindowFormik>
		</>
	);
};
