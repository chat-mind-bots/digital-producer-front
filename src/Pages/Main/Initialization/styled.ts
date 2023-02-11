import styled from "styled-components";

import Colors from "Colors";

type TitleProps = {
	isErr?: boolean;
	isCorrect?: boolean;
};

export const Initialization = styled.div`
	width: 100%;
`;

export const Title = styled.div<TitleProps>`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 32px;
	line-height: 150%;
	color: ${({ isErr, isCorrect }) =>
		isErr ? Colors.RED : isCorrect ? Colors.GREEN : Colors.BLACK1};
	text-align: center;
	width: 100%;
`;
