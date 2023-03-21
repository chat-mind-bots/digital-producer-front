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
			{array.map((item, index) => (
				<ST.ItemBreadCrumbs key={`Breadcrumbs-item-${item.id}-${index + 2}`}>
					{index !== lengthArray ? (
						item.onClick ? (
							<>
								<ST.Item
									onClick={item.onClick}
									isLast={index === lengthArray}
								>
									{item.name}
								</ST.Item>
							</>
						) : (
							<Link to={item.url}>
								<ST.Item isLast={index === lengthArray}>{item.name}</ST.Item>
							</Link>
						)
					) : (
						<ST.Item isLast={index === lengthArray}>{item.name}</ST.Item>
					)}
				</ST.ItemBreadCrumbs>
			))}
		</ST.BreadCrumbs>
	);
};

export default BreadCrumbs;
