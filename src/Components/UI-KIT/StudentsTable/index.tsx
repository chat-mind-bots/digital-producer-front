import React, { FC } from "react";

import * as ST from "./styled";
import { EnrollAnotherUserToCourse } from "../../../Shared/Courses/components/CourseSet/enrollAnotherUser";
import { EnrollAnotherUserToCourseApiProps } from "../../../Shared/Courses/redux/course.api";
import CourseResultType from "../Course/course-props.type";
import {
	ICourseEnum,
	ICourseState,
} from "../../../Shared/Courses/redux/course.slice";
import openFileBlank from "../../../Utils/openFileBlank";

const StudentsTable: FC<
	Pick<ICourseState, ICourseEnum.students> & {
		isAddFunction: boolean;
	} & Pick<EnrollAnotherUserToCourseApiProps, "idCourse"> &
		Pick<CourseResultType, "refetch">
> = ({ idCourse, refetch, students, isAddFunction }) => {
	return (
		<ST.StudentsTable>
			{isAddFunction && (
				<EnrollAnotherUserToCourse
					idCourse={idCourse}
					refetch={refetch}
				/>
			)}
			<ST.Table>
				<ST.Thead>
					<ST.Tr>
						<ST.Th>Имя</ST.Th>
						<ST.Th />
						<ST.Th>Чат</ST.Th>
					</ST.Tr>
				</ST.Thead>
				<ST.Tbody>
					{students.map((student) => (
						<ST.Tr key={`student-${student.id}`}>
							<ST.Td>@{student.username}</ST.Td>
							<ST.Td />
							<ST.ThOpen
								onClick={() =>
									openFileBlank(`https://t.me/${student.username}`)
								}
							>
								Открыть
							</ST.ThOpen>
						</ST.Tr>
					))}
				</ST.Tbody>
			</ST.Table>
		</ST.StudentsTable>
	);
};

export default StudentsTable;
