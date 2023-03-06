import React, { FC } from "react";

import Portal from "Components/ModalWindows/Portal";

import * as ST from "./styled";

type ModalProps = {
	children: JSX.Element;
};

const ModalToaster: FC<ModalProps> = ({ children }) => {
	return (
		<Portal>
			<ST.ModalToaster>{children}</ST.ModalToaster>
		</Portal>
	);
};
export default ModalToaster;
