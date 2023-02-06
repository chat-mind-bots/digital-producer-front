import * as ST from "./styled";
import React, { FC } from "react";

type TestCardProps = {
	onClick: () => void;
};

const TestCard: FC<TestCardProps> = ({ onClick }) => (
	<ST.TestCardProducer onClick={onClick}>+</ST.TestCardProducer>
);

export default TestCard;
