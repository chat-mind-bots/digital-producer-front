import React from "react";

import { ReactComponent as Clock } from "Icons/Clock.svg";

import * as ST from "./styled";
import Button from "../Atoms/Button";
import Colors from "../../../Colors";
import Image from "../Atoms/Image";

const TestTimer = () => {
	return (
		<ST.TestTimer>
			<Image
				src={
					"https://img2.freepng.ru/20180529/sc/kisspng-test-computer-icons-education-school-dynamics-365-5b0d5671cfb2d6.6395327915276007538507.jpg"
				}
			/>
			<ST.Time>
				00:00:00
				<ST.Count>
					<Clock />
				</ST.Count>
			</ST.Time>
			<ST.Line>
				<ST.AllCount>Всего вопросов:</ST.AllCount>
				<ST.CountAll>10</ST.CountAll>
			</ST.Line>
			<ST.Line>
				Верных ответов:
				<ST.Count>0</ST.Count>
			</ST.Line>
			<Button
				title={"Далее"}
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
			/>
		</ST.TestTimer>
	);
};

export default TestTimer;
