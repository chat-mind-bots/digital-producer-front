import React, { FC } from "react";

import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";

import * as ST from "./styled";
import openFileBlank from "../../../Utils/openFileBlank";

type DocumentCardProps = {
	name: string;
	description: string;
	url: string;
};

const DocumentCard: FC<DocumentCardProps> = ({ name, description, url }) => (
	<ST.DocumentCard onClick={() => openFileBlank(url)}>
		<ST.Wrapper>
			<ST.Name>{name}</ST.Name>
			<ST.Description>{description}</ST.Description>
			<ST.Svg>
				<ArrowDown />
			</ST.Svg>
		</ST.Wrapper>
	</ST.DocumentCard>
);

export default DocumentCard;
