import React, { FC } from "react";
import { Link } from "react-router-dom";

import * as ST from "./styled";
import Image from "../Atoms/Image";

type LogoProps = {
	isMax: boolean;
};

const Logo: FC<LogoProps> = ({ isMax }) => (
	<Link
		aria-label="Twitter"
		to={"/"}
	>
		<ST.Logo>
			{isMax ? (
				<Image src={"/image/LogoMax.svg"} />
			) : (
				<Image src={"/image/Logo.svg"} />
			)}
		</ST.Logo>
	</Link>
);

export default Logo;
