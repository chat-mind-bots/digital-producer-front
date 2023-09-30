import React from "react";

import * as ST from "./styled";

const Loader = () => (
	<ST.Loader>
		<ST.WrapperAnimation>
			<ST.Outter />
			<ST.Inner />
		</ST.WrapperAnimation>
	</ST.Loader>
);

export const AbsoluteLoader = () => (
	<ST.AbsoluteLoader>
		<ST.Loader>
			<ST.WrapperAnimation>
				<ST.Outter />
				<ST.Inner />
			</ST.WrapperAnimation>
		</ST.Loader>
	</ST.AbsoluteLoader>
);

export default Loader;
