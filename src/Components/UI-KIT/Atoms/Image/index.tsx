import React, { FC } from "react";

import * as ST from "./styled";

type ImageProps = {
	src: string;
};

const Image: FC<ImageProps> = ({ src }) => (
	<ST.Image
		src={src}
		alt={"Image"}
	/>
);

export default Image;
