import styled from "styled-components";

import Colors from "Colors";

type TitleProps = {
	isErr?: boolean;
	isCorrect?: boolean;
};

export const Initialization = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	flex-wrap: wrap;
`;

export const MainLoader = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const AuthLoader = styled.div`
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
