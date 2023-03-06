import React, { FC } from "react";

import { ReactComponent as IconError } from "Icons/InputIcons/IconError.svg";

import * as ST from "./styled";

export type FocusType = boolean;

export type ErrorType = boolean;

type ErrTextProps = {
	value?: string;
};

const ErrText: FC<ErrTextProps> = ({ value }) => (
	<ST.ErrorText>
		<IconError />
		{value ?? "Произошла ошибка"}
	</ST.ErrorText>
);

export default ErrText;
