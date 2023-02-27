import styled from "styled-components";

import Colors from "Colors";

type ItemProps = {
	isLast: boolean;
};

export const BreadCrumbs = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const Item = styled.p<ItemProps>`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: ${({ isLast }) => (isLast ? Colors.BLUE : Colors.GREY4)};
	cursor: ${({ isLast }) => !isLast && "pointer"};
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	max-width: 250px;
	&:hover {
		color: ${Colors.BLUE};
	}
	&:after {
		content: ${({ isLast }) => !isLast && "/"};
		margin-left: 12px;
		color: ${Colors.GREY4} !important;
	}
`;
