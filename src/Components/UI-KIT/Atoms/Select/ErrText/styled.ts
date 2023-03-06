import styled from "styled-components";

import Colors from "Colors";

export const ErrorText = styled.p`
	width: 100%;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: ${Colors.RED};
	display: flex;
	align-items: center;
	gap: 10px;
	padding-left: 9px;
	margin-top: 10px;
	padding-bottom: 10px;
`;
