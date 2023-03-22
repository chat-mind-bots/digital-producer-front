import React, { FC } from "react";
import { Formik } from "formik";

import Input from "Components/UI-KIT/Atoms/Input";
import Button from "Components/UI-KIT/Atoms/Button";
import { IBannerEnum, IBannerState } from "Shared/Banner/redux/banner.slice";
import Colors from "Colors";
import ErrText from "Components/UI-KIT/Atoms/Input/ErrText";
import ChangeTags from "Components/UI-KIT/ChangeTags";
import Select from "Components/UI-KIT/Atoms/Select";
import { BannerListProps } from "Components/UI-KIT/BannerSettings/BannerList";
import { ButtonSwitchStyleArray } from "Components/ButtonSwitchStyle/button-switch-style.enum";
import { BannerApiPropsSet } from "Shared/Banner/redux/banner.api";
import { ValidationSchema } from "Components/ModalWindows/Body/BannerSettingsBodyWindow/validationSchema";

import * as ST from "./styled";
import Image from "../../../UI-KIT/Atoms/Image";
import { ReactComponent as ModalWindowAddFileIcon } from "../../../../Icons/ModalWindowAddFileIcon.svg";
import DropZone from "../../../UI-KIT/Atoms/DropZone";

type CreateBannerProps = Pick<BannerListProps, "remove"> &
	Pick<IBannerState, IBannerEnum.role | IBannerEnum.type> & {
		initialValues: IBannerState;
		handleClose?: () => void;
		sendData?: (e: IBannerState) => Promise<BannerApiPropsSet | undefined>;
	};

const BannerSettingsBodyWindow: FC<CreateBannerProps> = ({
	initialValues,
	handleClose,
	sendData,
	role,
	type,
	remove,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={ValidationSchema}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					if (sendData) {
						const newObject: IBannerState = {
							...values,
							role,
							type,
						};
						sendData(newObject).then((r) => r);
					}
					setSubmitting(false);
				}, 400);
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
								<ST.Name>Заголовок</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.title || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("title", str);
										}}
										setFocus={(state) => setFieldTouched("title", state)}
										placeholder={"Введите заголовок "}
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
								<ST.Name>Текст кнопки</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.textButton || ""}
										setValue={(str) => {
											setFieldValue && setFieldValue("textButton", str);
										}}
										setFocus={(state) => setFieldTouched("textButton", state)}
										placeholder={"Введите Текст кнопки"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.textButton && touched.textButton
												? errors.textButton
												: undefined
										}
										isError={!!errors.textButton && touched.textButton}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>
							<ST.Wrapper>
								<ST.Name>Источнник</ST.Name>
								<ST.WrapperButtons>
									<Button
										title={"Другой сайт"}
										padding={"10px 25px"}
										fontSize={"16px"}
										lineHeight={"20px"}
										fontWeight={"400"}
										background={
											values.isThirdPartySource ? Colors.WHITE4 : Colors.BLUE
										}
										color={
											values.isThirdPartySource ? Colors.GREY1 : Colors.WHITE
										}
										backgroundAnimation={Colors.BLUE}
										colorHover={Colors.WHITE}
										border={`1px solid ${Colors.RGBA_GREY}`}
										width={"max-content"}
										onClick={() => setFieldValue("isThirdPartySource", false)}
									/>
									<Button
										title={"Этот сайт"}
										padding={"10px 25px"}
										fontSize={"16px"}
										lineHeight={"20px"}
										fontWeight={"400"}
										background={
											values.isThirdPartySource ? Colors.BLUE : Colors.WHITE4
										}
										color={
											values.isThirdPartySource ? Colors.WHITE : Colors.GREY1
										}
										backgroundAnimation={Colors.BLUE}
										colorHover={Colors.WHITE}
										border={`1px solid ${Colors.RGBA_GREY}`}
										width={"max-content"}
										onClick={() => setFieldValue("isThirdPartySource", true)}
									/>
									{!!errors.isThirdPartySource &&
										touched.isThirdPartySource && (
											<ErrText
												value={
													errors.isThirdPartySource &&
													touched.isThirdPartySource
														? errors.isThirdPartySource
														: undefined
												}
											/>
										)}
								</ST.WrapperButtons>
							</ST.Wrapper>
							<ST.Wrapper>
								<ST.Name>Ссылка кнопки</ST.Name>
								<ST.WrapperInput>
									<Input
										value={values?.urlButton || ""}
										optionalText={
											values.isThirdPartySource
												? `${
														process.env.REACT_APP_API_URL
												  }/${role?.toLocaleLowerCase()}/`
												: undefined
										}
										setValue={(str) => {
											setFieldValue && setFieldValue("urlButton", str);
										}}
										setFocus={(state) => setFieldTouched("urlButton", state)}
										placeholder={"Ссылка"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.urlButton && touched.urlButton
												? errors.urlButton
												: undefined
										}
										isError={!!errors.urlButton && touched.urlButton}
									/>
								</ST.WrapperInput>
							</ST.Wrapper>
							<ST.Wrapper>
								<ST.Name>Стиль кнопки</ST.Name>
								<ST.WrapperInput>
									<Select
										value={
											ButtonSwitchStyleArray.filter(
												(e) => e.id === values?.styleButton
											)[0]
												? ButtonSwitchStyleArray.filter(
														(e) => e.id === values?.styleButton
												  )[0].value || ""
												: ""
										}
										setValue={(str) => {
											setFieldValue && setFieldValue("styleButton", str);
										}}
										placeholder={"Выберите стиль кнопки"}
										padding={"10px 14px"}
										fontSize={"16px"}
										fontWeight={"400"}
										borderSize={"1px"}
										errorText={
											errors.styleButton && touched.styleButton
												? errors.styleButton
												: undefined
										}
										isError={!!errors.styleButton && touched.styleButton}
										array={ButtonSwitchStyleArray}
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
									onClick={() => remove && remove(values.id ?? "")}
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
								disabled={isSubmitting}
								onClick={handleSubmit}
							/>
						</ST.Footer>
					</ST.Form>
				);
			}}
		</Formik>
	);
};

export default BannerSettingsBodyWindow;
