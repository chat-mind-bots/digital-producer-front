import { FC, useState } from 'react';
import { ReactComponent as ArrowDown } from 'Icons/ArrowDown.svg';
import Button from 'Components/UI-KIT/Atoms/Button';
import { AccordionProps } from './type';
import Colors from 'Colors';
import * as ST from './styled';

const Accordion: FC<AccordionProps> = ({
  array,
  handleClick,
  onClickAddLesson,
  onClickAddModule,
}) => {
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
              <ST.WrapperButtonAddLesson>
                <Button
                  title={'Добавить урок'}
                  padding={'10px 16px'}
                  fontSize={'16px'}
                  lineHeight={'20px'}
                  fontWeight={'600'}
                  background={Colors.TRANSPARENT}
                  color={Colors.GREY4}
                  backgroundAnimation={Colors.GREY4}
                  colorHover={Colors.WHITE}
                  border={`2px solid ${Colors.GREY4}`}
                  width={'100%'}
                  onClick={onClickAddLesson}
                />
              </ST.WrapperButtonAddLesson>
            </ST.WrapperItems>
          </ST.WrapperModule>
        ))}
        <ST.WrapperButtonAddLesson>
          <Button
            title={'Добавить модуль'}
            padding={'10px 16px'}
            fontSize={'16px'}
            lineHeight={'20px'}
            fontWeight={'600'}
            background={Colors.TRANSPARENT}
            color={Colors.GREY4}
            backgroundAnimation={Colors.GREY4}
            colorHover={Colors.WHITE}
            border={`2px solid ${Colors.GREY4}`}
            width={'100%'}
            onClick={onClickAddModule}
          />
        </ST.WrapperButtonAddLesson>
      </ST.Wrapper>
    </ST.Accordion>
  );
};

export default Accordion;
