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

const Accordion: FC<
	AccordionProps &
		Pick<CourseResultType, "refetch"> &
		Pick<AddModuleToCourseApiProps, "idCourse"> & {
			isOnClick: boolean;
			refetchLesson: () => void;
		}
> = ({ array, handleClick, refetch, idCourse, isOnClick, refetchLesson }) => {
	const [open, setOpen] = useState<string>();
	const [openMobile, setOpenMobile] = useState<boolean>(false);

	return (
		<ST.Accordion
			open={openMobile}
			onClick={() => !openMobile && setOpenMobile(true)}
		>
			<ST.Title>
				Модули курса: <Close onClick={() => setOpenMobile(false)} />
			</ST.Title>
			<ST.Wrapper>
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
											<LessonUpdate
												idLesson={item.id}
												refetch={() => {
													refetchLesson();
													refetch && refetch();
												}}
											/>
										</ST.UpdateButton>
										<ReactTooltip
											anchorId={`UpdateButtonLesson-${item.id}`}
											place="left"
											content="Редактировать урок."
										/>
									</ST.WrapperItem>
								))}
								<ST.WrapperButtonAddLesson>
									<LessonCreate
										idModule={module.id}
										refetch={refetch}
									/>
								</ST.WrapperButtonAddLesson>
							</ST.WrapperItems>
						</ST.WrapperModule>

						<ST.UpdateButtonModule id={`UpdateButtonModule-${module.id}`}>
							<ModuleUpdate
								idModule={module.id}
								refetch={refetch}
							/>
						</ST.UpdateButtonModule>
						<ReactTooltip
							anchorId={`UpdateButtonModule-${module.id}`}
							place="left"
							content="Редактировать модуль."
						/>
					</ST.WrapperItem>
				))}
				<ST.WrapperButtonAddLesson>
					<ModuleCreate
						idCourse={idCourse}
						refetch={refetch}
					/>
				</ST.WrapperButtonAddLesson>
			</ST.Wrapper>
		</ST.Accordion>
	);
};

export default Accordion;
