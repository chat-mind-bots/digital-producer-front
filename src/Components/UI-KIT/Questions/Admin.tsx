import React, { FC, useState } from "react";

import Radio from "Components/UI-KIT/Atoms/Radio";

import * as ST from "./styled";
import { IQuestionState } from "../../../Shared/Question/redux/question.slice";
import { QuestionUpdate } from "../../../Shared/Question/components/QuestionSet/update";
import CourseResultType from "../Course/course-props.type";
import CheckBox from "../Atoms/CheckBox";

export type QuestionProps = Pick<CourseResultType, "refetch"> & {
	arrayQuestion: IQuestionState[];
	isOpen: boolean;
};

const Questions: FC<QuestionProps> = ({ arrayQuestion, refetch, isOpen }) => {
	const [answers, setAnswers] = useState<
		(IQuestionState & { values: string[] })[]
	>(
		arrayQuestion.map((e) => {
			return { ...e, values: [] };
		})
	);

	const radioHandler = (
		questionId: string,
		answerId: string,
		isMultiply: boolean
	) => {
		setAnswers(
			answers.map((answer) => {
				if (answer.id === questionId) {
					if (isMultiply) {
						if (answer.values.includes(answerId)) {
							answer.values = answer.values.filter((e) => e !== answerId);
						} else {
							answer.values = [...answer.values, answerId];
						}
					} else {
						if (answer.values.includes(answerId)) {
							answer.values = answer.values.filter((e) => e !== answerId);
						} else {
							answer.values = [answerId];
						}
					}
				}

				return answer;
			})
		);
	};

	return (
		<ST.Questions>
			{answers.map((question) => (
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
									radioHandler(question.id, answer.id, !!question.isMultiply)
								}
							>
								{question.isMultiply ? (
									<CheckBox isActive={question.values.includes(answer.id)} />
								) : (
									<Radio isActive={question.values.includes(answer.id)} />
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
