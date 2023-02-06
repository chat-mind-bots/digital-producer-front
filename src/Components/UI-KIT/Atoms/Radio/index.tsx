import React, { FC } from "react";
import * as ST from "./styled";

export type RadioProps = {
	isActive: boolean;
};

const Radio: FC<RadioProps> = ({ isActive }) => (
	<ST.Radio isActive={isActive} />
);

export default Radio;
