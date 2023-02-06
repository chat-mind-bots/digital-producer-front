import React, { FC } from "react";

import BreadCrumbs, {
	BreadCrumbsArrayType,
} from "Components/UI-KIT/BreadCrumbs";

import * as ST from "./styled";

type WrapperContentProps = {
	header: string | BreadCrumbsArrayType[];
	children: JSX.Element;
};

const WrapperContent: FC<WrapperContentProps> = ({ children, header }) => (
	<ST.WrapperContent>
		{typeof header === "string" ? (
			<ST.Title>{header}</ST.Title>
		) : (
			<ST.WrapperBreadCrumbs>
				<BreadCrumbs array={header} />
			</ST.WrapperBreadCrumbs>
		)}
		<ST.Content>{children}</ST.Content>
	</ST.WrapperContent>
);

export default WrapperContent;
