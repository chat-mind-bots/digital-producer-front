import React, { FC } from "react";

import { ReactComponent as IconPlayVideo } from "Icons/playVideo.svg";

import * as ST from "./styled";

export type PlayVideoProps = {
	isOpen: boolean;
};

const PlayVideo: FC<PlayVideoProps> = ({ isOpen }) => (
	<ST.PlayVideo isOpen={isOpen}>
		<IconPlayVideo />
	</ST.PlayVideo>
);

export default PlayVideo;
