import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "Components/Header";
import LeftBar from "Components/LeftBar/Admin";

import * as ST from "./styled";

const Cabinet: FC = () => (
	<>
		<ST.Cabinet>
			<LeftBar />
		</ST.Cabinet>
		<ST.Wrapper>
			<Header />
			<ST.Content>
				<Outlet />
			</ST.Content>
		</ST.Wrapper>
	</>
);

export default Cabinet;
