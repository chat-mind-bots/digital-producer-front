import { useState } from 'react';
import { ReactComponent as ModalWindowAddFileIcon } from 'Icons/ModalWindowAddFileIcon.svg';
import Button from 'Components/UI-KIT/Atoms/Button';
import Input from 'Components/UI-KIT/Input';
import Colors from 'Colors';
import * as ST from './styled';

const CreateCourse = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [levelMax, setLevelMax] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [link, setLink] = useState<string>('');

  return (
    <ST.Content>
      <ST.Wrapper>
        <ST.Name>Название</ST.Name>
        <ST.WrapperInput>
          <Input
            placeholder={'Введите название курса'}
            value={name}
            setValue={setName}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperInput>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Описание</ST.Name>
        <ST.WrapperInput>
          <Input
            placeholder={'Введите описание курса'}
            value={description}
            setValue={setDescription}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperInput>
      </ST.Wrapper>
      <ST.Wrapper isBorder={true}>
        <ST.Name>Добавить фото</ST.Name>
        <ST.WrapperAddFile>
          <ModalWindowAddFileIcon />
          <ST.UploadFile>
            <ST.Instruction>Click to upload or drag and drop</ST.Instruction>
            <ST.Instruction>
              SVG, PNG, JPG or GIF (max. 800x400px)
            </ST.Instruction>
          </ST.UploadFile>
        </ST.WrapperAddFile>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Теги</ST.Name>
        <ST.WrapperInput>
          <Input
            placeholder={'Введите теги курса'}
            value={tags}
            setValue={setTags}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperInput>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Уровень сложности</ST.Name>
        <ST.WrapperInputs>
          <Input
            placeholder={'Уровень'}
            value={level}
            setValue={setLevel}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
          /
          <Input
            placeholder={'Максимум'}
            value={levelMax}
            setValue={setLevelMax}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperInputs>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Доп. заметки</ST.Name>
        <ST.WrapperNotes>
          <Input
            placeholder={'Ключ'}
            value={level}
            setValue={setLevel}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
          <Input
            placeholder={'Значение'}
            value={levelMax}
            setValue={setLevelMax}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperNotes>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Статус курса</ST.Name>
        <ST.WrapperButtons>
          <Button
            title={'Бесплатный'}
            padding={'10px 25px'}
            fontSize={'16px'}
            lineHeight={'20px'}
            fontWeight={'400'}
            background={Colors.WHITE4}
            color={Colors.GREY1}
            backgroundAnimation={Colors.SKYBLUE}
            colorHover={Colors.BLACK1}
            border={`1px solid ${Colors.RGBA_GREY}`}
            width={'max-content'}
          />
          <Button
            title={'Платный'}
            padding={'10px 25px'}
            fontSize={'16px'}
            lineHeight={'20px'}
            fontWeight={'400'}
            background={Colors.WHITE4}
            color={Colors.GREY1}
            backgroundAnimation={Colors.BLUE_DARK}
            colorHover={Colors.WHITE}
            border={`1px solid ${Colors.RGBA_GREY}`}
            width={'max-content'}
          />
        </ST.WrapperButtons>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Ссылка на оплату курса</ST.Name>
        <ST.WrapperInput>
          <Input
            placeholder={'Введите ссылку на оплату'}
            value={link}
            setValue={setLink}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperInput>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Скидка</ST.Name>
        <ST.WrapperInput>
          <Input
            placeholder={'Введите скидку'}
            value={description}
            setValue={setDescription}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperInput>
      </ST.Wrapper>
      <ST.Wrapper>
        <ST.Name>Стоимость курса</ST.Name>
        <ST.WrapperInput>
          <Input
            placeholder={'Введите стоимость курса'}
            value={price}
            setValue={setPrice}
            padding={'10px 14px'}
            fontSize={'16px'}
            fontWeight={'400'}
            borderSize={'1px'}
          />
        </ST.WrapperInput>
      </ST.Wrapper>
    </ST.Content>
  );
};

export default CreateCourse;
