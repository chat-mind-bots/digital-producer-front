import React, { FC } from "react";
import * as ST from "./styled";

type CourseCardProps = {
	onClick?: () => void;
};

const CourseCard: FC<CourseCardProps> = ({ onClick }) => (
	<ST.CourseCardProducer onClick={onClick}>+</ST.CourseCardProducer>
);

export default CourseCard;
