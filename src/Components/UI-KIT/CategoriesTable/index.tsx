import React, { FC, useState } from "react";

import * as ST from "./styled";
import { CategoriesApiPropsSet } from "../../../Shared/Category/redux/category.api";
import { CategoryCreate } from "../../../Shared/Category/components/CategorySet/create";
import CourseResultType from "../Course/course-props.type";
import { SubCategoryCreate } from "../../../Shared/SubCategory/components/SubCategorySet/create";
import { SubCategoryUpdate } from "../../../Shared/SubCategory/components/SubCategorySet/update";
import { CategoryUpdate } from "../../../Shared/Category/components/CategorySet/update";

const CategoriesTable: FC<
	CategoriesApiPropsSet & Pick<CourseResultType, "refetch">
> = ({ data, refetch }) => {
	const [categoryId, setIdCategory] = useState<string>();

	return (
		<ST.CategoriesTable>
			<ST.WrapperTables>
				<ST.Table>
					<ST.Thead>
						<ST.Tr>
							<ST.Th>Название</ST.Th>
							<ST.Th>Цвет </ST.Th>
							<ST.Th>Саб категории </ST.Th>
							<ST.Th />
						</ST.Tr>
					</ST.Thead>
					<ST.Tbody>
						{data.map((category) => (
							<ST.Tr key={`category-${category.id}`}>
								<ST.Td>{category.title}</ST.Td>
								<ST.Td>{category.tagsColor}</ST.Td>
								<ST.ThOpen onClick={() => setIdCategory(category.id)}>
									Открыть
								</ST.ThOpen>
								<ST.ThOpenEdit onClick={() => setIdCategory(category.id)}>
									<CategoryUpdate
										refetch={refetch}
										idCategory={category.id}
									/>
								</ST.ThOpenEdit>
							</ST.Tr>
						))}
					</ST.Tbody>
				</ST.Table>

				<ST.Table>
					<ST.Thead>
						<ST.Tr>
							<ST.Th>Название</ST.Th>
							<ST.Th>Цвет </ST.Th>
							<ST.Th />
						</ST.Tr>
					</ST.Thead>
					<ST.Tbody>
						{data.filter((category) => category.id === categoryId)[0] &&
							data
								.filter((category) => category.id === categoryId)[0]
								.subCategories?.map((subCategory) => (
									<ST.Tr key={`category-${subCategory.id}`}>
										<ST.Td>{subCategory.title}</ST.Td>
										<ST.Td>{subCategory.tagsColor}</ST.Td>
										<ST.ThOpenEdit>
											<SubCategoryUpdate
												refetch={refetch}
												idSubCategory={subCategory.id}
											/>
										</ST.ThOpenEdit>
									</ST.Tr>
								))}
					</ST.Tbody>
				</ST.Table>
			</ST.WrapperTables>

			<ST.WrapperCreate>
				<CategoryCreate refetch={refetch} />
				<SubCategoryCreate
					refetch={refetch}
					categoryId={categoryId}
				/>
			</ST.WrapperCreate>
		</ST.CategoriesTable>
	);
};

export default CategoriesTable;
