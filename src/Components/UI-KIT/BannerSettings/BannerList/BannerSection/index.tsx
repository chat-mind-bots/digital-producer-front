import React, { FC, useState } from "react";

import WindowFormik from "Components/ModalWindows/WrappersModalWindows/Formik";
import {
	IBannerEnum,
	IBannerState,
	initialBannerState,
} from "Shared/Banner/redux/banner.slice";
import Colors from "Constants/Colors";
import Button from "Components/UI-KIT/Atoms/Button";
import WrapperRequest from "Components/WrapperRequest";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import BannerSettingsBodyWindow from "Components/ModalWindows/Body/BannerSettingsBodyWindow";
import { BannerListProps } from "Components/UI-KIT/BannerSettings/BannerList";
import { BannerApiPropsSet } from "Shared/Banner/redux/banner.api";
import RequestStatuses from "Constants/RequestStatuses";

import * as ST from "./styled";

type BannerSectionProps = BannerListProps &
	Pick<IBannerState, IBannerEnum.role>;

enum FuncEnum {
	EDIT = "EDIT",
	CREATE = "CREATE",
	DELETE = "DELETE",
}

type BannersWindowType = {
	index?: number;
	state: boolean;
	type?: BannerEnum;
	func?: FuncEnum;
};

const defaultWindow = {
	index: undefined,
	isEdit: undefined,
	state: false,
	role: undefined,
	type: undefined,
};

const BannerSection: FC<BannerSectionProps> = ({
	result,
	role,
	create,
	update,
	remove,
}) => {
	const [window, setWindow] = useState<BannersWindowType>(defaultWindow);

	const widowHandler = ({ state, type, func, index }: BannersWindowType) => {
		setWindow({
			index: index,
			state: state,
			type: type,
			func: func,
		});
	};

	const apiFunction = (data: IBannerState | string, method: FuncEnum) => {
		switch (method) {
			case FuncEnum.CREATE:
				return create && create(data as IBannerState).then(t);
			case FuncEnum.EDIT:
				return update && update(data as IBannerState).then(t);
			case FuncEnum.DELETE:
				return remove && remove(data as string).then(t);
		}
	};

	const t = (e: BannerApiPropsSet) => {
		e.data &&
			(e.data.statusCode === RequestStatuses.SUCCESS ||
				e.data.statusCode === RequestStatuses.SUCCESS_201) &&
			widowHandler(defaultWindow);

		return e;
	};

	return (
		<ST.Wrapper>
			<WrapperRequest
				isError={false}
				isLoading={false}
			>
				<>
					<ST.WrapperButtons>
						{[
							BannerEnum.BANNER_TOP,
							BannerEnum.BANNER_LEFT,
							BannerEnum.BANNER_RIGHT,
							BannerEnum.BANNER_SLIDER,
						].map((type, index) => (
							<ST.WrapperButtonsInside
								key={`Banner-Section-${type}-${role}-${index}`}
							>
								{type === BannerEnum.BANNER_SLIDER ? (
									<ST.WrapperFunctionsButtons isMax={true}>
										<ST.WrapperFunctionButton>
											<Button
												title={`Добавить ${type}`}
												padding={"10px 16px"}
												fontSize={"16px"}
												lineHeight={"20px"}
												fontWeight={"600"}
												background={Colors.TRANSPARENT}
												color={Colors.GREY4}
												backgroundAnimation={Colors.GREY4}
												colorHover={Colors.WHITE}
												border={`2px solid ${Colors.GREY4}`}
												width={"100%"}
												onClick={() =>
													widowHandler({
														state: true,
														type,
														func: FuncEnum.CREATE,
													})
												}
											/>
										</ST.WrapperFunctionButton>

										<ST.WrapperFunctionButton>
											{result
												?.filter((i) => i.type === type)
												.map((e, index) => (
													<Button
														key={`BannerSection-BANNER_SLIDER-${e.id}`}
														title={`Редактировать ${type} ${e.title}`}
														padding={"10px 16px"}
														fontSize={"16px"}
														lineHeight={"20px"}
														fontWeight={"600"}
														background={Colors.TRANSPARENT}
														color={Colors.GREY4}
														backgroundAnimation={Colors.GREY4}
														colorHover={Colors.WHITE}
														border={`2px solid ${Colors.GREY4}`}
														width={"100%"}
														onClick={() =>
															widowHandler({
																index: index,
																state: true,
																type,
																func: FuncEnum.EDIT,
															})
														}
													/>
												))}
										</ST.WrapperFunctionButton>
									</ST.WrapperFunctionsButtons>
								) : (
									<ST.WrapperFunctionsButtons isMax={false}>
										{result?.filter((i) => i.type === type)[0] ? (
											<Button
												title={`Редактировать ${type}`}
												padding={"10px 16px"}
												fontSize={"16px"}
												lineHeight={"20px"}
												fontWeight={"600"}
												background={Colors.TRANSPARENT}
												color={Colors.GREY4}
												backgroundAnimation={Colors.GREY4}
												colorHover={Colors.WHITE}
												border={`2px solid ${Colors.GREY4}`}
												width={"100%"}
												onClick={() =>
													widowHandler({
														state: true,
														type,
														func: FuncEnum.EDIT,
													})
												}
											/>
										) : (
											<Button
												title={`Добавить ${type}`}
												padding={"10px 16px"}
												fontSize={"16px"}
												lineHeight={"20px"}
												fontWeight={"600"}
												background={Colors.TRANSPARENT}
												color={Colors.GREY4}
												backgroundAnimation={Colors.GREY4}
												colorHover={Colors.WHITE}
												border={`2px solid ${Colors.GREY4}`}
												width={"100%"}
												onClick={() =>
													widowHandler({
														state: true,
														type,
														func: FuncEnum.CREATE,
													})
												}
											/>
										)}
									</ST.WrapperFunctionsButtons>
								)}
							</ST.WrapperButtonsInside>
						))}
					</ST.WrapperButtons>
				</>
			</WrapperRequest>
			{/*MODAL WINDOW_______________________*/}
			{window.state &&
				window.func === FuncEnum.EDIT &&
				result &&
				!!result.filter((i) => i.type === window.type).length && (
					<WindowFormik
						handleClose={() => setWindow(defaultWindow)}
						isOpen={window.state}
						title={`Редактирование ${window.type} : ${role}`}
					>
						<BannerSettingsBodyWindow
							initialValues={
								result.filter((i) => i.type === window.type)[window.index || 0]
							}
							sendData={async (data: IBannerState) =>
								apiFunction(data, FuncEnum.EDIT)
							}
							role={role}
							type={window.type}
							remove={async (e: string) => apiFunction(e, FuncEnum.DELETE)}
						/>
					</WindowFormik>
				)}
			{window.func === FuncEnum.CREATE && (
				<WindowFormik
					handleClose={() => setWindow(defaultWindow)}
					isOpen={window.state}
					title={`Создание ${window.type} : ${role}`}
				>
					<BannerSettingsBodyWindow
						initialValues={initialBannerState}
						handleClose={() => setWindow(defaultWindow)}
						sendData={async (data: IBannerState) =>
							apiFunction(data, FuncEnum.CREATE)
						}
						role={role}
						type={window.type}
						remove={async (e: string) => apiFunction(e, FuncEnum.DELETE)}
					/>
				</WindowFormik>
			)}
			{/*MODAL WINDOW_______________________*/}
		</ST.Wrapper>
	);
};

export default BannerSection;
