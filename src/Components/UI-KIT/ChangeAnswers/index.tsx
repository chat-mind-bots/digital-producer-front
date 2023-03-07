import React, { FC } from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";

import Input from "Components/UI-KIT/Atoms/Input";

import * as ST from "./styled";

type ChangeTagsProps = {
	index: number;
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

const ChangeAnswers: FC<ChangeTagsProps> = ({
	index,
	value,
	setFieldValue,
	setFieldTouched,
	errors,
	touched,
	removeItem,
}) => {
	const errorTextInput = Array.isArray(errors?.answers)
		? errors?.answers[index]
		: undefined;

	const touchedTextInput = Array.isArray(touched?.answers)
		? !!touched?.answers[index]
		: false;

	return (
		<>
			<ST.WrapperTags>
				{/*<Input*/}
				{/*	value={name || ""}*/}
				{/*	setValue={(str) => {*/}
				{/*		setFieldValue && setFieldValue(`answers.${index}.name`, str);*/}
				{/*	}}*/}
				{/*	setFocus={(state) => setFieldTouched(`answers.${index}.name`, state)}*/}
				{/*	placeholder={"название"}*/}
				{/*	padding={"10px 14px"}*/}
				{/*	fontSize={"16px"}*/}
				{/*	fontWeight={"400"}*/}
				{/*	borderSize={"1px"}*/}
				{/*/>*/}

				<Input
					value={value || ""}
					setValue={(str) => {
						setFieldValue && setFieldValue(`answers.${index}.value`, str);
					}}
					setFocus={(state) => setFieldTouched(`answers.${index}.value`, state)}
					placeholder={"Ответ"}
					padding={"10px 14px"}
					fontSize={"16px"}
					fontWeight={"400"}
					borderSize={"1px"}
				/>

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

export default ChangeAnswers;
