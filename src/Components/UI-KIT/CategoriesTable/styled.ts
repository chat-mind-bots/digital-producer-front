import styled from "styled-components";

import Colors from "Colors";
import BreakPoints from "BreakPoints";

export const CategoriesTable = styled.div`
	width: 100%;
`;

export const Table = styled.table`
	font-family: "Vela Sans";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	width: 100%;
	border-collapse: collapse;
	border-radius: 12px;
	overflow: hidden;
	height: max-content;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		font-size: 15px;
	}
`;

export const Thead = styled.thead`
	tr {
		background-color: ${Colors.BLUE} !important;
		color: ${Colors.WHITE};
		text-align: right;
		& th:first-child {
			text-align: left;
		}
	}
`;

export const Tr = styled.tr`
	background-color: ${Colors.BLUE};
	color: ${Colors.WHITE};
	text-align: right;
	transition: 0.5s;
	& th:first-child {
		text-align: left;
	}
	&:hover {
		background: ${Colors.GREY3};
		transition: 0.2s;
	}
`;

export const Td = styled.td`
	padding: 12px 15px;
`;

export const ThOpen = styled.td`
	padding: 12px 15px;
	cursor: pointer;
	&:hover {
		background: ${Colors.BLUE};
		color: ${Colors.WHITE};
	}
`;

export const ThOpenEdit = styled.td`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 15px;
`;

export const Tbody = styled.tbody`
	text-align: right;
	& td:first-child {
		text-align: left;
	}
	& td {
		color: ${Colors.BLACK1};
	}

	& tr {
		background-color: ${Colors.WHITE};
	}
	& tr {
		border-bottom: 1px solid ${Colors.GREY3};
	}
	tr {
		border-bottom: 1px solid ${Colors.GREY3};
	}
`;

export const Th = styled.th`
	padding: 12px 15px;
`;

export const WrapperCreate = styled.div`
	display: flex;
	gap: 130px;
	justify-content: space-around;
	align-items: center;
	margin-top: 50px;
	& button {
		max-width: 300px;
	}
	@media (max-width: ${BreakPoints.MOBILE}px) {
		gap: 50px;
	}
`;

export const WrapperTables = styled.div`
	width: 100%;
	display: flex;
	gap: 130px;
	@media (max-width: ${BreakPoints.MOBILE}px) {
		flex-wrap: wrap;
		gap: 50px;
	}
`;

export const CircleColor = styled.span<{ background: string }>`
	width: 36px;
	height: 36px;
	display: block;
	border-radius: 50%;
	margin-left: auto;
	background: ${({ background }) => background};
`;
