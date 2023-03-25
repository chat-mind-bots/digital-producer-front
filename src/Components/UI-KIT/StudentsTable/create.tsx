import React, { FC } from "react";

import * as ST from "./styled";
import Colors from "../../../Constants/Colors";
import Button from "../Atoms/Button";

const StudentsCreate: FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<ST.Create>
			<Button
				title={"Добавить студента в курс"}
				padding={"11px 28px"}
				fontSize={"14px"}
				lineHeight={"20px"}
				fontWeight={"600"}
				background={Colors.BLUE}
				color={Colors.WHITE}
				backgroundAnimation={Colors.BLUE_DARK}
				colorHover={Colors.WHITE}
				width={"250px"}
				onClick={onClick}
			/>
		</ST.Create>
	);
};

export default StudentsCreate;
