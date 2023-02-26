import React, { FC } from "react";

import * as ST from "./styled";
import { EnrollAnotherUserToCourse } from "../../../Shared/Courses/components/CourseSet/enrollAnotherUser";
import { EnrollAnotherUserToCourseApiProps } from "../../../Shared/Courses/redux/course.api";
import CourseResultType from "../Course/course-props.type";

const StudentsTable: FC<
	Pick<EnrollAnotherUserToCourseApiProps, "idCourse"> &
		Pick<CourseResultType, "refetch">
> = ({ idCourse, refetch }) => {
	return (
		<ST.StudentsTable>
			<EnrollAnotherUserToCourse
				idCourse={idCourse}
				refetch={refetch}
			/>
			<ST.Table>
				<ST.Thead>
					<ST.Tr>
						<ST.Th>Имя</ST.Th>
						<ST.Th>Прогресс</ST.Th>
						<ST.Th>Статус</ST.Th>
					</ST.Tr>
				</ST.Thead>
				<ST.Tbody>
					<ST.Tr>
						<ST.Td>Сергей</ST.Td>
						<ST.Td>50%</ST.Td>
						<ST.Td>активен</ST.Td>
					</ST.Tr>
					<ST.Tr>
						<ST.Td>Антон</ST.Td>
						<ST.Td>70%</ST.Td>
						<ST.Td>активен</ST.Td>
					</ST.Tr>
				</ST.Tbody>
			</ST.Table>
		</ST.StudentsTable>
	);
};

export default StudentsTable;
