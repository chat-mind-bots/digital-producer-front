import React, { FC } from "react";
import { toast } from "react-hot-toast";

import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Constants/Colors";

import * as ST from "./styled";
import { EnrollToCourse } from "../../../Shared/Courses/components/CourseSet/enroll";
import CourseResultType from "../Course/course-props.type";
import { EnrollToCourseApiProps } from "../../../Shared/Courses/redux/course.api";
import Image from "../Atoms/Image";

type ShoppingCardProps = Pick<CourseResultType, "refetch"> &
	Pick<EnrollToCourseApiProps, "idCourse"> & {
		name: string;
		paymentLink: string;
		isFree: boolean;
		price?: Price;
		isOwner?: boolean;
	};

export interface Price {
	now: string;
	discount: string;
	old: string;
}

const ShoppingCard: FC<ShoppingCardProps> = ({
	name,
	paymentLink,
	price,
	isFree,
	idCourse,
	refetch,
	isOwner,
}) => {
	return (
		<ST.ShoppingCard>
			<Image src={"/image/IconForAddBlock.png"} />
			<ST.Title>{name}</ST.Title>
			{!isFree && (
				<ST.Price>
					{price?.now} ₽<ST.OldPrice>{price?.old} ₽</ST.OldPrice>
				</ST.Price>
			)}

			<ST.WrapperButton
				disabled={isOwner}
				onClick={() => {
					isOwner &&
						toast.error(
							"Невозможно купить или учавствовать в собственном курсе"
						);
				}}
			>
				{!isFree ? (
					<Button
						title={"Купить курс"}
						padding={"11px 28px"}
						fontSize={"14px"}
						lineHeight={"20px"}
						fontWeight={"600"}
						background={Colors.BLUE}
						color={Colors.WHITE}
						backgroundAnimation={Colors.BLUE_DARK}
						colorHover={Colors.WHITE}
						width={"100%"}
						onClick={() => window.open(paymentLink)}
						disabled={isOwner}
					/>
				) : (
					<EnrollToCourse
						idCourse={idCourse}
						refetch={refetch}
						disabled={isOwner}
					/>
				)}
			</ST.WrapperButton>
			<ST.Description>
				Для покупки курса вам необходимо связаться с создателем курса(нажать на
				кнопку купить), после проведения оплаты, создатель курса выдаст вам
				доступ и вы сможете приступить к просмотру.
			</ST.Description>
		</ST.ShoppingCard>
	);
};

export default ShoppingCard;
