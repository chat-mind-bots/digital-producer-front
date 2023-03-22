import React, { FC } from "react";
import { Formik } from "formik";

import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import { ValidationSchema } from "./validationSchema";
import * as ST from "./styled";
import { INewsState } from "../../../../Shared/News/redux/news.slice";
import { NewsApiPropsSet } from "../../../../Shared/News/redux/news.api";
import Input from "../../../UI-KIT/Atoms/Input";
import ChangeTags from "../../../UI-KIT/ChangeTags";
import Image from "../../../UI-KIT/Atoms/Image";
import { ReactComponent as ModalWindowAddFileIcon } from "../../../../Icons/ModalWindowAddFileIcon.svg";
import DropZone from "../../../UI-KIT/Atoms/DropZone";

type NewsSettingsBodyWindowProps = {
	initialValues: INewsState;
	handleClose?: () => void;
	sendData?: (e: INewsState) => Promise<undefined | any>;
	remove?: (e: string) => Promise<NewsApiPropsSet | undefined | any>;
};

const NewsSettingsBodyWindow: FC<NewsSettingsBodyWindowProps> = ({
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
						const newObject: INewsState = {
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
								<ST.Name>categoryId</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.categoryId || values.category || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("categoryId", str);
										}}
										setFocus={(state) => setFieldTouched("categoryId", state)}
										placeholder={"Введите название "}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.categoryId && touched.categoryId
												? errors.categoryId
												: undefined
										}
										isError={!!errors.categoryId && touched.categoryId}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>
							<ST.Wrapper>
								<ST.Name>role</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.role || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("role", str);
										}}
										setFocus={(state) => setFieldTouched("role", state)}
										placeholder={"Введите название "}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.role && touched.role ? errors.role : undefined
										}
										isError={!!errors.role && touched.role}
									/>
								</ST.WrapperInput>
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
								<ST.Name>Время чтения</ST.Name>
								<ST.WrapperInput>
									<Input
										value={String(values?.timeRead || "")}
										setValue={(str) => {
											setFieldValue &&
												setFieldValue("timeRead", Number(str) || "");
										}}
										setFocus={(state) => setFieldTouched("timeRead", state)}
										placeholder={"Введите время "}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.timeRead && touched.timeRead
												? errors.timeRead
												: undefined
										}
										isError={!!errors.timeRead && touched.timeRead}
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

export default NewsSettingsBodyWindow;
