import React from "react";

import { UserRoleEnum } from "../../../Shared/Auth/types/role.enum";
import Test from "../../../Components/UI-KIT/Test";

const TestId = () => {
	return <Test role={UserRoleEnum.PRODUCER} />;
};

export default TestId;
