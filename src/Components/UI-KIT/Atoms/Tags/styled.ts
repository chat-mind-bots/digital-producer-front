import styled from "styled-components";

type TagProps = {
	background: string;
	color: string;
};

export const Tags = styled.div`
	gap: 10px;
	display: flex;
	align-items: center;
	margin-top: 14px;
`;

export const Tag = styled.p<TagProps>`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 10px;
	line-height: 16px;
	letter-spacing: 1px;
	text-transform: uppercase;
	background: ${({ background }) => background};
	color: ${({ color }) => color};
	border-radius: 3px;
	padding: 3px 8px;
`;
