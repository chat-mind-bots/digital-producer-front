import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Constants/Colors";

import * as ST from "./styled";
import checkRole from "../../../Utils/CheckRole";
import checkAuth from "../../../Utils/CheckAuth";
import { UserRoleEnum } from "../../../Shared/Auth/types/role.enum";

const Home = () => {
	const authRoleFromLocalStorage = checkRole();
	const authTokenFromLocalStorage = checkAuth();
	const navigate = useNavigate();

	return (
		<ST.Home>
			<ST.Title>Платформа для создания и продажи онлайн-курсов</ST.Title>
			<ST.Description>
				Самые последние и актуальные новости и обновления платформы
			</ST.Description>
			<ST.Buttons>
				{!authRoleFromLocalStorage?.length && (
					<Button
						title={"Попробовать бесплатно"}
						padding={"18px 24px"}
						fontSize={"16px"}
						lineHeight={"20px"}
						fontWeight={"600"}
						background={Colors.BLUE}
						color={Colors.WHITE}
						backgroundAnimation={Colors.BLUE_DARK}
						colorHover={Colors.WHITE}
						width={"100%"}
						onClick={() => {
							authTokenFromLocalStorage
								? navigate("/admin")
								: window.open(" https://t.me/DigitalProducerDevelopBot");
						}}
					/>
				)}

				{authRoleFromLocalStorage?.map((e) => (
					<Link
						key={`App-to-${e}`}
						to={e.toLocaleLowerCase()}
					>
						<Button
							title={`Войти как ${
								e === UserRoleEnum.USER ? "пользователь" : e.toLocaleLowerCase()
							}`}
							padding={"18px 24px"}
							fontSize={"16px"}
							lineHeight={"20px"}
							fontWeight={"600"}
							background={Colors.BLUE}
							color={Colors.WHITE}
							backgroundAnimation={Colors.BLUE_DARK}
							colorHover={Colors.WHITE}
							width={"max-content"}
						/>
					</Link>
				))}
			</ST.Buttons>
		</ST.Home>
	);
};

export default Home;
