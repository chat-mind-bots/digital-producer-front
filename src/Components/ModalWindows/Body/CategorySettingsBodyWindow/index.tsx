import React, { FC, useState } from "react";
import { Formik } from "formik";
import { SketchPicker } from "react-color";

import Input from "Components/UI-KIT/Atoms/Input";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Constants/Colors";

import { ValidationSchema } from "./validationSchema";
import * as ST from "./styled";
import { ICategoryState } from "../../../../Shared/Category/redux/category.slice";
import ErrText from "../../../UI-KIT/Atoms/Input/ErrText";

type LessonSettingsBodyWindowProps = {
	initialValues: ICategoryState;
	handleClose?: () => void;
	sendData?: (e: ICategoryState) => Promise<undefined | any>;
	remove?: any;
};

const CategorySettingsBodyWindow: FC<LessonSettingsBodyWindowProps> = ({
	initialValues,
	handleClose,
	sendData,
	remove,
}) => {
	const [backgroundWindow, setBackgroundWindow] = useState<boolean>(false);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true);
				setTimeout(() => {
					if (sendData) {
						const newObject: ICategoryState = {
							...values,
						};
						sendData(newObject).then(() => {
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
				setSubmitting,
			}) => {
				return (
					<ST.Form>
						<ST.Content>
							<ST.Wrapper>
								<ST.Name>Название</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.title || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("title", str);
										}}
										setFocus={(state) => setFieldTouched("title", state)}
										placeholder={"Введите названние"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.title && touched.title ? errors.title : undefined
										}
										isError={!!errors.title && touched.title}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>

							<ST.Wrapper>
								<ST.Name>Цвет</ST.Name>
								<ST.WrapperColor>
									<ST.BlockColor
										style={{
											backgroundColor: values?.tagsColor,
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
														setFieldValue("tagsColor", color.hex);
												}}
												color={values?.tagsColor}
											/>
										</ST.WrapperSketchPicker>
									)}
									{!!errors.tagsColor && touched.tagsColor && (
										<ErrText
											value={
												errors.tagsColor && touched.tagsColor
													? errors.tagsColor
													: undefined
											}
										/>
									)}
								</ST.WrapperColor>
							</ST.Wrapper>
						</ST.Content>
						<ST.Footer>
							{handleClose ? (
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
							) : (
								<Button
									title={"Удалить"}
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
									onClick={() => {
										setSubmitting(true);
										remove && remove(values.id ?? "");
									}}
									disabled={isSubmitting}
								/>
							)}

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

export default CategorySettingsBodyWindow;
