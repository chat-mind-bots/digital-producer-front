import React, { FC, useEffect, useState } from "react";

import BreadCrumbs, {
	BreadCrumbsArrayType,
} from "Components/UI-KIT/BreadCrumbs";

import * as ST from "./styled";
import Search from "../UI-KIT/Search";

export type WrapperContentProps = {
	header: string | BreadCrumbsArrayType[];
	children: JSX.Element;
	search?: (e: string) => void;
};

const WrapperContent: FC<WrapperContentProps> = ({
	children,
	header,
	search,
}) => {
	const [state, setState] = useState<string>("");

	useEffect(() => {
		search && search(state);
	}, [state]);

	return (
		<ST.WrapperContent>
			{typeof header === "string" ? (
				<ST.Title>{header}</ST.Title>
			) : (
				<ST.WrapperBreadCrumbs>
					<BreadCrumbs array={header} />
					{search && (
						<div>
							<Search
								value={state}
								setValue={(e) => setState(e)}
								placeholder={"Поиск"}
							/>
						</div>
					)}
				</ST.WrapperBreadCrumbs>
			)}
			<ST.Content>{children}</ST.Content>
		</ST.WrapperContent>
	);
};

export default React.memo(WrapperContent);
