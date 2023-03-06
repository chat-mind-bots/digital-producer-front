import React, { FC } from "react";
import { Formik } from "formik";

import Input from "Components/UI-KIT/Atoms/Input";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import { ValidationSchema } from "./validationSchema";
import * as ST from "./styled";
import { ISubCategoryState } from "../../../../Shared/SubCategory/redux/subCategory.slice";

type LessonSettingsBodyWindowProps = {
	initialValues: ISubCategoryState;
	handleClose?: () => void;
	sendData?: (e: ISubCategoryState) => Promise<undefined | any>;
	remove?: any;
};

const SubCategorySettingsBodyWindow: FC<LessonSettingsBodyWindowProps> = ({
	initialValues,
	handleClose,
	sendData,
	remove,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true);
				setTimeout(() => {
					if (sendData) {
						const newObject: ISubCategoryState = {
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
								<ST.Name>цвет</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.tagsColor || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("tagsColor", str);
										}}
										setFocus={(state) => setFieldTouched("tagsColor", state)}
										placeholder={"Введите названние"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.tagsColor && touched.tagsColor
												? errors.tagsColor
												: undefined
										}
										isError={!!errors.tagsColor && touched.tagsColor}
									/>
								</ST.WrapperInput>
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

export default SubCategorySettingsBodyWindow;
