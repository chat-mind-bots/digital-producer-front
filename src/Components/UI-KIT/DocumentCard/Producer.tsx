import React, { FC } from "react";

import * as ST from "./styled";
import { DocumentUpdate } from "../../../Shared/Document/components/DocumentSet/update";
import CourseResultType from "../Course/course-props.type";

type DocumentCardProps = {
	onClick: () => void;
};

type DocumentCardSettingsProps = {
	id: string;
	name: string;
	description: string;
};

const DocumentCard: FC<DocumentCardProps> = ({ onClick }) => (
	<ST.DocumentCardProducer onClick={onClick}>+</ST.DocumentCardProducer>
);

export const DocumentCardSettings: FC<
	DocumentCardSettingsProps & Pick<CourseResultType, "refetch">
> = ({ id, name, description, refetch }) => (
	<ST.DocumentCard>
		<ST.Wrapper>
			<ST.Name>
				<ST.NameCurrent>{name}</ST.NameCurrent>
				<ST.UpdateIco>
					<DocumentUpdate
						refetch={refetch}
						idDocument={id}
					/>
				</ST.UpdateIco>
			</ST.Name>
			<ST.Description>{description}</ST.Description>
		</ST.Wrapper>
	</ST.DocumentCard>
);

export default DocumentCard;
