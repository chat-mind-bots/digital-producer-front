import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Loader from "Components/UI-KIT/Loader";
import { useAppSelector } from "Hooks/redux";
import ErrType from "Types/RequestStatusesType";
import ErrStatuses from "RequestStatuses";

import * as ST from "./styled";

type SwitchStatusProps = {
	status?: ErrType;
};

const Initialization = () => {
	const auth = useAppSelector((state) => state.auth);

	return (
		<ST.Initialization>
			<SwitchStatus status={auth.statusCode} />
		</ST.Initialization>
	);
};

const SwitchStatus: FC<SwitchStatusProps> = ({ status }) => {
	const { t } = useTranslation();

	switch (status) {
		case ErrStatuses.UNAUTHORIZED:
			return (
				<ST.Title isErr={true}>{t("Components.STATUS_TOKEN.ERR")}</ST.Title>
			);
		case ErrStatuses.PENDING:
			return (
				<>
					<Loader />
					<ST.Title>{t("Components.STATUS_TOKEN.PENDING")}</ST.Title>
				</>
			);
		case ErrStatuses.SUCCESS:
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
