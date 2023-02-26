import React, { FC } from "react";
import { Formik } from "formik";

import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import { ValidationSchema } from "./validationSchema";
import * as ST from "./styled";
import Input from "../../../UI-KIT/Atoms/Input";

type CourseSettingsBodyWindowProps = {
	initialValues: { name: string };
	handleClose?: () => void;
	sendData?: (e: string) => Promise<undefined | any>;
};

const EnrollAnotherUserSettingsBodyWindow: FC<
	CourseSettingsBodyWindowProps
> = ({ initialValues, handleClose, sendData }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true);
				setTimeout(() => {
					if (sendData) {
						sendData(values.name).then(() => {
							setSubmitting(false);
						});
					}
				}, 0);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleSubmit,
				isSubmitting,
				setFieldValue,
				setFieldTouched,
			}) => {
				return (
					<ST.Form>
						<ST.Content>
							<ST.Wrapper>
								<ST.Name>имя в тг</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.name || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("name", str);
										}}
										setFocus={(state) => setFieldTouched("name", state)}
										placeholder={"Введите название "}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.name && touched.name ? errors.name : undefined
										}
										isError={!!errors.name && touched.name}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>
						</ST.Content>
						<ST.Footer>
							<Button
								title={"Закрыть"}
								padding={"10px 0px"}
								fontSize={"16px"}
								lineHeight={"24px"}
								fontWeight={"600"}
								background={Colors.TRANSPARENT}
								color={Colors.RED}
								backgroundAnimation={Colors.RED}
								colorHover={Colors.WHITE}
								border={`2px solid ${Colors.RED}`}
								width={"100%"}
								onClick={handleClose}
								disabled={isSubmitting}
							/>

							<Button
								title={"Сохранить"}
								padding={"10px 0px"}
								fontSize={"16px"}
								lineHeight={"24px"}
								fontWeight={"600"}
								background={Colors.BLUE}
								color={Colors.WHITE}
								backgroundAnimation={Colors.BLUE_DARK}
								colorHover={Colors.WHITE}
								width={"100%"}
								onClick={handleSubmit}
								disabled={isSubmitting}
							/>
						</ST.Footer>
					</ST.Form>
				);
			}}
		</Formik>
	);
};

export default EnrollAnotherUserSettingsBodyWindow;
