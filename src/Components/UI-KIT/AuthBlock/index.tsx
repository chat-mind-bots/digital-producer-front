import React, { useState } from "react";

import Image from "Components/UI-KIT/Atoms/Image";
import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";
import { useAppSelector } from "Hooks/redux";
import logout from "Utils/Logout";
import RequestStatuses from "RequestStatuses";

import * as ST from "./styled";

const AuthBlock = () => {
	const [isWindow, setIsWindow] = useState<boolean>(false);
	const auth = useAppSelector((state) => state.auth);

	const logOutHandler = () => {
		logout(RequestStatuses.UNAUTHORIZED);
	};

	return auth ? (
		<ST.AuthBlock>
			<ST.WrapperAvatar>
				{auth.photos?.small ? (
					<Image src={auth.photos?.small} />
				) : (
					<ST.DefaultImage>
						{auth.firstName?.length && auth.firstName[0]}
					</ST.DefaultImage>
				)}
			</ST.WrapperAvatar>
			<ST.WrapperInfo>
				<ST.Name>{auth.firstName}</ST.Name>
				<ST.Mail>@{auth.username}</ST.Mail>
			</ST.WrapperInfo>
			<ST.WrapperArrowDown onClick={() => setIsWindow(!isWindow)}>
				<ArrowDown />
				<ST.Window isOpen={isWindow}>
					<ST.ItemWindow onClick={() => alert(123)}>Настройки</ST.ItemWindow>
					<ST.ItemWindow
						isExit={true}
						onClick={logOutHandler}
					>
						Выйти
					</ST.ItemWindow>
				</ST.Window>
			</ST.WrapperArrowDown>
		</ST.AuthBlock>
	) : (
		<></>
	);
};

export default AuthBlock;
