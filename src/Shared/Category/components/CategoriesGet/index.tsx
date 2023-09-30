import React from "react";

import { useAppSelector } from "Hooks/redux";
import WrapperRequest from "Components/WrapperRequest";
import WrapperContent from "Components/WrapperContent";

import CategoriesTable from "../../../../Components/UI-KIT/CategoriesTable";
import { useGetCategoriesQuery } from "../../redux/category.api";
import Loader from "../../../../Components/UI-KIT/Loader";

const CategoriesGet = () => {
	const auth = useAppSelector((state) => state.auth);
	const query = {
		authToken: auth.token ?? "",
	};
	const { data, isError, isLoading, refetch } = useGetCategoriesQuery(query);

	return (
		<WrapperRequest
			isError={isError}
			isLoading={isLoading}
		>
			<WrapperContent header={"Категории"}>
				{data?.data ? (
					<CategoriesTable
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

export default CategoriesGet;
