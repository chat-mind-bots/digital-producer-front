import React, { FC } from "react";
import * as ST from "./styled";

type NewsCardProps = {
	onClick: () => void;
};

const NewsCard: FC<NewsCardProps> = ({ onClick }) => (
	<ST.NewsCardAdmin onClick={onClick}>+</ST.NewsCardAdmin>
);

export default NewsCard;
