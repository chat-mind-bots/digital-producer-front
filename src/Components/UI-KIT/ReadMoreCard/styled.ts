import styled from "styled-components";

import Colors from "Constants/Colors";

export const ReadMoreCard = styled.div`
	background: ${Colors.WHITE};
	border-radius: 24px;
	padding: 18px 18px 24px;
	border: 2px solid ${Colors.TRANSPARENT};
	max-width: 340px;
	box-sizing: border-box;
	&:hover {
		border: 2px solid ${Colors.WHITE2};
	}
`;

export const Name = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 140%;
	color: ${Colors.BLACK1};
	margin-top: 10px;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: ${Colors.GREY1};
	margin-top: 10px;
`;
