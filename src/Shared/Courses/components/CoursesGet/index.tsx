import React, { FC, Children, cloneElement, useCallback } from "react";

import { useAppSelector } from "Hooks/redux";
import BannerResultType from "Components/UI-KIT/Banner/banner-props.type";
import WrapperRequest from "Components/WrapperRequest";
import WrapperContent from "Components/WrapperContent";
import RoutesList from "Router/routesList";
import { BreadCrumbsArrayType } from "Components/UI-KIT/BreadCrumbs";
import CoursesResultType from "Components/UI-KIT/Courses/courses-props.type";

import {
	GetCoursesApiProps,
	useGetCoursesQuery,
	useGetSearchCoursesMutation,
} from "../../redux/course.api";
import * as ST from "./styled";

type CourseGetProps = Record<"children", React.ReactElement<BannerResultType>> &
	Pick<
		GetCoursesApiProps,
		"subCategoryId" | "enrolledUserId" | "ownerId" | "status"
	> &
	Pick<GetCoursesApiProps, "sortBy"> & {
		header: string;
	};

const CoursesGet: FC<CourseGetProps> = ({
	children,
	header,
	subCategoryId,
	ownerId,
	enrolledUserId,
	status,
	sortBy,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const query: GetCoursesApiProps = {
		authToken: auth.token ?? "",
		subCategoryId: subCategoryId,
		ownerId: ownerId,
		enrolledUserId: enrolledUserId,
		status: status,
		sortBy: sortBy,
	};
	const { data, isError, isLoading, refetch } = useGetCoursesQuery(query);

	const [searchRequest, resultSearchRequest] = useGetSearchCoursesMutation();

	const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
		{ id: 1, name: "Главная", url: RoutesList.USER },
		{ id: 2, name: header, url: RoutesList.COURSES },
	];

	const search = useCallback(
		(q: string) => {
			searchRequest({ ...query, q });
		},
		[searchRequest]
	);

	return (
		<ST.WrapperCourses>
			<WrapperContent
				header={defaultBreadCrumbs}
				search={search}
			>
				<ST.Wrapper>
					<WrapperRequest
						isError={isError}
						isLoading={isLoading}
					>
						<>
							{Children.toArray(children).map((child) =>
								cloneElement(child as React.ReactElement<CoursesResultType>, {
									result: resultSearchRequest.data?.data || data?.data,
									refetch: refetch,
								})
							)}
						</>
					</WrapperRequest>
				</ST.Wrapper>
			</WrapperContent>
		</ST.WrapperCourses>
	);
};

export default CoursesGet;
