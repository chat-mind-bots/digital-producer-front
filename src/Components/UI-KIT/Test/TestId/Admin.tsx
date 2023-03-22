import React, { FC } from "react";

import * as ST from "./styled";
import CourseResultType from "../test-props.type";
import { ITestState } from "../../../../Shared/Test/redux/test.slice";
import Questions from "../../Questions/Producer";
import WrapperContent from "../../../WrapperContent";
import TestTimer from "../../TestTimer/Producer";

const CourseId: FC<ITestState & Pick<CourseResultType, "refetch">> = ({
	refetch,
	questions,
	duration,
}) => {
	return (
		<ST.MainWrapper>
			<ST.Wrapper>
				<WrapperContent header={"Тест"}>
					<>
						<Questions
							refetch={refetch}
							arrayQuestion={questions}
							isOpen={true}
						/>
					</>
				</WrapperContent>
			</ST.Wrapper>
			<TestTimer
				duration={duration || 0}
				lengthQuestions={questions.length}
			/>
		</ST.MainWrapper>
	);
};

export default CourseId;
