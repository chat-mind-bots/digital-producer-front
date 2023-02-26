import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";

import LazyCabinetUser from "./Cabinet";
import LazyCabinetProducer from "./Cabinet/Producer";
import LazyCabinetAdmin from "./Cabinet/Admin";
import { useAppSelector } from "../Hooks/redux";
import { routeBuilder } from "../Router/services/route-builder";
import { getUrlByRoleService } from "../Shared/Auth/services/get-url-by-role.service";
import { getMainRoleService } from "../Shared/Auth/services/get-main-role.service";

type Props = {
	role: UserRoleEnum;
};

const LazyCabinet: FC<Props> = ({ role }) => {
	const auth = useAppSelector((state) => state.auth);

	return auth.role.includes(role) ? (
		<SwitchCabinet role={role} />
	) : (
		<Navigate
			to={routeBuilder(getUrlByRoleService(getMainRoleService(auth.role)))}
			replace={true}
		/>
	);
};

const SwitchCabinet: FC<Props> = ({ role }) => {
	switch (role) {
		case UserRoleEnum.USER:
			return <LazyCabinetUser />;
		case UserRoleEnum.PRODUCER:
			return <LazyCabinetProducer />;
		case UserRoleEnum.ADMIN:
			return <LazyCabinetAdmin />;
		case UserRoleEnum.SUPER_ADMIN:
			return <LazyCabinetAdmin />;
		default:
			return <></>;
	}
};

export default LazyCabinet;
