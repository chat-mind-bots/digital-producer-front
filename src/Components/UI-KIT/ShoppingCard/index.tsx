import React, { FC } from "react";

import { ReactComponent as IconForAddBlock } from "Icons/IconForAddBlock.svg";
import Button from "Components/UI-KIT/Atoms/Button";
import Colors from "Colors";

import * as ST from "./styled";
import { EnrollToCourse } from "../../../Shared/Courses/components/CourseSet/enroll";
import CourseResultType from "../Course/course-props.type";
import { EnrollToCourseApiProps } from "../../../Shared/Courses/redux/course.api";

type ShoppingCardProps = Pick<CourseResultType, "refetch"> &
	Pick<EnrollToCourseApiProps, "idCourse"> & {
		name: string;
		paymentLink: string;
		isFree: boolean;
		price?: Price;
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
}) => {
	return (
		<ST.ShoppingCard>
			<IconForAddBlock />
			<ST.Title>{name}</ST.Title>
			{!isFree && (
				<ST.Price>
					{price?.now} ₽<ST.OldPrice>{price?.old} ₽</ST.OldPrice>
				</ST.Price>
			)}

			<ST.WrapperButton>
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
					/>
				) : (
					<EnrollToCourse
						idCourse={idCourse}
						refetch={refetch}
					/>
				)}
			</ST.WrapperButton>
			<ST.Description>
				Полная стоимость платных образовательных услуг формируется с учетом
				требований налогового законодательства РФ, в частности, учитываются
				экономические (коммерческие) условия, условия платежей, обычно
				применяемые в сделках данного вида, а также иные разумные условия,
				которые могут оказывать влияние на цены, в связи с чем стоимость
				образовательных услуг может отличаться исходя из территориального места
				расположения ЦМТ.
			</ST.Description>
		</ST.ShoppingCard>
	);
};

export default ShoppingCard;
