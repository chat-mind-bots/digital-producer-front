import React, { FC } from "react";

import { UserRoleEnum } from "Shared/Auth/types/role.enum";

import NewsIdUserUser from "./NewsId/User";
import NewsResultType from "./news-props.type";
import Loader from "../Loader";
import NewsIdUserProducer from "./NewsId/Producer";
import NewsIdUserAdmin from "./NewsId/Admin";
import NewsGet from "../../../Shared/News/components/NewsGet";

type Type = { role: UserRoleEnum };

const News: FC<Type> = ({ role }) => (
	<NewsGet>
		<SwitchNews role={role} />
	</NewsGet>
);

const SwitchNews: FC<Type & NewsResultType> = ({ result, role, refetch }) => {
	if (result) {
		switch (role) {
			case UserRoleEnum.USER:
				return (
					<NewsIdUserUser
						{...result}
						refetch={refetch}
					/>
				);
			case UserRoleEnum.PRODUCER:
				return (
					<NewsIdUserProducer
						{...result}
						refetch={refetch}
					/>
				);
			case UserRoleEnum.ADMIN:
				return (
					<NewsIdUserAdmin
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

export default News;
