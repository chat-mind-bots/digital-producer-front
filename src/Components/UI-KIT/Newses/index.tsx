import React, { FC } from "react";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";

import NewsesResultType from "./newses-props.type";
import AdminCoursesList from "./NewsesList/Admin";
import ProducerCoursesList from "./NewsesList/Producer";
import UserNewsesList from "./NewsesList/User";
import NewsesGet from "../../../Shared/News/components/NewsesGet";

type Type = {
	role: UserRoleEnum;
	header: string;
};

const Newses: FC<Type> = ({ role, header }) => {
	return (
		<NewsesGet header={header}>
			<SwitchNewses
				role={role}
				header={header}
			/>
		</NewsesGet>
	);
};

const SwitchNewses: FC<Type & NewsesResultType> = ({
	result,
	role,
	refetch,
}) => {
	switch (role) {
		case UserRoleEnum.USER:
			return <UserNewsesList result={result} />;
		case UserRoleEnum.ADMIN:
			return (
				<AdminCoursesList
					refetch={refetch}
					result={result}
				/>
			);
		case UserRoleEnum.PRODUCER:
			return <ProducerCoursesList result={result} />;
		default:
			return <></>;
	}
};

export default Newses;
