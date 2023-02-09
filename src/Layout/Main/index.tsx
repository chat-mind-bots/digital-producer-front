import React, { FC } from "react";
import { Link } from "react-router-dom";

import RoutesList from "Router/routesList";
import Logo from "Components/UI-KIT/Logo";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import * as ST from "./styled";

type MainProps = {
	children: JSX.Element;
	isRegistration?: boolean;
};

const Main: FC<MainProps> = ({ children, isRegistration }) => (
	<ST.Main>
		<ST.Image>
			<img
				src={"/mainPage.svg"}
				alt="Заставка сайта"
			/>
		</ST.Image>
		<ST.Wrapper>
			<ST.Header>
				<ST.Logo>
					<Logo isMax={true} />
				</ST.Logo>
				<ST.WrapperButton>
					<Link
						to={isRegistration ? RoutesList.REGISTRATION : RoutesList.LOGIN}
					>
						<Button
							title={isRegistration ? "Регистрация" : "Уже есть аккаунт"}
							padding={"10px 14px"}
							fontSize={"16px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							background={Colors.TRANSPARENT}
							color={Colors.BLACK1}
							backgroundAnimation={Colors.BLACK1}
							colorHover={Colors.WHITE}
							width={"max-content"}
						/>
					</Link>
				</ST.WrapperButton>
			</ST.Header>
			<ST.Content>{children}</ST.Content>
			<ST.Footer>
				<Link to={RoutesList.DOCUMENT_ID}>
					<ST.Name>Пользовательское соглашение</ST.Name>
				</Link>
				<Link to={RoutesList.DOCUMENT_ID}>
					<ST.Name>Политика конфидециальности</ST.Name>
				</Link>
			</ST.Footer>
		</ST.Wrapper>
	</ST.Main>
);

export default Main;
