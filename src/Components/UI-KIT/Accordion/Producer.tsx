import React, { FC, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AccordionProps } from "./type";
import * as ST from "./styled";
import CourseResultType from "../Course/course-props.type";
import { LessonCreate } from "../../../Shared/Lesson/components/LessonSet/create";
import { LessonUpdate } from "../../../Shared/Lesson/components/LessonSet/update";
import { ModuleCreate } from "../../../Shared/Module/components/ModuleSet/create";
import { AddModuleToCourseApiProps } from "../../../Shared/Module/redux/module.api";
import { ModuleUpdate } from "../../../Shared/Module/components/ModuleSet/update";
import sortPosition from "../../../Utils/sortPosition";
import { ReactComponent as Close } from "../../../Icons/Close.svg";
import Disable from "../Atoms/Disable";
import Loader from "../Loader";

const Accordion: FC<
	AccordionProps &
		Pick<CourseResultType, "refetch"> &
		Pick<AddModuleToCourseApiProps, "idCourse"> & {
			isOnClick: boolean;
			refetchLesson: () => void;
			isDisabled: boolean;
		}
> = ({
	array,
	handleClick,
	refetch,
	idCourse,
	isOnClick,
	refetchLesson,
	isDisabled,
}) => {
	const [open, setOpen] = useState<string>();
	const [openMobile, setOpenMobile] = useState<boolean>(false);
	const [loader, setLoader] = useState<boolean>(false);

	return (
		<ST.Accordion
			open={openMobile}
			onClick={() => !openMobile && setOpenMobile(true)}
			isLoading={loader}
		>
			{loader && (
				<ST.LoaderWrapper>
					<Loader />
				</ST.LoaderWrapper>
			)}
			<ST.Wrapper isLoading={loader}>
				<ST.Title>
					Модули курса: <Close onClick={() => setOpenMobile(false)} />
				</ST.Title>
				{sortPosition(array).map((module, indexModule) => (
					<ST.WrapperItem key={`Accordion-module-${module.id}`}>
						<ST.WrapperModule
							onClick={() =>
								isOnClick && setOpen(open === module.id ? undefined : module.id)
							}
						>
							<ST.Name isActive={open === module.id}>
								<ST.NameCurrent>
									{`модуль ${indexModule + 1}: ${module.name}`}
								</ST.NameCurrent>
							</ST.Name>
							<ST.WrapperItems isActive={open === module.id}>
								{sortPosition(module.items).map((item, indexItem) => (
									<ST.WrapperItem key={`Accordion-item-${item.id}`}>
										<ST.Item
											onClick={() => {
												isOnClick &&
													handleClick({
														moduleId: module.id,
														itemId: item.id,
													});
												setOpenMobile(false);
											}}
											isActive={item.isActive}
										>
											<ST.Number>{indexItem + 1}.</ST.Number>
											<ST.NameCurrent>{item.name}</ST.NameCurrent>
										</ST.Item>

										<ST.UpdateButton id={`UpdateButtonLesson-${item.id}`}>
											<Disable
												id={`UpdateButtonLesson-display-${item.id}`}
												disabled={isDisabled}
												textErr={
													"Курс находится на проверке, редактирование урока невозможно."
												}
											>
												<LessonUpdate
													idLesson={item.id}
													refetch={() => {
														refetchLesson();
														refetch && refetch();
													}}
													setLoader={setLoader}
												/>
											</Disable>
										</ST.UpdateButton>
										<ReactTooltip
											anchorId={`UpdateButtonLesson-${item.id}`}
											place="left"
											content="Редактировать урок."
										/>
									</ST.WrapperItem>
								))}
								<ST.WrapperButtonAddLesson>
									<Disable
										id={"LessonCrete"}
										disabled={isDisabled}
										textErr={
											"Курс находится на проверке, создание урока невозможно."
										}
									>
										<LessonCreate
											idModule={module.id}
											refetch={refetch}
											setLoader={setLoader}
										/>
									</Disable>
								</ST.WrapperButtonAddLesson>
							</ST.WrapperItems>
						</ST.WrapperModule>

						<ST.UpdateButtonModule id={`UpdateButtonModule-${module.id}`}>
							<Disable
								id={`UpdateButtonModule-display-${module.id}`}
								disabled={isDisabled}
								textErr={
									"Курс находится на проверке, редактирование модуля невозможно."
								}
							>
								<ModuleUpdate
									idModule={module.id}
									refetch={refetch}
									setLoader={setLoader}
								/>
							</Disable>
						</ST.UpdateButtonModule>
						<ReactTooltip
							anchorId={`UpdateButtonModule-${module.id}`}
							place="left"
							content="Редактировать модуль."
						/>
					</ST.WrapperItem>
				))}
				<ST.WrapperButtonAddLesson>
					<Disable
						id={"ModuleCreate"}
						disabled={isDisabled}
						textErr={"Курс находится на проверке, создание модуля невозможно."}
					>
						<ModuleCreate
							idCourse={idCourse}
							refetch={refetch}
							setLoader={setLoader}
						/>
					</Disable>
				</ST.WrapperButtonAddLesson>
			</ST.Wrapper>
		</ST.Accordion>
	);
};

export default Accordion;
