import styled from "styled-components";

import Colors from "Constants/Colors";

import BreakPoints from "../../../Constants/BreakPoints";

export const ShoppingCard = styled.div`
	padding: 20px 20px 32px;
	border-radius: 24px;
	background: ${Colors.WHITE};
	max-width: 258px;
	border: 1px solid ${Colors.WHITE2};
	position: sticky;
	top: 129px;
	height: max-content;
	& > object {
		width: 258px;
		height: 248px;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const Price = styled.p`
	font-family: "Vela Sans";
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 32px;
	color: ${Colors.BLUE};
	margin-top: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	letter-spacing: -1.8px;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	width: 100%;
	display: flex;
`;

export const OldPrice = styled.span`
	font-family: "Vela Sans";
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	line-height: 32px;
	color: ${Colors.GREY1};
	display: block;
	text-decoration: line-through;
	letter-spacing: -1.8px;
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 32px;
	color: ${Colors.BLACK1};
	margin-top: 24px;
	padding: 0 5px;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 11px;
	line-height: 18px;
	text-align: initial;
	margin-top: 24px;
	padding: 0 5px;
	color: ${Colors.BLACK1};
`;

export const WrapperButton = styled.div<{ disabled?: boolean }>`
	margin-top: 24px;
	& > button {
		pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
	}
	cursor: ${({ disabled }) => (disabled ? "pointer" : "auto")};
`;
