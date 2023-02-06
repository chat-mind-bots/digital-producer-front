import React, { FC } from "react";

import Radio from "Components/UI-KIT/Atoms/Radio";
import { QuestionsType } from "Types/TestId";

import * as ST from "./styled";

export type QuestionProps = {
	arrayQuestion: QuestionsType[];
};

const Questions: FC<QuestionProps> = ({ arrayQuestion }) => (
	<ST.Questions>
		{arrayQuestion.map((question) => (
			<ST.Question key={`Question-${question.id}`}>
				<ST.Text>{question.name}</ST.Text>
				<ST.Answers>
					{question.answers.map((answer) => (
						<ST.AnswerWrapper key={`Answer-${answer.id}`}>
							<Radio isActive={false} />
							<ST.Answer>{answer.name}</ST.Answer>
						</ST.AnswerWrapper>
					))}
				</ST.Answers>
			</ST.Question>
		))}
	</ST.Questions>
);

export default Questions;
