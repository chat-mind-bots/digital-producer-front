import React, { FC } from "react";

import * as ST from "./styled";

type TestCardProps = {
	onClick: () => void;
};

const TestCard: FC<TestCardProps> = ({ onClick }) => (
	<ST.TestCardProducer onClick={onClick}>+</ST.TestCardProducer>
);

export default TestCard;
