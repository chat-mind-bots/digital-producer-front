import React, { FC } from "react";
import { Link } from "react-router-dom";

import * as ST from "./styled";

type BreadCrumbsProps = {
	array: BreadCrumbsArrayType[];
};

export type BreadCrumbsArrayType = {
	id: number;
	name: string;
	url: string;
	onClick?: () => void;
};

const BreadCrumbs: FC<BreadCrumbsProps> = ({ array }) => {
	const lengthArray = array.length - 1;

	return (
		<ST.BreadCrumbs>
			{array.map((item, index) =>
				index !== lengthArray ? (
					item.onClick ? (
						<ST.Item
							key={`Breadcrumbs-item-${item.id}-${index + 2}`}
							onClick={item.onClick}
							isLast={index === lengthArray}
						>
							{item.name}
						</ST.Item>
					) : (
						<Link
							to={item.url}
							key={`Breadcrumbs-item-${item.id}-${index + 1}`}
						>
							<ST.Item isLast={index === lengthArray}>{item.name}</ST.Item>
						</Link>
					)
				) : (
					<ST.Item
						key={`Breadcrumbs-item-${item.id}-${index}`}
						isLast={index === lengthArray}
					>
						{item.name}
					</ST.Item>
				)
			)}
		</ST.BreadCrumbs>
	);
};

export default BreadCrumbs;
