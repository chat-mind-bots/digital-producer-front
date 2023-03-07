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

				<ST.Remove onClick={() => removeItem(index)}>x</ST.Remove>
			</ST.WrapperNotes>
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

export default ChangeNotes;
