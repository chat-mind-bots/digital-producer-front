import React, { useState } from "react";

import Input from "Components/UI-KIT/Input";

import * as ST from "./styled";

const AddModule = () => {
	const [pass, setPass] = useState<string>("");

	return (
		<ST.Content>
			<ST.Wrapper>
				<ST.Name>Название</ST.Name>
				<ST.WrapperInput>
					<Input
						placeholder={"Введите название модуля"}
						value={pass}
						setValue={setPass}
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

export default AddModule;
