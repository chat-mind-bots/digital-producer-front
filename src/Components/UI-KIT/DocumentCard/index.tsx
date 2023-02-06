import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";

import * as ST from "./styled";

type DocumentCardProps = {
	name: string;
	description: string;
	url: string;
};

const DocumentCard: FC<DocumentCardProps> = ({ name, description, url }) => (
	<ST.DocumentCard>
		<Link to={url}>
			<ST.Wrapper>
				<ST.Name>
					{name}
					<ArrowDown />
				</ST.Name>
				<ST.Description>{description}</ST.Description>
			</ST.Wrapper>
		</Link>
	</ST.DocumentCard>
);

export default DocumentCard;
