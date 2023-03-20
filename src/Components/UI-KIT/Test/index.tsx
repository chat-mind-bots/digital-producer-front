import React, { FC } from "react";

import TestGet from "Shared/Test/components/TestGet";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";

import TestIdUserUser from "./TestId/User";
import CourseResultType from "./test-props.type";
import Loader from "../Loader";
import TestIdUserProducer from "./TestId/Producer";
import TestIdUserAdmin from "./TestId/Admin";

type Type = { role: UserRoleEnum };

const Test: FC<Type> = ({ role }) => (
	<TestGet role={role}>
		<SwitchTest role={role} />
	</TestGet>
);

const SwitchTest: FC<Type & CourseResultType> = ({ result, role, refetch }) => {
	if (result) {
		switch (role) {
			case UserRoleEnum.USER:
				return (
					<TestIdUserUser
						{...result}
						refetch={refetch}
					/>
				);
			case UserRoleEnum.PRODUCER:
				return (
					<TestIdUserProducer
						{...result}
						refetch={refetch}
					/>
				);
			case UserRoleEnum.ADMIN:
				return (
					<TestIdUserAdmin
						{...result}
						refetch={refetch}
					/>
				);
			default:
				return <></>;
		}
	} else {
		return <Loader />;
	}
};

export default Test;
