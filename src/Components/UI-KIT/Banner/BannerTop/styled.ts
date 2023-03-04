import styled from "styled-components";

import Colors from "Colors";

export const NewsBanner = styled.div`
	display: flex;
	background: ${Colors.WHITE1};
	border-radius: 24px;
	max-width: 1103px;
	width: 100%;
	overflow: hidden;
	height: 100%;
	min-height: 254px;
`;

export const NewsBannerLoader = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
`;

export const Title = styled.p`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 32px;
	line-height: 44px;
	color: ${Colors.BLACK1};
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const WrapperInfo = styled.div`
	padding: 48px 36px;
	max-width: 327px;
	width: 100%;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	margin-top: 16px;
	color: ${Colors.BLACK1};
	padding-right: 41px;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const WrapperButton = styled.div`
	height: max-content;
	margin-top: 24px;
	& > button {
		max-width: 300px;
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	& > svg {
		height: 100%;
	}
	& > object {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}
`;
