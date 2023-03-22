import React, { useState } from "react";

import Button from "Components/UI-KIT/Atoms/Button";
import Input from "Components/UI-KIT/Atoms/Input";
import Colors from "Constants/Colors";

import * as ST from "./styled";

const LogIn = () => {
	const [mail, setMail] = useState<string>("");
	const [pass, setPass] = useState<string>("");

	return (
		<ST.LogIn>
			<ST.Title>Вход в аккаунт</ST.Title>
			<ST.Inputs>
				<ST.InputWrapper>
					<ST.InputTitle>электронная почта:</ST.InputTitle>
					<Input
						placeholder={"Введите почту"}
						value={mail}
						setValue={setMail}
						padding={"18px 18px 18px 37px"}
						fontSize={"16px"}
						fontWeight={"600"}
						borderSize={"2px"}
					/>
				</ST.InputWrapper>
				<ST.InputWrapper>
					<ST.InputTitle>электронная почта:</ST.InputTitle>
					<Input
						placeholder={"Введите пароль"}
						value={pass}
						setValue={setPass}
						padding={"18px 18px 18px 37px"}
						fontSize={"16px"}
						fontWeight={"600"}
						borderSize={"2px"}
					/>
				</ST.InputWrapper>
			</ST.Inputs>
			<ST.WrapperButton>
				<Button
					title={"Войти в аккаунт"}
					padding={"18px 116px"}
					fontSize={"16px"}
					lineHeight={"20px"}
					fontWeight={"600"}
					background={Colors.BLUE}
					color={Colors.WHITE}
					backgroundAnimation={Colors.BLUE_DARK}
					colorHover={Colors.WHITE}
					width={"max-content"}
				/>
			</ST.WrapperButton>
		</ST.LogIn>
	);
};

export default LogIn;
