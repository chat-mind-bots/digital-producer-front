import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import Loader from "Components/UI-KIT/Loader";
import { useAppSelector } from "Hooks/redux";
import RequestStatuses from "RequestStatuses";

import * as ST from "./styled";

type SwitchStatusProps = {
	status?: RequestStatuses;
};

const Initialization = () => {
	const location = useLocation();

	const isAuthPage = location.pathname.indexOf("/auth/") === 0;

	const auth = useAppSelector((state) => state.auth);

	return (
		<ST.Initialization>
			{isAuthPage ? (
				<SwitchStatus status={auth.statusCode} />
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
				<ST.Title isErr={true}>{t("Components.STATUS_TOKEN.ERR")}</ST.Title>
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
