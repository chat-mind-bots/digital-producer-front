import React, { FC } from "react";
import { Formik } from "formik";

import Input from "Components/UI-KIT/Atoms/Input";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Constants/Colors";

import { ValidationSchema } from "./validationSchema";
import * as ST from "./styled";
import { ILessonState } from "../../../../Shared/Lesson/redux/lesson.slice";
import { BannerApiPropsSet } from "../../../../Shared/Banner/redux/banner.api";
import Image from "../../../UI-KIT/Atoms/Image";
import { ReactComponent as ModalWindowAddFileIcon } from "../../../../Icons/ModalWindowAddFileIcon.svg";
import DropZone from "../../../UI-KIT/Atoms/DropZone";

type LessonSettingsBodyWindowProps = {
	initialValues: ILessonState;
	handleClose?: () => void;
	sendData?: (e: ILessonState) => Promise<undefined | any>;
	remove?: (e: string) => Promise<BannerApiPropsSet | undefined | any>;
};

const LessonSettingsBodyWindow: FC<LessonSettingsBodyWindowProps> = ({
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
						const newObject: ILessonState = {
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
					<ST.Form
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
						}}
					>
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

							<ST.Wrapper isBorder={true}>
								<ST.Name>Добавить фото</ST.Name>
								<ST.WrapperAddFile>
									{values?.image ? (
										<ST.ImageCourse>
											<Image src={values?.image} />
										</ST.ImageCourse>
									) : (
										<ModalWindowAddFileIcon />
									)}

									<DropZone
										format={["png", "jpg"]}
										setUrl={(url) =>
											setFieldValue && setFieldValue("image", url)
										}
										errorText={
											errors.image && touched.image ? errors.image : undefined
										}
										isError={!!errors.image && touched.image}
									/>
								</ST.WrapperAddFile>
							</ST.Wrapper>
							<ST.Wrapper>
								<ST.Name>levelDifficulty</ST.Name>
								<ST.WrapperInput>
									<ST.WrapperInput>
										<Input
											value={String(values?.levelDifficulty || "")}
											setValue={(str) => {
												setFieldValue &&
													setFieldValue("levelDifficulty", Number(str) || 0);
											}}
											setFocus={(state) =>
												setFieldTouched("levelDifficulty", state)
											}
											placeholder={"Введите заголовок "}
											padding={"10px 14px"}
											fontSize={"16px"}
											fontWeight={"400"}
											borderSize={"1px"}
											errorText={
												errors.levelDifficulty && touched.levelDifficulty
													? errors.levelDifficulty
													: undefined
											}
											isError={
												!!errors.levelDifficulty && touched.levelDifficulty
											}
										/>
									</ST.WrapperInput>
								</ST.WrapperInput>
							</ST.Wrapper>
							<ST.Wrapper isBorder={true}>
								<ST.Name>Добавить видео</ST.Name>
								<ST.WrapperAddFile>
									<ST.Status status={!!values?.video} />

									<DropZone
										format={["mp4"]}
										setUrl={(url) =>
											setFieldValue && setFieldValue("video", url)
										}
										errorText={
											errors.video && touched.video ? errors.video : undefined
										}
										isError={!!errors.video && touched.video}
									/>
								</ST.WrapperAddFile>
							</ST.Wrapper>
							<ST.Wrapper>
								<ST.Name>Позиция</ST.Name>
								<ST.WrapperInput>
									<Input
										value={String(values?.logicNumber || 0)}
										setValue={(str) => {
											setFieldValue &&
												setFieldValue("logicNumber", Number(str) || 0);
										}}
										setFocus={(state) => setFieldTouched("logicNumber", state)}
										placeholder={"Введите заголовок "}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.logicNumber && touched.logicNumber
												? errors.logicNumber
												: undefined
										}
										isError={!!errors.logicNumber && touched.logicNumber}
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

export default LessonSettingsBodyWindow;
