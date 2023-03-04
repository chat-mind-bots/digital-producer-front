import React, { FC } from "react";

import * as ST from "./styled";

export type RadioProps = {
	isActive: boolean;
};

const CheckBox: FC<RadioProps> = ({ isActive }) => (
	<ST.CheckBox isActive={isActive} />
);

export default CheckBox;
