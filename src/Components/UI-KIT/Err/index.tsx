import React from "react";
import { Link } from "react-router-dom";

import Colors from "Colors";
import Button from "Components/UI-KIT/Atoms/Button";
import { routeBuilder } from "Router/services/route-builder";
import { useAppSelector } from "Hooks/redux";
import { getMainRoleService } from "Shared/Auth/services/get-main-role.service";
import { getUrlByRoleService } from "Shared/Auth/services/get-url-by-role.service";

import * as ST from "./styled";

const Err = () => {
	const auth = useAppSelector((state) => state.auth);

	return (
		<ST.Err>
			<ST.ErrText>
				Произошла ошибка, попробуйте позже. Информация об ошибке успешно
				отправлена разработчикам.
			</ST.ErrText>

			<ST.WrapperButton>
				<Link
					to={routeBuilder(getUrlByRoleService(getMainRoleService(auth.role)))}
				>
					<Button
						title={"На главую"}
						padding={"11px 28px"}
						fontSize={"14px"}
						lineHeight={"20px"}
						fontWeight={"600"}
						background={Colors.BLUE}
						color={Colors.WHITE}
						backgroundAnimation={Colors.BLUE_DARK}
						colorHover={Colors.WHITE}
						width={"100%"}
					/>
				</Link>
			</ST.WrapperButton>
		</ST.Err>
	);
};

export default Err;
