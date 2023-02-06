import React, { FC } from "react";

import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";
import { ReactComponent as IconAvatar } from "Icons/IconAvatar.svg";

import * as ST from "./styled";

type AuthBlockProps = {
	name: string;
	mail: string;
};

const AuthBlock: FC<AuthBlockProps> = ({ name, mail }) => (
	<ST.AuthBlock>
		<ST.WrapperAvatar>
			<IconAvatar />
		</ST.WrapperAvatar>
		<ST.WrapperInfo>
			<ST.Name>{name}</ST.Name>
			<ST.Mail>{mail}</ST.Mail>
		</ST.WrapperInfo>
		<ST.WrapperArrowDown>
			<ArrowDown />
		</ST.WrapperArrowDown>
	</ST.AuthBlock>
);

export default AuthBlock;
