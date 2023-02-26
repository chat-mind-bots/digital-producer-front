import React, { FC } from "react";

import * as ST from "./styled";

type LectorCardProps = {
	name: string;
	description: string;
	img?: string;
};

const LectorCard: FC<LectorCardProps> = ({ name, description, img }) => (
	<ST.LectorCard>
		{img}
		<ST.Name>{name}</ST.Name>
		<ST.Description>{description}</ST.Description>
	</ST.LectorCard>
);

export default LectorCard;
