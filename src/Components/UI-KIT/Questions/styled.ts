import styled from "styled-components";

import Colors from "Constants/Colors";

type QuestionProps = {
	isOpen: boolean;
	correct?: boolean;
};

export const Questions = styled.div`
	width: 100%;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	gap: 28px;
	padding: 6px 0;
	border-radius: 20px;
`;

export const Question = styled.div<QuestionProps>`
	position: relative;
	max-width: 850px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	background: ${({ correct }) =>
		correct === false
			? Colors.RED
			: correct === true
			? Colors.BLUE
			: Colors.WHITE};
	padding: 18px;
	border-radius: 16px;
	border: 1px solid rgba(217, 217, 217, 0.5);
	box-sizing: border-box;
	filter: blur(${({ isOpen }) => (isOpen ? 0 : 5)}px);
	overflow: hidden;
	pointer-events: ${({ isOpen }) => !isOpen && "none"};
`;

export const AnswerWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;
	padding: 13px 13px 13px 18px;
	background: ${Colors.WHITE};
	border-radius: 20px;
	border: 2px solid ${Colors.TRANSPARENT};
	width: 100%;
	cursor: pointer;
	box-sizing: border-box;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
		border-radius: 16px;
	}
`;

export const Answers = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	width: 100%;
`;

export const Text = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.GREY1};
	background: ${Colors.WHITE};
	padding: 19px;
	border-radius: 20px;
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 100;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Answer = styled.p`
	font-weight: 500;
	font-size: 15px;
	line-height: 155%;
	color: ${Colors.GREY1};
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 100;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const WrapperSettings = styled.div`
	position: absolute;
	font-weight: 500;
	font-size: 15px;
	line-height: 155%;
	color: ${Colors.GREY1};
	top: 15px;
	right: 15px;
	:hover {
		cursor: pointer;
		fill: ${Colors.BLUE};
	}
`;
