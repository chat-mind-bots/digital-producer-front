import React, { FC } from "react";

import * as ST from "./styled";

type ImageProps = {
	src: string;
};

const Image: FC<ImageProps> = ({ src }) => (
	<>
		<ST.Object
			data={src}
			type="image/png"
		>
			<ST.Image
				src={"/image/transparent.png "}
				alt={"Image"}
			/>
		</ST.Object>
	</>
);

export default Image;
