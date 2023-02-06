import styled from "styled-components";
import Colors from "Colors";

export const Registration = styled.div`
	max-width: 364px;
`;

export const Title = styled.div`
	font-family: "Vela Sans";
	font-weight: 700;
	font-size: 32px;
	line-height: 150%;
	color: ${Colors.BLACK1};
`;

export const Agreement = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	color: ${Colors.GREY1};
`;

export const SignIn = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	color: ${Colors.GREY1};
`;

export const FooterContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
	margin-top: 28px;
`;

export const InputTitle = styled.p`
	font-family: "Vela Sans";
	font-weight: 800;
	font-size: 12px;
	line-height: 20px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: ${Colors.GREY1};
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

export const Inputs = styled.div`
	margin-top: 28px;
	display: flex;
	flex-wrap: wrap;
	gap: 28px;
`;

export const LoginHere = styled.span`
	color: ${Colors.BLUE};
`;
