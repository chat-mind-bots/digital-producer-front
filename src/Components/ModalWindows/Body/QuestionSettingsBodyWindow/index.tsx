import React, { FC } from "react";
import { Formik } from "formik";

import Input from "Components/UI-KIT/Atoms/Input";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import { ValidationSchema } from "./validationSchema";
import * as ST from "./styled";
import { IQuestionState } from "../../../../Shared/Question/redux/question.slice";
import { QuestionDataType } from "../../../../Shared/Question/redux/question.api";
import ChangeAnswers from "../../../UI-KIT/ChangeAnswers";
import ErrText from "../../../UI-KIT/Atoms/Input/ErrText";
import Select from "../../../UI-KIT/Atoms/Select";

type QuestionSettingsBodyWindowProps = {
	initialValues: IQuestionState;
	handleClose?: () => void;
	sendData?: (e: IQuestionState) => Promise<undefined | any>;
	remove?: (e: string) => Promise<QuestionDataType | undefined | any>;
};

const QuestionSettingsBodyWindow: FC<QuestionSettingsBodyWindowProps> = ({
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
						const newObject: IQuestionState = {
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
										value={values?.name || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("name", str);
										}}
										setFocus={(state) => setFieldTouched("name", state)}
										placeholder={"Введите заголовок "}
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
							<ST.Wrapper>
								<ST.Name>Описание</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.description || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("description", str);
										}}
										setFocus={(state) => setFieldTouched("description", state)}
										placeholder={"Введите заголовок "}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.description && touched.description
												? errors.description
												: undefined
										}
										isError={!!errors.description && touched.description}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>
							<ST.Wrapper>
								<ST.Name>Вопрос</ST.Name>
								<ST.WrapperInput>
									<Input
										value={String(values?.question || "")}
										setValue={(str) => {
											setFieldValue && setFieldValue("question", str);
										}}
										setFocus={(state) => setFieldTouched("question", state)}
										placeholder={"Введите вопрос"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.question && touched.question
												? errors.question
												: undefined
										}
										isError={!!errors.question && touched.question}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>

							<ST.Wrapper>
								<ST.Name>Ответы</ST.Name>
								<ST.WrapperInput>
									{values && (
										<ST.TagsList>
											{values.answers?.map((answer, index) => {
												return (
													<ChangeAnswers
														key={`Answer-my${index}`}
														index={index}
														value={answer?.value}
														setFieldValue={setFieldValue}
														setFieldTouched={setFieldTouched}
														errors={errors}
														touched={touched}
														removeItem={(index) =>
															setFieldValue &&
															setFieldValue(
																"answers",
																values?.answers?.filter((_, i) => i !== index)
															)
														}
													/>
												);
											})}
										</ST.TagsList>
									)}
									<ST.WrapperAddTag>
										<Button
											title={"Добавить ответ"}
											padding={"10px 25px"}
											fontSize={"16px"}
											lineHeight={"20px"}
											fontWeight={"400"}
											background={Colors.BLUE}
											color={Colors.WHITE}
											backgroundAnimation={Colors.BLUE}
											colorHover={Colors.WHITE}
											border={`1px solid ${Colors.RGBA_GREY}`}
											width={"max-content"}
											onClick={() =>
												setFieldValue &&
												setFieldValue("answers", [
													...values.answers,
													{ value: "", key: `${values.answers.length + 1}` },
												])
											}
										/>
									</ST.WrapperAddTag>
								</ST.WrapperInput>
							</ST.Wrapper>

							<ST.Wrapper>
								<ST.Name>Несколько ответов</ST.Name>
								<ST.WrapperButtons>
									<Button
										title={"Нет"}
										padding={"10px 25px"}
										fontSize={"16px"}
										lineHeight={"20px"}
										fontWeight={"400"}
										background={values.isMultiply ? Colors.WHITE4 : Colors.BLUE}
										color={values.isMultiply ? Colors.GREY1 : Colors.WHITE}
										backgroundAnimation={Colors.BLUE}
										colorHover={Colors.WHITE}
										border={`1px solid ${Colors.RGBA_GREY}`}
										width={"max-content"}
										onClick={() => setFieldValue("isMultiply", false)}
									/>
									<Button
										title={"Да"}
										padding={"10px 25px"}
										fontSize={"16px"}
										lineHeight={"20px"}
										fontWeight={"400"}
										background={values.isMultiply ? Colors.BLUE : Colors.WHITE4}
										color={values.isMultiply ? Colors.WHITE : Colors.GREY1}
										backgroundAnimation={Colors.BLUE}
										colorHover={Colors.WHITE}
										border={`1px solid ${Colors.RGBA_GREY}`}
										width={"max-content"}
										onClick={() => setFieldValue("isMultiply", true)}
									/>
									{!!errors.isMultiply && touched.isMultiply && (
										<ErrText
											value={
												errors.isMultiply && touched.isMultiply
													? errors.isMultiply
													: undefined
											}
										/>
									)}
								</ST.WrapperButtons>
							</ST.Wrapper>

							{values.isMultiply ? (
								<ST.Wrapper>
									<ST.Name>Правильные ответы</ST.Name>
									<ST.WrapperInput>
										<Select
											value={values.rightAnswers?.map((e) => e).join("") || ""}
											setValue={(id) => {
												if (values.rightAnswers?.includes(id)) {
													setFieldValue &&
														setFieldValue(
															"rightAnswers",
															values.rightAnswers?.filter((e) => e !== id)
														);
												} else {
													values.rightAnswers
														? setFieldValue("rightAnswers", [
																...values.rightAnswers,
																id,
														  ])
														: setFieldValue("rightAnswers", [id]);
												}
											}}
											placeholder={"Выберите стиль кнопки"}
											padding={"10px 14px"}
											fontSize={"16px"}
											fontWeight={"400"}
											borderSize={"1px"}
											array={values.answers.map((e) => {
												return { id: e.key, value: e.value };
											})}
										/>
									</ST.WrapperInput>
								</ST.Wrapper>
							) : (
								<ST.Wrapper>
									<ST.Name>Правильный ответ</ST.Name>
									<ST.WrapperInput>
										<Select
											value={values.rightAnswer || ""}
											setValue={(id) => {
												setFieldValue && setFieldValue("rightAnswer", id);
											}}
											placeholder={"Выберите стиль кнопки"}
											padding={"10px 14px"}
											fontSize={"16px"}
											fontWeight={"400"}
											borderSize={"1px"}
											array={values.answers.map((e) => {
												return { id: e.key, value: e.value };
											})}
										/>
									</ST.WrapperInput>
								</ST.Wrapper>
							)}
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

export default QuestionSettingsBodyWindow;
