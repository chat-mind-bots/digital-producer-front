import React, { FC, useState } from "react";

import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";

import { AccordionProps } from "./type";
import * as ST from "./styled";
import sortPosition from "../../../Utils/sortPosition";

const Accordion: FC<AccordionProps & { isOnClick: boolean }> = ({
	array,
	handleClick,
	isOnClick,
}) => {
	const [open, setOpen] = useState<string>();

	return (
		<ST.Accordion>
			<ST.Title>Модули курса:</ST.Title>
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
									модуль {indexModule + 1}: {module.name}
								</ST.NameCurrent>
								<ArrowDown />
							</ST.Name>
							<ST.WrapperItems isActive={open === module.id}>
								{sortPosition(module.items).map((item, indexItem) => (
									<ST.WrapperItem key={`Accordion-item-${item.id}`}>
										<ST.Item
											onClick={() =>
												isOnClick &&
												handleClick({
													moduleId: module.id,
													itemId: item.id,
												})
											}
											isActive={item.isActive}
										>
											<ST.Number>{indexItem + 1}.</ST.Number>
											<ST.NameCurrent>{item.name}</ST.NameCurrent>
										</ST.Item>
									</ST.WrapperItem>
								))}
							</ST.WrapperItems>
						</ST.WrapperModule>
					</ST.WrapperItem>
				))}
			</ST.Wrapper>
		</ST.Accordion>
	);
};

export default Accordion;
