import { isArray } from "util";

import { SketchPicker } from "react-color";
import React, { FC, useState } from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";

import Input from "Components/UI-KIT/Atoms/Input";

import * as ST from "./styled";

type ChangeTagsProps = {
	index: number;
	name: string;
	background: string;
	color: string;
	setFieldValue: (
		field: string,
		value: string,
		shouldValidate?: boolean
	) => void;
	setFieldTouched: (
		field: string,
		value: boolean,
		shouldValidate?: boolean
	) => void;
	errors: FormikErrors<FormikValues>;
	touched: FormikTouched<FormikValues>;
	removeItem: (index: number) => void;
};

const ChangeTags: FC<ChangeTagsProps> = ({
	index,
	name,
	background,
	color,
	setFieldValue,
	setFieldTouched,
	errors,
	touched,
	removeItem,
}) => {
	const [backgroundWindow, setBackgroundWindow] = useState<boolean>(false);
	const [colorWindow, setColorWindow] = useState<boolean>(false);

	const errorTextInput = isArray(errors?.tags)
		? errors?.tags[index]
		: undefined;

	const touchedTextInput = isArray(touched?.tags)
		? !!touched?.tags[index]
		: false;

	return (
		<>
			<ST.WrapperTags>
				<Input
					value={name || ""}
					setValue={(str) => {
						setFieldValue && setFieldValue(`tags.${index}.name`, str);
					}}
					setFocus={(state) => setFieldTouched(`tags.${index}.name`, state)}
					placeholder={"название"}
					padding={"10px 14px"}
					fontSize={"16px"}
					fontWeight={"400"}
					borderSize={"1px"}
				/>

				<ST.WrapperColor>
					<ST.BlockColor
						style={{
							backgroundColor: background,
						}}
						onClick={() => setBackgroundWindow(!backgroundWindow)}
					>
						{backgroundWindow ? "Закрыть" : "Цвет фона"}
					</ST.BlockColor>

					{backgroundWindow && (
						<ST.WrapperSketchPicker>
							<SketchPicker
								onChange={(color) => {
									setFieldValue &&
										setFieldValue(`tags.${index}.background`, color.hex);
								}}
								color={background}
							/>
						</ST.WrapperSketchPicker>
					)}
				</ST.WrapperColor>

				<ST.WrapperColor>
					<ST.BlockColor
						style={{
							backgroundColor: color,
						}}
						onClick={() => setColorWindow(!colorWindow)}
					>
						{colorWindow ? "Закрыть" : "Цвет текста"}
					</ST.BlockColor>

					{colorWindow && (
						<ST.WrapperSketchPicker>
							<SketchPicker
								onChange={(color) => {
									setFieldValue &&
										setFieldValue(`tags.${index}.color`, color.hex);
								}}
								color={color}
							/>
						</ST.WrapperSketchPicker>
					)}
				</ST.WrapperColor>
				<ST.Remove onClick={() => removeItem(index)}>x</ST.Remove>
			</ST.WrapperTags>
			<ST.ErrText>
				{errorTextInput && touchedTextInput
					? JSON.stringify(errorTextInput)
							.replaceAll("{", "")
							.replaceAll("}", "")
							.split(",")
							.map((el, index) => (
								<span key={`ChangeTags-err-${index}`}>
									{el},
									<br />
								</span>
							))
					: undefined}
			</ST.ErrText>
		</>
	);
};

export default ChangeTags;
