import React, { FC } from "react";

import * as ST from "./styled";

type DocumentCardProps = {
	onClick: () => void;
};

const DocumentCard: FC<DocumentCardProps> = ({ onClick }) => (
	<ST.DocumentCardProducer onClick={onClick}>+</ST.DocumentCardProducer>
);

export default DocumentCard;
