import React, { FC } from "react";

import { ReactComponent as Clock } from "Icons/Clock.svg";

import * as ST from "./styled";
import Image from "../Atoms/Image";

type TestTimerProps = {
	lengthQuestions: number;
	duration: number;
};

const TestTimer: FC<TestTimerProps> = ({ lengthQuestions, duration }) => {
	return (
		<ST.TestTimer>
			<Image
				src={
					"https://img2.freepng.ru/20180529/sc/kisspng-test-computer-icons-education-school-dynamics-365-5b0d5671cfb2d6.6395327915276007538507.jpg"
				}
			/>
			<ST.Time>
				{duration} мин.
				<ST.Count>
					<Clock />
				</ST.Count>
			</ST.Time>
			<ST.Line>
				<ST.AllCount>Всего вопросов:</ST.AllCount>
				<ST.CountAll>{lengthQuestions}</ST.CountAll>
			</ST.Line>
		</ST.TestTimer>
	);
};

export default TestTimer;
