import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import Image from "Components/UI-KIT/Atoms/Image";
import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "Icons/ArrowUp.svg";
import { useAppSelector } from "Hooks/redux";
import logout from "Utils/Logout";
import RequestStatuses from "Constants/RequestStatuses";

import * as ST from "./styled";
import { UserRoleEnum } from "../../../Shared/Auth/types/role.enum";
import checkRole from "../../../Utils/CheckRole";

const AuthBlock = () => {
	const { t } = useTranslation();
	const [isWindow, setIsWindow] = useState<boolean>(false);
	const auth = useAppSelector((state) => state.auth);

	const logOutHandler = () => {
		logout(RequestStatuses.UNAUTHORIZED);
	};
	const authRoleFromLocalStorage = checkRole();
	const navigate = useNavigate();

	const location = useLocation();

	return auth ? (
		<ST.AuthBlock onClick={() => setIsWindow(!isWindow)}>
			{isWindow && <ST.BlockBackground />}
			<ST.WrapperAvatar>
				{auth.photos?.small && <Image src={auth.photos?.small} />}
				<ST.DefaultImage>
					{auth.firstName?.length && auth.firstName[0]}
				</ST.DefaultImage>
			</ST.WrapperAvatar>
			<ST.WrapperInfo>
				<ST.Name>{auth.firstName}</ST.Name>
				<ST.Mail>@{auth.username}</ST.Mail>
			</ST.WrapperInfo>
			<ST.WrapperArrowDown>
				{!isWindow ? <ArrowDown /> : <ArrowUp />}
				<ST.Window isOpen={isWindow}>
					{authRoleFromLocalStorage?.map((e) => {
						return (
							<ST.ItemWindow
								key={`App-to-${e}`}
								onClick={() => navigate("/" + e.toLocaleLowerCase())}
								active={
									e.toLocaleLowerCase() === location.pathname.split("/")[1]
								}
							>
								{`Кабинет ${
									e === UserRoleEnum.USER
										? "пользователя"
										: e === UserRoleEnum.PRODUCER
										? "продюсера"
										: e.toLocaleLowerCase()
								}`}
							</ST.ItemWindow>
						);
					})}
					<ST.ItemWindow
						isExit={true}
						onClick={logOutHandler}
					>
						{t("Components.UIKIT.AuthBlock.Exit")}
					</ST.ItemWindow>
				</ST.Window>
			</ST.WrapperArrowDown>
		</ST.AuthBlock>
	) : (
		<></>
	);
};

export default AuthBlock;
