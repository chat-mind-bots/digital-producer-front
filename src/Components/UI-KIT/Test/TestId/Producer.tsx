import React, { FC } from "react";

import * as ST from "./styled";
import CourseResultType from "../test-props.type";
import { ITestState } from "../../../../Shared/Test/redux/test.slice";
import Questions from "../../Questions";
import WrapperContent from "../../../WrapperContent";
import { QuestionCreate } from "../../../../Shared/Question/components/QuestionSet/create";
import TestTimer from "../../TestTimer";

const CourseId: FC<ITestState & Pick<CourseResultType, "refetch">> = ({
	refetch,
	id,
	questions,
}) => {
	return (
		<ST.MainWrapper>
			<ST.Wrapper>
				<WrapperContent header={"Тест"}>
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
			</ST.Wrapper>
			<TestTimer />
		</ST.MainWrapper>
	);
};

export default CourseId;
