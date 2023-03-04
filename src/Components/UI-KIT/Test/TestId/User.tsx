import React, { FC, useEffect, useState } from "react";

import * as ST from "./styled";
import CourseResultType from "../test-props.type";
import { ITestState } from "../../../../Shared/Test/redux/test.slice";
import Questions from "../../Questions/User";
import WrapperContent from "../../../WrapperContent";
import TestTimer from "../../TestTimer/User";
import { useProgressTestMutation } from "../../../../Shared/Test/redux/test.api";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../RequestStatuses";
import { IQuestionState } from "../../../../Shared/Question/redux/question.slice";

const CourseId: FC<ITestState & Pick<CourseResultType, "refetch">> = ({
	// refetch,
	id,
	questions,
	duration,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const [startTest, setStartTest] = useState(false);
	const [start, resultStart] = useProgressTestMutation();
	const [answers, setAnswers] = useState<
		(IQuestionState & { values: string[] })[]
	>(
		questions.map((e) => {
			return { ...e, values: [] };
		})
	);

	useEffect(() => {
		startTest &&
			start({
				authToken: auth.token || "",
				idTest: id,
				data: {
					duration: duration || 0,
					status: "IN_PROGRESS",
					answers: [],
				},
			});
	}, [startTest]);

	const finishTest = () => {
		startTest &&
			start({
				authToken: auth.token || "",
				idTest: id,
				data: {
					duration: duration || 0,
					status: "DONE",
					answers: answers.map((answer) => {
						return { question: answer.id, answer_key: answer.values };
					}),
				},
			});
	};

	const clickHandler = (
		questionId: string,
		answerKey: string,
		isMultiply: boolean
	) => {
		setAnswers(
			answers.map((answer) => {
				if (answer.id === questionId) {
					if (isMultiply) {
						if (answer.values.includes(answerKey)) {
							answer.values = answer.values.filter((e) => e !== answerKey);
						} else {
							answer.values = [...answer.values, answerKey];
						}
					} else {
						if (answer.values.includes(answerKey)) {
							answer.values = answer.values.filter((e) => e !== answerKey);
						} else {
							answer.values = [answerKey];
						}
					}
				}

				return answer;
			})
		);
	};

	return (
		<ST.MainWrapper>
			<ST.Wrapper>
				<WrapperContent header={"Тест"}>
					<>
						<Questions
							arrayQuestion={answers}
							isOpen={
								resultStart.data?.statusCode == RequestStatuses.SUCCESS_201
							}
							clickHandler={clickHandler}
						/>
					</>
				</WrapperContent>
			</ST.Wrapper>
			<TestTimer
				duration={duration || 0}
				setStartTest={setStartTest}
				lengthQuestions={questions.length}
				isStarted={resultStart.data?.statusCode == RequestStatuses.SUCCESS_201}
				finishTest={finishTest}
			/>
		</ST.MainWrapper>
	);
};

export default CourseId;
