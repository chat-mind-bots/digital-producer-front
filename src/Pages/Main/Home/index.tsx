import React from "react";
import { Link } from "react-router-dom";

import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import * as ST from "./styled";
import checkRole from "../../../Utils/CheckRole";

const Home = () => {
	const authRoleFromLocalStorage = checkRole();

	return (
		<ST.Home>
			<ST.Title>Платформа для создания и продажи онлайн-курсов</ST.Title>
			<ST.Description>
				Самые последние и актуальные новости и обновления платформы
			</ST.Description>
			<ST.Buttons>
				{authRoleFromLocalStorage?.map((e) => (
					<Link
						key={`App-to-${e}`}
						to={e.toLocaleLowerCase()}
					>
						<Button
							title={`Войти как ${e.toLocaleLowerCase()}`}
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

				{/*<Link to={routeBuilder(RoutesList.PRODUCER)}>*/}
				{/*	<Button*/}
				{/*		title={"Как продюсер"}*/}
				{/*		padding={"18px 24px"}*/}
				{/*		fontSize={"16px"}*/}
				{/*		lineHeight={"20px"}*/}
				{/*		fontWeight={"600"}*/}
				{/*		background={Colors.TRANSPARENT}*/}
				{/*		color={Colors.BLACK1}*/}
				{/*		backgroundAnimation={Colors.BLACK1}*/}
				{/*		colorHover={Colors.WHITE}*/}
				{/*		border={`2px solid ${Colors.BLACK1}`}*/}
				{/*		width={"max-content"}*/}
				{/*	/>*/}
				{/*</Link>*/}
				{/*<Link to={routeBuilder(RoutesList.ADMIN)}>*/}
				{/*	<Button*/}
				{/*		title={"Как админ"}*/}
				{/*		padding={"18px 24px"}*/}
				{/*		fontSize={"16px"}*/}
				{/*		lineHeight={"20px"}*/}
				{/*		fontWeight={"600"}*/}
				{/*		background={Colors.TRANSPARENT}*/}
				{/*		color={Colors.BLACK1}*/}
				{/*		backgroundAnimation={Colors.BLACK1}*/}
				{/*		colorHover={Colors.WHITE}*/}
				{/*		border={`2px solid ${Colors.BLACK1}`}*/}
				{/*		width={"max-content"}*/}
				{/*	/>*/}
				{/*</Link>*/}
			</ST.Buttons>
		</ST.Home>
	);
};

export default Home;
