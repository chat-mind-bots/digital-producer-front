import React, { FC } from "react";

import CourseResultType from "../test-props.type";
import { ITestState } from "../../../../Shared/Test/redux/test.slice";
import Questions from "../../Questions";
import WrapperContent from "../../../WrapperContent";
import { QuestionCreate } from "../../../../Shared/Question/components/QuestionSet/create";

const CourseId: FC<ITestState & Pick<CourseResultType, "refetch">> = ({
	refetch,
	id,
	questions,
}) => {
	return (
		<>
			<WrapperContent header={"ТЕст"}>
				<>
					<QuestionCreate
						refetch={refetch}
						idTest={id}
					/>
					<Questions
						refetch={refetch}
						arrayQuestion={questions}
					/>
				</>
			</WrapperContent>
		</>
	);
};

export default CourseId;
