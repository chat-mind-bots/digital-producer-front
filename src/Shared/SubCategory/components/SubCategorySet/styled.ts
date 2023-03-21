import styled from "styled-components";

import Colors from "../../../../Colors";

export const WrapperEdit = styled.span`
	background: ${Colors.BLUE} !important;
	padding: 6px;
	border-radius: 50%;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	&:hover {
		& path {
			fill: ${Colors.WHITE};
		}
	}
	cursor: pointer;
`;
