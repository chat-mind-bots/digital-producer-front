import React from "react";

import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import Banner from "Components/UI-KIT/Banner";

import * as ST from "./styled";

const Main = () => (
	<ST.Main>
		{/*<BannerTop*/}
		{/*	title={"Новости платформы"}*/}
		{/*	description={*/}
		{/*		"Самые последние и актуальные новости и обновления платформы"*/}
		{/*	}*/}
		{/*	textButton={"Читать статью"}*/}
		{/*	urlButton={""}*/}
		{/*	styleButton={""}*/}
		{/*/>*/}
		{/*<ST.WrapperMain>*/}
		{/*	<BannerSlider*/}
		{/*		title={"Новости и инсайты из сферы инфопродуктов"}*/}
		{/*		textButton={"Читать статью"}*/}
		{/*		urlButton={""}*/}
		{/*		styleButton={""}*/}
		{/*	/>*/}
		{/*	<WrapperContent header={"Рекомендованные курсы"}>*/}
		{/*		<ST.Wrapper>*/}
		{/*			{CoursesData.data.list.map((course) => (*/}
		{/*				<CourseCard*/}
		{/*					key={`Main-CourseCard-${course.id}`}*/}
		{/*					url={`${RoutesList.COURSE_ID}${course.id}`}*/}
		{/*					title={course.name}*/}
		{/*					description={course.description}*/}
		{/*					levelDifficulty={course.levelDifficulty}*/}
		{/*					tagsColors={CoursesData.data.tagsColors}*/}
		{/*					tags={course.tags}*/}
		{/*				/>*/}
		{/*			))}*/}
		{/*		</ST.Wrapper>*/}
		{/*	</WrapperContent>*/}
		{/*</ST.WrapperMain>*/}
		{/*<BannerRight*/}
		{/*	title={"Создайте свой курс"}*/}
		{/*	description={*/}
		{/*		"Станьте продюсером своего курса и проводите уроки на платформе"*/}
		{/*	}*/}
		{/*	textButton={"Создать курс"}*/}
		{/*	urlButton={""}*/}
		{/*	styleButton={""}*/}
		{/*/>*/}
		<div>
			<div>
				<Banner
					role={UserRoleEnum.USER}
					type={BannerEnum.BANNER_RIGHT}
				/>
			</div>
			<div>
				<Banner
					role={UserRoleEnum.USER}
					type={BannerEnum.BANNER_LEFT}
				/>
			</div>
			<div>
				<Banner
					role={UserRoleEnum.USER}
					type={BannerEnum.BANNER_TOP}
				/>
			</div>
			<div>
				<Banner
					role={UserRoleEnum.USER}
					type={BannerEnum.BANNER_SLIDER}
				/>
			</div>
		</div>
	</ST.Main>
);

export default Main;
