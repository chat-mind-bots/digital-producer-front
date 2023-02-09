import React, { FC } from "react";

import { ReactComponent as Clock } from "Icons/Clock.svg";

import * as ST from "./styled";

type TimeProps = {
	value: string;
};

const Time: FC<TimeProps> = ({ value }) => (
	<ST.Time>
		<Clock />
		<ST.Value>{value}</ST.Value>
	</ST.Time>
);

export default Time;
