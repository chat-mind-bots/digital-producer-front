import React, { FC, useEffect } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import * as ST from "./styled";
import {
	UserApiPropsSet,
	useUpgradeRoleMutation,
} from "../../../Shared/User/redux/user.api";
import Image from "../Atoms/Image";
import openFileBlank from "../../../Utils/openFileBlank";
import { UserRoleEnum } from "../../../Shared/Auth/types/role.enum";
import Colors from "../../../Constants/Colors";
import { useAppSelector } from "../../../Hooks/redux";
import CourseResultType from "../Course/course-props.type";
import RequestStatuses from "../../../Constants/RequestStatuses";
import { routeBuilder } from "../../../Router/services/route-builder";
import RoutesList from "../../../Router/routesList";

const UsersTable: FC<UserApiPropsSet & Pick<CourseResultType, "refetch">> = ({
	data,
	refetch,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const queryAuth = {
		authToken: auth.token ?? "",
	};
	const [upgrade, resultUpgrade] = useUpgradeRoleMutation();

	useEffect(() => {
		if (resultUpgrade.status === QueryStatus.fulfilled) {
			if (resultUpgrade.data?.statusCode == RequestStatuses.SUCCESS_201) {
				refetch && refetch();
				toast.success("Успешно");
			} else {
				toast.error("Ошибка");
			}
		}
	}, [resultUpgrade]);

	return (
		<ST.CategoriesTable>
			<ST.WrapperTables>
				<ST.Table>
					<ST.Thead>
						<ST.Tr>
							<ST.Td>Фото</ST.Td>
							<ST.Td>Имя</ST.Td>
							<ST.Td>Роль</ST.Td>
							<ST.Td>Тип</ST.Td>
							<ST.Td>Чат</ST.Td>
							<ST.Td>Повышение</ST.Td>
							<ST.Td>Понижение</ST.Td>
							<ST.Td>Курсы</ST.Td>
						</ST.Tr>
					</ST.Thead>
					<ST.Tbody>
						{data.map((user) => {
							const roleUp = auth.role[user.role.length];
							const roleDow =
								auth.role[user.role.length - 1] === UserRoleEnum.USER
									? undefined
									: auth.role[user.role.length - 1] === UserRoleEnum.ADMIN
									? undefined
									: auth.role[user.role.length - 1];

							return (
								<ST.Tr key={`category-${user.id}`}>
									<ST.Td>
										<ST.WrapperAvatar>
											{user.photos?.small && <Image src={user.photos?.small} />}
											<ST.DefaultImage>
												{user.firstName?.length && user.firstName[0]}
											</ST.DefaultImage>
										</ST.WrapperAvatar>
									</ST.Td>
									<ST.Td>{user.username}</ST.Td>
									<ST.Td>
										{user.role.map((role, index) => (
											<ST.Role
												key={`role-${role}-${index}`}
												background={
													role === UserRoleEnum.USER
														? Colors.SKYBLUE
														: role === UserRoleEnum.PRODUCER
														? Colors.GREEN
														: role === UserRoleEnum.ADMIN
														? Colors.BLUE_DARK
														: Colors.GREEN
												}
												color={
													role === UserRoleEnum.ADMIN
														? Colors.WHITE
														: Colors.BLACK1
												}
											>
												{role}
											</ST.Role>
										))}
									</ST.Td>
									<ST.Td>{user.type}</ST.Td>
									<ST.ThOpen
										onClick={() =>
											openFileBlank(`https://t.me/${user.username}`)
										}
									>
										Открыть
									</ST.ThOpen>

									<ST.ThOpen
										onClick={() =>
											roleUp &&
											upgrade({
												...queryAuth,
												role: roleUp,
												type: "UP",
												id: user.id,
											})
										}
									>
										{roleUp ? "Повысить" : "-"}
									</ST.ThOpen>
									<ST.ThOpen
										onClick={() =>
											roleDow &&
											upgrade({
												...queryAuth,
												role: roleDow,
												type: "DOWN",
												id: user.id,
											})
										}
									>
										{roleDow ? "Понизить" : "-"}
									</ST.ThOpen>
									<ST.ThOpenCourses>
										<Link
											to={`${routeBuilder([
												RoutesList.ADMIN,
												RoutesList.COURSES_REVIEW,
											])}?ownerId=${user.id}`}
										>
											Открыть
										</Link>
									</ST.ThOpenCourses>
								</ST.Tr>
							);
						})}
					</ST.Tbody>
				</ST.Table>
			</ST.WrapperTables>
		</ST.CategoriesTable>
	);
};

export default UsersTable;
