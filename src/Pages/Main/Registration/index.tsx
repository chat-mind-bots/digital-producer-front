import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoutesList from "Router/routesList";
import Button from "Components/UI-KIT/Atoms/Button";
import Input from "Components/UI-KIT/Input";
import Colors from "Colors";
import * as ST from "./styled";

const Registration = () => {
	const [name, setName] = useState<string>("");
	const [mail, setMail] = useState<string>("");
	const [pass, setPass] = useState<string>("");

	return (
		<ST.Registration>
			<ST.Title>Создайте бесплатную учётную запись</ST.Title>
			<ST.Inputs>
				<ST.InputWrapper>
					<ST.InputTitle>Имя пользователя:</ST.InputTitle>
					<Input
						placeholder={"Введите имя"}
						value={name}
						setValue={setName}
						padding={"18px 18px 18px 37px"}
						fontSize={"16px"}
						fontWeight={"600"}
						borderSize={"2px"}
					/>
				</ST.InputWrapper>
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
					<ST.InputTitle>Введите пароль</ST.InputTitle>
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
			<ST.FooterContent>
				<Button
					title={"Зарегистрироваться"}
					padding={"18px 96px"}
					fontSize={"16px"}
					lineHeight={"20px"}
					fontWeight={"600"}
					background={Colors.BLUE}
					color={Colors.WHITE}
					backgroundAnimation={Colors.BLUE_DARK}
					colorHover={Colors.WHITE}
					width={"max-content"}
				/>
				<ST.Agreement>
					Нажимая кнопку «Зарегистрироваться», Вы принимаете условия
					Пользовательского соглашения.
				</ST.Agreement>
				<ST.SignIn>
					Уже зарегистрированы?{" "}
					<Link to={RoutesList.LOGIN}>
						<ST.LoginHere>Войти тут</ST.LoginHere>{" "}
					</Link>
				</ST.SignIn>
			</ST.FooterContent>
		</ST.Registration>
	);
};

export default Registration;
