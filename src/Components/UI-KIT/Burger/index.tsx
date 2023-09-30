import React, { FC } from "react";

import * as ST from "./styled";

type BurgerProps = {
	open: boolean;
};

const Burger: FC<BurgerProps> = ({ open }) => (
	<ST.Burger>
		<ST.Box>
			<ST.Line open={open} />
		</ST.Box>
	</ST.Burger>
);

export default Burger;
