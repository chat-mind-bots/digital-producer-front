import React, { FC } from "react";

// import Loader from "Components/UI-KIT/Loader";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";

import LazyCabinetUser from "./Cabinet";
import LazyCabinetProducer from "./Cabinet/Producer";
import LazyCabinetAdmin from "./Cabinet/Admin";

// const LazyCabinetUser = lazy(() => import("Layout/Cabinet"));
// const LazyCabinetAdmin = lazy(() => import("Layout/Cabinet/Admin"));
// const LazyCabinetProducer = lazy(() => import("Layout/Cabinet/Producer"));

type Props = {
	role: UserRoleEnum;
};

const LazyCabinet: FC<Props> = ({ role }) => {
	return (
		// <Suspense fallback={<Loader />}>
		<SwitchCabinet role={role} />
		// </Suspense>
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
