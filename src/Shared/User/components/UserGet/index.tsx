import React from "react";

import { useAppSelector } from "Hooks/redux";
import WrapperRequest from "Components/WrapperRequest";
import WrapperContent from "Components/WrapperContent";

import Loader from "../../../../Components/UI-KIT/Loader";
import { useGetUsersQuery } from "../../redux/user.api";
import UsersTable from "../../../../Components/UI-KIT/UsersTable";

const UserGet = () => {
	const auth = useAppSelector((state) => state.auth);
	const query = {
		authToken: auth.token ?? "",
	};
	const { data, isError, isLoading, refetch } = useGetUsersQuery(query);

	return (
		<WrapperRequest
			isError={isError}
			isLoading={isLoading}
		>
			<WrapperContent header={"Пользователи"}>
				{data?.data ? (
					<UsersTable
						data={data.data}
						refetch={refetch}
					/>
				) : (
					<Loader />
				)}
			</WrapperContent>
		</WrapperRequest>
	);
};

export default UserGet;
