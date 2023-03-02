import React, { FC } from "react";

import Radio from "Components/UI-KIT/Atoms/Radio";

import * as ST from "./styled";
import { IQuestionState } from "../../../Shared/Question/redux/question.slice";
import { QuestionUpdate } from "../../../Shared/Question/components/QuestionSet/update";
import CourseResultType from "../Course/course-props.type";

export type QuestionProps = Pick<CourseResultType, "refetch"> & {
	arrayQuestion: IQuestionState[];
};

const Questions: FC<QuestionProps> = ({ arrayQuestion, refetch }) => (
	<ST.Questions>
		{arrayQuestion.map((question) => (
			<ST.Question key={`Question-${question.id}`}>
				<ST.WrapperSettings>
					<QuestionUpdate
						refetch={refetch}
						idQuestion={question.id}
					/>
				</ST.WrapperSettings>
				<ST.Text>{question.question}</ST.Text>
				<ST.Answers>
					{question.answers.map((answer) => (
						<ST.AnswerWrapper key={`Answer-${answer.id}`}>
							<Radio isActive={false} />
							<ST.Answer>{answer.value}</ST.Answer>
						</ST.AnswerWrapper>
					))}
				</ST.Answers>
			</ST.Question>
		))}
	</ST.Questions>
);

export default Questions;
