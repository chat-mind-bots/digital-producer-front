import React, { FC } from "react";

import { ReactComponent as Calendar } from "Icons/Calendar.svg";

import * as ST from "./styled";
import convertDate from "../../../../Utils/convertDate";

type DateProps = {
	value: string;
};

const Date: FC<DateProps> = ({ value }) => (
	<ST.Date>
		<Calendar />
		<ST.Value>Дата: {convertDate(value)}</ST.Value>
	</ST.Date>
);

export default Date;
