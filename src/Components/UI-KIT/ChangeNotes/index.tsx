import React, { FC } from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";

import Input from "Components/UI-KIT/Atoms/Input";

import * as ST from "./styled";

type ChangeNotesProps = {
	index: number;
	name: string;
	value: string;
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

const ChangeNotes: FC<ChangeNotesProps> = ({
	index,
	name,
	value,
	setFieldValue,
	setFieldTouched,
	errors,
	touched,
	removeItem,
}) => {
	const errorTextInput = Array.isArray(errors?.notes)
		? errors?.notes[index]
		: undefined;

	const touchedTextInput = Array.isArray(touched?.notes)
		? !!touched?.notes[index]
		: false;

	return (
		<>
			<ST.WrapperNotes>
				<ST.InputWrapper
					isError={
						!!(
							errorTextInput &&
							touchedTextInput &&
							JSON.stringify(errorTextInput)?.includes("name")
						)
					}
				>
					<Input
						value={name || ""}
						setValue={(str) => {
							setFieldValue && setFieldValue(`notes.${index}.name`, str);
						}}
						setFocus={(state) => setFieldTouched(`notes.${index}.name`, state)}
						placeholder={"Ключ"}
						padding={"10px 14px"}
						fontSize={"16px"}
						fontWeight={"400"}
						borderSize={"1px"}
					/>
				</ST.InputWrapper>

				<ST.InputWrapper
					isError={
						!!(
							errorTextInput &&
							touchedTextInput &&
							JSON.stringify(errorTextInput)?.includes("value")
						)
					}
				>
					<Input
						value={value || ""}
						setValue={(str) => {
							setFieldValue && setFieldValue(`notes.${index}.value`, str);
						}}
						setFocus={(state) => setFieldTouched(`notes.${index}.value`, state)}
						placeholder={"Значенине"}
						padding={"10px 14px"}
						fontSize={"16px"}
						fontWeight={"400"}
						borderSize={"1px"}
					/>
				</ST.InputWrapper>

				<ST.Remove onClick={() => removeItem(index)}>x</ST.Remove>
			</ST.WrapperNotes>
		</>
	);
};

export default ChangeNotes;
