import React, { FC } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import RoutesList from "Router/routesList";
import Logo from "Components/UI-KIT/Logo";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Constants/Colors";

import * as ST from "./styled";
import checkAuth from "../../Utils/CheckAuth";
import Image from "../../Components/UI-KIT/Atoms/Image";

type MainProps = {
	isRegistration?: boolean;
};

const Main: FC<MainProps> = ({ isRegistration }) => {
	const authTokenFromLocalStorage = checkAuth();
	const navigate = useNavigate();

	return (
		<ST.Main>
			<ST.Image>
				<Image src={"/image/mainPage.webp"} />
			</ST.Image>
			<ST.Wrapper>
				<ST.Header>
					<ST.Logo>
						<Logo isMax={true} />
					</ST.Logo>
					<ST.LogoMobile>
						<Logo isMax={false} />
					</ST.LogoMobile>
					<ST.WrapperButton>
						<Button
							title={isRegistration ? "Регистрация" : "Войти"}
							padding={"10px 14px"}
							fontSize={"16px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							background={Colors.TRANSPARENT}
							color={Colors.BLACK1}
							backgroundAnimation={Colors.BLACK1}
							colorHover={Colors.WHITE}
							width={"max-content"}
							onClick={() => {
								if (!isRegistration) {
									authTokenFromLocalStorage
										? navigate("/admin")
										: window.open(" https://t.me/SvyatoslavZhilin3312281_bot");
								}
							}}
						/>
					</ST.WrapperButton>
				</ST.Header>
				<ST.Content>
					<Outlet />
				</ST.Content>
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
};

export default Main;
