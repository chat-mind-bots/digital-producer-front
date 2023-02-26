import React, { FC } from "react";

import * as ST from "./styled";

const CourseCardProducerCreate: FC<{ onClick: () => void }> = ({ onClick }) => (
	<ST.Create onClick={onClick}>+</ST.Create>
);

export default CourseCardProducerCreate;
