import React, { FC } from "react";
import { toast } from "react-hot-toast";

import * as ST from "./styled";

type DateProps = {
	id: string;
	textErr: string;
	children: JSX.Element;
	disabled: boolean;
};

const Disable: FC<DateProps> = ({ textErr, children, id, disabled }) => (
	<>
		<ST.Disable
			disabled={disabled}
			id={id}
			onClick={() => disabled && toast.error(textErr)}
		>
			{children}
		</ST.Disable>
	</>
);

export default Disable;
