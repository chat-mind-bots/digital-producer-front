import React from "react";

import Test from "../../../Components/UI-KIT/Test";
import { UserRoleEnum } from "../../../Shared/Auth/types/role.enum";

const TestId = () => {
	return <Test role={UserRoleEnum.USER} />;
};

export default TestId;
