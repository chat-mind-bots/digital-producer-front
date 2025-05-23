import React, { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QueryStatus } from "@reduxjs/toolkit/query";

import WindowFormik from "../../../../Components/ModalWindows/WrappersModalWindows/Formik";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";
import {
	GetCourseApiProps,
	useCreateCourseMutation,
} from "../../redux/course.api";
import CourseSettingsBodyWindow from "../../../../Components/ModalWindows/Body/CourseSettingsBodyWindow";
import { ICourseState, initialCourseState } from "../../redux/course.slice";
import { useGetCategoriesQuery } from "../../../Category/redux/category.api";
import Loader from "../../../../Components/UI-KIT/Loader";
import CourseResultType from "../../../../Components/UI-KIT/Course/course-props.type";
import CourseCardProducerCreate from "../../../../Components/UI-KIT/Courses/CoursesList/CourseCard/Producer";

export const CourseCreate: FC<Pick<CourseResultType, "refetch">> = ({
	refetch,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth: GetCourseApiProps = {
		authToken: auth.token ?? "",
	};

	const [open, setOpen] = useState<boolean>(false);

	const { data } = useGetCategoriesQuery(queryAuth);

	const [createCourse, resultCreateCourse] = useCreateCourseMutation();

	const create = useCallback(
		(res: ICourseState) =>
			createCourse({
				...queryAuth,
				data: res,
			}),
		[createCourse]
	);

	useEffect(() => {
		if (resultCreateCourse.status === QueryStatus.fulfilled) {
			if (
				resultCreateCourse.data?.statusCode === RequestStatuses.SUCCESS ||
				resultCreateCourse.data?.statusCode === RequestStatuses.SUCCESS_201
			) {
				toast.success("Курс создался");
				refetch && refetch();
				setOpen(false);
			} else {
				resultCreateCourse.data?.message?.forEach((e) => {
					toast.error(`Ошибка:${e}`);
				});
			}
		}
	}, [resultCreateCourse]);

	return (
		<>
			<CourseCardProducerCreate onClick={() => setOpen(true)} />

			{/*MODAL WINDOW_______________________*/}

			{open && (
				<WindowFormik
					handleClose={() => setOpen(false)}
					isOpen={open}
					title={"Создание курса"}
				>
					{data?.data ? (
						<CourseSettingsBodyWindow
							initialValues={initialCourseState}
							sendData={async (data: ICourseState) => {
								return create(data);
							}}
							handleClose={() => setOpen(false)}
							categories={data.data}
						/>
					) : (
						<Loader />
					)}
				</WindowFormik>
			)}
		</>
	);
};
