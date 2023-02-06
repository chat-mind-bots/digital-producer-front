import React, { useState } from "react";
import { ReactComponent as ModalWindowAddFileIcon } from "Icons/ModalWindowAddFileIcon.svg";
import Input from "Components/UI-KIT/Input";
import * as ST from "./styled";

const AddLector = () => {
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	return (
		<ST.Content>
			<ST.Wrapper>
				<ST.Name>ФИО</ST.Name>
				<ST.WrapperInput>
					<Input
						placeholder={"Введите ФИО лектора"}
						value={name}
						setValue={setName}
						padding={"10px 14px"}
						fontSize={"16px"}
						fontWeight={"400"}
						borderSize={"1px"}
					/>
				</ST.WrapperInput>
			</ST.Wrapper>
			<ST.Wrapper isBorder={true}>
				<ST.Name>Добавить фотографию</ST.Name>
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
				<ST.Name>Описание</ST.Name>
				<ST.WrapperInput>
					<Input
						placeholder={"Введите описание"}
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

export default AddLector;
