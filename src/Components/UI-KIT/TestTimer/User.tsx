import React, { Dispatch, FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { ReactComponent as Clock } from "Icons/Clock.svg";

import * as ST from "./styled";
import Button from "../Atoms/Button";
import Colors from "../../../Colors";
import Image from "../Atoms/Image";

type TestTimerProps = {
	lengthQuestions: number;
	duration: number;
	setStartTest: Dispatch<boolean>;
	isStarted: boolean;
	finishTest: () => void;
	rightAnswers?: number;
};

const TestTimer: FC<TestTimerProps> = ({
	lengthQuestions,
	duration,
	setStartTest,
	isStarted,
	finishTest,
	rightAnswers,
}) => {
	const [isButton, setIsButton] = useState(true);

	const finishTestHandler = () => {
		finishTest();
		setIsButton(false);
	};

	const CurrentTime = new Date();
	CurrentTime.setMinutes(CurrentTime.getMinutes() + duration);

	return (
		<ST.TestTimer>
			<Image
				src={
					"https://img2.freepng.ru/20180529/sc/kisspng-test-computer-icons-education-school-dynamics-365-5b0d5671cfb2d6.6395327915276007538507.jpg"
				}
			/>
			<ST.Time>
				<Timer
					date={CurrentTime}
					isStart={isStarted && !rightAnswers && isButton}
				/>
				<ST.Count>
					<Clock />
				</ST.Count>
			</ST.Time>
			<ST.Line>
				<ST.AllCount>Всего вопросов:</ST.AllCount>
				<ST.CountAll>{lengthQuestions}</ST.CountAll>
			</ST.Line>
			{rightAnswers !== undefined && (
				<ST.Line>
					Верных ответов:
					<ST.Count>{rightAnswers}</ST.Count>
				</ST.Line>
			)}

			{!rightAnswers && isButton && (
				<Button
					title={isStarted ? "Закончить" : "Начать"}
					padding={"10px 25px"}
					fontSize={"16px"}
					lineHeight={"20px"}
					fontWeight={"400"}
					background={Colors.BLUE}
					color={Colors.WHITE}
					backgroundAnimation={Colors.BLUE}
					colorHover={Colors.WHITE}
					border={`1px solid ${Colors.RGBA_GREY}`}
					width={"100%"}
					onClick={() => (isStarted ? finishTestHandler() : setStartTest(true))}
				/>
			)}
		</ST.TestTimer>
	);
};

let timerInterval: NodeJS.Timer | undefined;

const Timer = ({ date, isStart }: { date: Date; isStart: boolean }) => {
	const time = new Date(date).getTime() - new Date().getTime();
	const [timer, setTimer] = useState<{
		hours: number;
		minutes: number;
		seconds: number;
	}>({
		hours: Math.floor((time / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((time / 1000 / 60) % 60),
		seconds: Math.floor((time / 1000) % 60),
	});
	const getTime = () => {
		const dateCurrent = new Date(date).getTime() - new Date().getTime();
		const timeCurrent = {
			hours: Math.floor((dateCurrent / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((dateCurrent / 1000 / 60) % 60),
			seconds: Math.floor((dateCurrent / 1000) % 60),
		};

		if (!!timeCurrent.hours && !!timeCurrent.minutes && !!timeCurrent.seconds) {
			toast.error("Время вышло");
			clearInterval(timerInterval);
			setTimeout(() => location.reload(), 1000);
		} else {
			setTimer(timeCurrent);
		}
	};

	useEffect(() => {
		if (isStart) {
			timerInterval = setInterval(() => {
				getTime();
			}, 1000);
		} else {
			clearInterval(timerInterval);
		}
	}, [isStart]);

	return (
		<>
			{`${timer.hours < 10 ? `0${timer.hours}` : `${timer.hours}`} : ${
				timer.minutes < 10 ? `0${timer.minutes}` : `${timer.minutes}`
			} : ${timer.seconds < 10 ? `0${timer.seconds}` : `${timer.seconds}`}`}
		</>
	);
};

export default TestTimer;
