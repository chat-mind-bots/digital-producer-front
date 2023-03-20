import React, { FC } from "react";

import Time from "Components/UI-KIT/Atoms/Time";
import { ReactComponent as StatusFalse } from "Icons/StatusFalse.svg";
import { ReactComponent as StatusTrue } from "Icons/StatusTrue.svg";

import * as ST from "./styled";
import { ITestState } from "../../../Shared/Test/redux/test.slice";
import {
	ILessonEnum,
	ILessonState,
} from "../../../Shared/Lesson/redux/lesson.slice";

const TestCard: FC<
	ITestState &
		Pick<
			ILessonState,
			| ILessonEnum.totalPoints
			| ILessonEnum.totalQuestions
			| ILessonEnum.testStatus
		>
> = ({
	// id,
	name,
	description,
	duration,
	// question,
	// answers,
	// rightAnswer,
	// owner,
	// createdAt,
	// updatedAt,
	totalPoints,
	totalQuestions,
	testStatus,
}) => (
	<ST.TestCard>
		<ST.Title>{name}</ST.Title>
		<ST.Description>{description}</ST.Description>
		<Time value={`Время для прохождения: ${duration}`} />
		<ST.Info>
			<StatusFalse />
			Для зачета:{"@"}/{totalQuestions} б.
		</ST.Info>
		{testStatus ? (
			<ST.Info>
				<StatusTrue />
				Пройден: {totalPoints}/{totalQuestions} б.
			</ST.Info>
		) : (
			<ST.Info>
				<StatusFalse />
				Не пройден: {totalPoints}/{totalQuestions} б.
			</ST.Info>
		)}
	</ST.TestCard>
);

export default TestCard;
