import React, { FC } from "react";

import Err from "Components/UI-KIT/Err";
import Loader from "Components/UI-KIT/Loader";

type WrapperRequestProps = {
	isLoading: boolean;
	isError: boolean;
	children: JSX.Element;
};

const WrapperRequest: FC<WrapperRequestProps> = ({
	children,
	isLoading,
	isError,
}) => (isLoading ? <Loader /> : isError ? <Err /> : children);
export default WrapperRequest;
