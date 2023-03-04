import React, { FC } from "react";

import Radio from "Components/UI-KIT/Atoms/Radio";

import * as ST from "./styled";
import { IQuestionState } from "../../../Shared/Question/redux/question.slice";
import { QuestionUpdate } from "../../../Shared/Question/components/QuestionSet/update";
import CourseResultType from "../Course/course-props.type";
import CheckBox from "../Atoms/CheckBox";

export type QuestionProps = Pick<CourseResultType, "refetch"> & {
	arrayQuestion: (IQuestionState & { values: string[] })[];
	isOpen: boolean;
	clickHandler: (
		questionId: string,
		answerId: string,
		isMultiply: boolean
	) => void;
};

const Questions: FC<QuestionProps> = ({
	arrayQuestion,
	refetch,
	isOpen,
	clickHandler,
}) => {
	return (
		<ST.Questions>
			{arrayQuestion.map((question) => (
				<ST.Question
					isOpen={isOpen}
					key={`Question-${question.id}`}
				>
					<ST.WrapperSettings>
						<QuestionUpdate
							refetch={refetch}
							idQuestion={question.id}
						/>
					</ST.WrapperSettings>
					<ST.Text>{question.question}</ST.Text>
					<ST.Answers>
						{question.answers.map((answer) => (
							<ST.AnswerWrapper
								key={`Answer-${answer.id}`}
								onClick={() =>
									clickHandler(question.id, answer.key, !!question.isMultiply)
								}
							>
								{question.isMultiply ? (
									<CheckBox isActive={question.values.includes(answer.key)} />
								) : (
									<Radio isActive={question.values.includes(answer.key)} />
								)}
								<ST.Answer>{answer.value}</ST.Answer>
							</ST.AnswerWrapper>
						))}
					</ST.Answers>
				</ST.Question>
			))}
		</ST.Questions>
	);
};

export default Questions;
