import React, { FC, Children, cloneElement } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "Hooks/redux";
import Loader from "Components/UI-KIT/Loader";

import { useGetTestQuery } from "../../redux/test.api";
import TestResultType from "../../../../Components/UI-KIT/Test/test-props.type";
import { UserRoleEnum } from "../../../Auth/types/role.enum";

type TestGetProps = Record<"children", React.ReactElement<TestResultType>> & {
	role: UserRoleEnum;
};

const TestGet: FC<TestGetProps> = ({ children, role }) => {
	const { id } = useParams();
	const auth = useAppSelector((state) => state.auth);
	const query = {
		authToken: auth.token ?? "",
		idTest: id,
		role: role,
	};
	const { data, refetch } = useGetTestQuery(query);

	return data ? (
		<>
			{Children.toArray(children).map((child) =>
				cloneElement(child as React.ReactElement<TestResultType>, {
					result: data,
					refetch: refetch,
				})
			)}
		</>
	) : (
		<Loader />
	);
};

export default TestGet;
