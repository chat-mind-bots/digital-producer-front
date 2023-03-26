import React from "react";
import { useTranslation } from "react-i18next";

import * as ST from "./styled";
import Colors from "../../../Constants/Colors";
import Button from "../../../Components/UI-KIT/Atoms/Button";

const NoAuth = () => {
	const { t } = useTranslation();

	return (
		<ST.Home>
			<ST.Title>Платформа для создания и продажи онлайн-курсов</ST.Title>
			<ST.Description>{t("Components.STATUS_TOKEN.ERR")}</ST.Description>
			<ST.WrapperButton>
				<Button
					title={"Запросить новую ссылку"}
					padding={"18px 24px"}
					fontSize={"16px"}
					lineHeight={"20px"}
					fontWeight={"600"}
					background={Colors.BLUE}
					color={Colors.WHITE}
					backgroundAnimation={Colors.BLUE_DARK}
					colorHover={Colors.WHITE}
					width={"100%"}
					onClick={() => {
						window.open(" https://t.me/DigitalProducerDevelopBot");
					}}
				/>
			</ST.WrapperButton>
		</ST.Home>
	);
};

export default NoAuth;
