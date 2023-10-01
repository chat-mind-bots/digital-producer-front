import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";

import Loader from "Components/UI-KIT/Loader";
import { useAppSelector } from "Hooks/redux";
import RequestStatuses from "Constants/RequestStatuses";
import { getBotNameService } from "Utils/get-bot-name.service";

import * as ST from "./styled";
import Button from "../../../Components/UI-KIT/Atoms/Button";
import Colors from "../../../Constants/Colors";

type SwitchStatusProps = {
	status?: RequestStatuses;
};

const Initialization = () => {
	const location = useLocation();

	const isAuthPage =
		location.pathname.indexOf("/auth/") === 0 || location.pathname === "/";

	const auth = useAppSelector((state) => state.auth);

	return (
		<ST.Initialization>
			{isAuthPage ? (
				location.pathname === "/" ? (
					<Outlet />
				) : (
					<SwitchStatus status={auth.statusCode} />
				)
			) : (
				<ST.MainLoader>
					<Loader />
				</ST.MainLoader>
			)}
		</ST.Initialization>
	);
};

const SwitchStatus: FC<SwitchStatusProps> = ({ status }) => {
	const { t } = useTranslation();

	switch (status) {
		case RequestStatuses.UNAUTHORIZED:
			return (
				<>
					<ST.Title isErr={true}>{t("Components.STATUS_TOKEN.ERR")}</ST.Title>
					<ST.WrapperButton>
						<Button
							title={"Запросить новую ссылку"}
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
								window.open(`https://t.me/${getBotNameService()}`);
							}}
						/>
					</ST.WrapperButton>
				</>
			);
		case RequestStatuses.PENDING:
			return (
				<>
					<ST.AuthLoader>
						<Loader />
					</ST.AuthLoader>
					<ST.Title>{t("Components.STATUS_TOKEN.PENDING")}</ST.Title>
				</>
			);
		case RequestStatuses.SUCCESS_201:
			return (
				<ST.Title isCorrect={true}>
					{t("Components.STATUS_TOKEN.CORRECT")}
				</ST.Title>
			);
		default:
			return <ST.Title>{t("Components.STATUS_TOKEN.OTHER")}</ST.Title>;
	}
};
export default Initialization;
