import React, { FC } from "react";

import * as ST from "./styled";

type LectorCardProps = {
	onClick: () => void;
};

const LectorCard: FC<LectorCardProps> = ({ onClick }) => (
	<ST.LectorCardProducer onClick={onClick}>+</ST.LectorCardProducer>
);

export default LectorCard;
