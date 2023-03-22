import React, { FC } from "react";
import { Formik } from "formik";

import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Constants/Colors";
import { ReactComponent as ModalWindowAddFileIcon } from "Icons/ModalWindowAddFileIcon.svg";

import { ValidationSchema } from "./validationSchema";
import * as ST from "./styled";
import { ICourseState } from "../../../../Shared/Courses/redux/course.slice";
import { CourseApiPropsSet } from "../../../../Shared/Courses/redux/course.api";
import Input from "../../../UI-KIT/Atoms/Input";
import ChangeTags from "../../../UI-KIT/ChangeTags";
import ErrText from "../../../UI-KIT/Atoms/Input/ErrText";
import ChangeNotes from "../../../UI-KIT/ChangeNotes";
import { ICategoryState } from "../../../../Shared/Category/redux/category.slice";
import Select from "../../../UI-KIT/Atoms/Select";
import Image from "../../../UI-KIT/Atoms/Image";
import DropZone from "../../../UI-KIT/Atoms/DropZone";

type CourseSettingsBodyWindowProps = {
	initialValues: ICourseState;
	handleClose?: () => void;
	sendData?: (e: ICourseState) => Promise<undefined | any>;
	remove?: (e: string) => Promise<CourseApiPropsSet | undefined | any>;
	categories: ICategoryState[];
};

const CourseSettingsBodyWindow: FC<CourseSettingsBodyWindowProps> = ({
	initialValues,
	handleClose,
	sendData,
	// remove,
	categories,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true);
				setTimeout(() => {
					if (sendData) {
						const newObject: ICourseState = {
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
				// setSubmitting,
			}) => {
				const subCategories = categories.filter(
					(e) => e.id === values?.category
				)[0]
					? categories
							.filter((e) => e.id === values?.category)[0]
							.subCategories?.map((subCategory) => {
								return {
									id: subCategory.id,
									value: subCategory.title,
								};
							})
					: [];

				return (
					<ST.Form>
						<ST.Content>
							<ST.Wrapper>
								<ST.Name>Категория список</ST.Name>
								<ST.WrapperInput>
									<Select
										value={
											categories.filter((e) => e.id === values?.category)[0]
												? categories.filter((e) => e.id === values?.category)[0]
														.title || ""
												: ""
										}
										setValue={(str) => {
											setFieldValue("subCategory", "str");
											setFieldValue && setFieldValue("category", str);
										}}
										placeholder={"Выберите стиль кнопки"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.category && touched.category
												? errors.category
												: undefined
										}
										isError={!!errors.category && touched.category}
										array={categories.map((category) => {
											return { id: category.id, value: category.title };
										})}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>

							<ST.Wrapper>
								<ST.Name>Саб категория Список</ST.Name>
								<ST.WrapperInput>
									<Select
										value={
											subCategories?.filter(
												(subCategory) => subCategory.id === values.subCategory
											)[0]
												? subCategories?.filter(
														(subCategory) =>
															subCategory.id === values.subCategory
												  )[0].value
												: ""
										}
										setValue={(str) => {
											setFieldValue && setFieldValue("subCategory", str);
										}}
										placeholder={"Выберите стиль кнопки"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.subCategory && touched.subCategory
												? errors.subCategory
												: undefined
										}
										isError={!!errors.subCategory && touched.subCategory}
										array={subCategories || []}
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
								<ST.Name>Название</ST.Name>
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
							<ST.Wrapper>
								<ST.Name>Описание</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.description || ""}
										setValue={(str) => {
											setFieldValue("description", str);
										}}
										setFocus={(state) => setFieldTouched("description", state)}
										placeholder={"Введите описание "}
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
								<ST.Name>Теги</ST.Name>
								<ST.WrapperInput>
									{values && (
										<ST.TagsList>
											{values.tags.map((tag, index) => {
												return (
													<ChangeTags
														key={`Tags-my${index}`}
														index={index}
														name={tag?.name}
														background={tag?.background}
														color={tag?.color}
														setFieldValue={setFieldValue}
														setFieldTouched={setFieldTouched}
														errors={errors}
														touched={touched}
														removeItem={(index) =>
															setFieldValue &&
															setFieldValue(
																"tags",
																values?.tags.filter((_, i) => i !== index)
															)
														}
													/>
												);
											})}
										</ST.TagsList>
									)}
									<ST.WrapperAddTag>
										<Button
											title={"Добавить тег"}
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
												setFieldValue("tags", [
													...values.tags,
													{ name: "", background: "", color: "" },
												])
											}
										/>
									</ST.WrapperAddTag>
								</ST.WrapperInput>
							</ST.Wrapper>

							<ST.Wrapper>
								<ST.Name>Бесплатно</ST.Name>
								<ST.WrapperButtons>
									<Button
										title={"Нет"}
										padding={"10px 25px"}
										fontSize={"16px"}
										lineHeight={"20px"}
										fontWeight={"400"}
										background={values.isFree ? Colors.WHITE4 : Colors.BLUE}
										color={values.isFree ? Colors.GREY1 : Colors.WHITE}
										backgroundAnimation={Colors.BLUE}
										colorHover={Colors.WHITE}
										border={`1px solid ${Colors.RGBA_GREY}`}
										width={"max-content"}
										onClick={() => setFieldValue("isFree", false)}
									/>
									<Button
										title={"Да"}
										padding={"10px 25px"}
										fontSize={"16px"}
										lineHeight={"20px"}
										fontWeight={"400"}
										background={values.isFree ? Colors.BLUE : Colors.WHITE4}
										color={values.isFree ? Colors.WHITE : Colors.GREY1}
										backgroundAnimation={Colors.BLUE}
										colorHover={Colors.WHITE}
										border={`1px solid ${Colors.RGBA_GREY}`}
										width={"max-content"}
										onClick={() => setFieldValue("isFree", true)}
									/>
									{!!errors.isFree && touched.isFree && (
										<ErrText
											value={
												errors.isFree && touched.isFree
													? errors.isFree
													: undefined
											}
										/>
									)}
								</ST.WrapperButtons>
							</ST.Wrapper>

							{!values.isFree && (
								<ST.Wrapper>
									<ST.Name>Цена</ST.Name>
									<ST.WrapperButtons>
										<Input
											value={String(values?.price?.actual || "")}
											setValue={(str) => {
												setFieldValue &&
													setFieldValue("price.actual", Number(str) || 0);
											}}
											setFocus={(state) =>
												setFieldTouched("price.actual", state)
											}
											placeholder={"actual"}
											padding={"10px 14px"}
											fontSize={"16px"}
											fontWeight={"400"}
											borderSize={"1px"}
										/>
										<Input
											value={String(values?.price?.discount || "")}
											setValue={(str) => {
												setFieldValue &&
													setFieldValue("price.discount", Number(str) || 0);
											}}
											setFocus={(state) =>
												setFieldTouched("price.discount", state)
											}
											placeholder={"discount"}
											padding={"10px 14px"}
											fontSize={"16px"}
											fontWeight={"400"}
											borderSize={"1px"}
											optionalText={"% "}
										/>
									</ST.WrapperButtons>
								</ST.Wrapper>
							)}

							<ST.Wrapper>
								<ST.Name>Заметки</ST.Name>
								<ST.WrapperInput>
									{values && (
										<ST.TagsList>
											{values.notes?.map((note, index) => {
												return (
													<ChangeNotes
														key={`Note-my${index}`}
														index={index}
														name={note?.name}
														value={note?.value}
														setFieldValue={setFieldValue}
														setFieldTouched={setFieldTouched}
														errors={errors}
														touched={touched}
														removeItem={(index) =>
															setFieldValue &&
															setFieldValue(
																"notes",
																values?.notes?.filter((_, i) => i !== index)
															)
														}
													/>
												);
											})}
										</ST.TagsList>
									)}
									<ST.WrapperAddTag>
										<Button
											title={"Добавить замеку"}
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
												setFieldValue(
													"notes",
													values?.notes
														? [...values.notes, { name: "", value: "" }]
														: [{ name: "", value: "" }]
												)
											}
										/>
									</ST.WrapperAddTag>
								</ST.WrapperInput>
							</ST.Wrapper>

							<ST.Wrapper>
								<ST.Name>Уровень сложности</ST.Name>
								<ST.WrapperInput>
									<Input
										value={String(values?.levelDifficulty ?? "")}
										setValue={(str) => {
											setFieldValue &&
												setFieldValue("levelDifficulty", Number(str) || 0);
										}}
										setFocus={(state) =>
											setFieldTouched("levelDifficulty", state)
										}
										placeholder={"Введите Текст кнопки"}
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
							</ST.Wrapper>

							<ST.Wrapper>
								<ST.Name>Язык курса</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.language || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("language", str);
										}}
										setFocus={(state) => setFieldTouched("language", state)}
										placeholder={"Введите Текст кнопки"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.language && touched.language
												? errors.language
												: undefined
										}
										isError={!!errors.language && touched.language}
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
							) : null}

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

export default CourseSettingsBodyWindow;
