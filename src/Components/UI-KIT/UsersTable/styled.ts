import styled from "styled-components";

import Colors from "Colors";

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

export const Role = styled.span<{ background: Colors; color: Colors }>`
	padding: 12px 15px;
	background: ${({ background }) => background};
	color: ${({ color }) => color};
`;

export const ThOpen = styled.td`
	padding: 12px 15px;
	cursor: pointer;
	&:hover {
		background: ${Colors.BLUE};
		color: ${Colors.WHITE};
	}
`;

export const ThOpenCourses = styled.td`
	& > a {
		height: calc(100% + 2px);
		width: calc(100% + 2px);
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		padding: 12px 15px;
		cursor: pointer;
		box-sizing: border-box;
		&:hover {
			background: ${Colors.BLUE};
			color: ${Colors.WHITE};
		}
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

export const WrapperTables = styled.div`
	width: 100%;
	display: flex;
	gap: 130px;
	overflow: auto;
`;

export const WrapperAvatar = styled.div`
	position: relative;
	& > object {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const DefaultImage = styled.div`
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	color: ${Colors.WHITE};
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: linear-gradient(-125deg, ${Colors.WHITE}, ${Colors.BLUE});
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
`;
