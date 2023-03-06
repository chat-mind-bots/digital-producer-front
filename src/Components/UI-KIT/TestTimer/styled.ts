import styled from "styled-components";

import Colors from "Colors";

export const TestTimer = styled.div`
	position: sticky;
	max-width: 260px;
	max-height: 500px;
	height: 100%;
	border-radius: 16px;
	border: 1px solid #e0e0e0;
	display: flex;
	flex-wrap: wrap;
	gap: 14px;
	padding: 20px;
	top: 129px;
`;

export const Time = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	color: ${Colors.GREY1};
`;

export const AllCount = styled.p`
	color: ${Colors.GREY1};
`;

export const Count = styled.p`
	background: ${Colors.GREY3};
	color: ${Colors.GREEN};
	justify-content: center;
	display: flex;
	width: 100%;
	max-width: 31px;
	border-radius: 5px;
	padding: 5px 7px;
	box-sizing: border-box;
`;

export const Line = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${Colors.GREY1};
`;

export const CountAll = styled.p`
	width: 100%;
	max-width: 31px;
	padding: 5px 7px;
	box-sizing: border-box;
	justify-content: center;
	display: flex;
`;
