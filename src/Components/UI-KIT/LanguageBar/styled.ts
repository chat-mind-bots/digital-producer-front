import styled from "styled-components";

import Colors from "Constants/Colors";

export const LanguageBar = styled.div`
	display: flex;
	gap: 20px;
`;

export const Button = styled.button`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	color: ${Colors.WHITE};
	background: ${Colors.BLUE};
	border-radius: 8px;
	display: block;
	width: 100%;
	margin-top: 28px;
	padding: 13px 0;
`;
