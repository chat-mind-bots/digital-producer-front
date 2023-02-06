import React, { useState } from "react";
import { ReactComponent as ModalWindowAddFileIcon } from "Icons/ModalWindowAddFileIcon.svg";
import Input from "Components/UI-KIT/Input";
import * as ST from "./styled";

const EditLesson = () => {
	const [lesson, setLesson] = useState<string>("");
	const [level, setLevel] = useState<string>("");
	const [levelMax, setLevelMax] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	return (
		<ST.Content>
			<ST.Wrapper>
				<ST.Name>Название урока</ST.Name>
				<ST.WrapperInput>
					<Input
						placeholder={"Введите название урока"}
						value={lesson}
						setValue={setLesson}
						padding={"10px 14px"}
						fontSize={"16px"}
						fontWeight={"400"}
						borderSize={"1px"}
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
				<ST.Name>Уровень сложности урока</ST.Name>
				<ST.WrapperInputs>
					<Input
						placeholder={"Уровень"}
						value={level}
						setValue={setLevel}
						padding={"10px 14px"}
						fontSize={"16px"}
						fontWeight={"400"}
						borderSize={"1px"}
					/>
					из
					<Input
						placeholder={"Максимум"}
						value={levelMax}
						setValue={setLevelMax}
						padding={"10px 14px"}
						fontSize={"16px"}
						fontWeight={"400"}
						borderSize={"1px"}
					/>
				</ST.WrapperInputs>
			</ST.Wrapper>
			<ST.Wrapper>
				<ST.Name>Описание урока</ST.Name>
				<ST.WrapperInput>
					<Input
						placeholder={"Введите описание урока"}
						value={description}
						setValue={setDescription}
						padding={"10px 14px"}
						fontSize={"16px"}
						fontWeight={"400"}
						borderSize={"1px"}
					/>
				</ST.WrapperInput>
			</ST.Wrapper>
		</ST.Content>
	);
};

export default EditLesson;
