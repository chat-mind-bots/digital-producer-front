import React, { FC } from "react";

import CourseResultType from "../test-props.type";
import { ITestState } from "../../../../Shared/Test/redux/test.slice";
import Questions from "../../Questions";
import WrapperContent from "../../../WrapperContent";

const CourseId: FC<ITestState & Pick<CourseResultType, "refetch">> = () => {
	return (
		<>
			<WrapperContent header={"ТЕст"}>
				<Questions arrayQuestion={[]} />
			</WrapperContent>
		</>
	);
};

export default CourseId;
