import React, { FC } from "react";

import * as ST from "./styled";
import { DocumentUpdate } from "../../../Shared/Document/components/DocumentSet/update";
import CourseResultType from "../Course/course-props.type";
import openFileBlank from "../../../Utils/openFileBlank";

type DocumentCardProps = {
	onClick: () => void;
};

type DocumentCardSettingsProps = {
	id: string;
	name: string;
	description: string;
	url: string;
};

const DocumentCard: FC<DocumentCardProps> = ({ onClick }) => (
	<ST.DocumentCardProducer onClick={onClick}>+</ST.DocumentCardProducer>
);

export const DocumentCardSettings: FC<
	DocumentCardSettingsProps & Pick<CourseResultType, "refetch">
> = ({ id, name, description, refetch, url }) => (
	<ST.DocumentCard>
		<ST.Wrapper onClick={() => openFileBlank(url)}>
			<ST.Name>
				<ST.NameCurrent>{name}</ST.NameCurrent>
			</ST.Name>
			<ST.Description>{description}</ST.Description>
		</ST.Wrapper>
		<ST.UpdateIco>
			<DocumentUpdate
				refetch={refetch}
				idDocument={id}
			/>
		</ST.UpdateIco>
	</ST.DocumentCard>
);

export default DocumentCard;
