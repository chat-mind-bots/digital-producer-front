import React, { FC, useState } from "react";
import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";
import { AccordionProps } from "./type";
import * as ST from "./styled";

const Accordion: FC<AccordionProps> = ({ array, handleClick }) => {
	const [open, setOpen] = useState<number>();

	return (
		<ST.Accordion>
			<ST.Title>Модули курса:</ST.Title>
			<ST.Wrapper>
				{array.map((module, indexModule) => (
					<ST.WrapperModule key={`Accordion-module-${module.id}`}>
						<ST.Name isActive={open === module.id}>
							модуль {indexModule + 1}: {module.name}
							<ArrowDown
								onClick={() =>
									setOpen(open === module.id ? undefined : module.id)
								}
							/>
						</ST.Name>
						<ST.WrapperItems isActive={open === module.id}>
							{module.items.map((item, indexItem) => (
								<ST.Item
									onClick={() =>
										handleClick({ moduleId: module.id, itemId: item.id })
									}
									isActive={item.isActive}
									key={`Accordion-item-${item.id}`}
								>
									<ST.Number>{indexItem + 1}.</ST.Number>
									{item.name}
								</ST.Item>
							))}
						</ST.WrapperItems>
					</ST.WrapperModule>
				))}
			</ST.Wrapper>
		</ST.Accordion>
	);
};

export default Accordion;
