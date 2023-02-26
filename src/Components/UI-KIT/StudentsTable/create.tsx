import React, { FC } from "react";

import * as ST from "./styled";

const StudentsCreate: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <ST.Create onClick={onClick}>+</ST.Create>;
};

export default StudentsCreate;
