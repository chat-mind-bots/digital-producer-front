import { ITestState } from "../../../Shared/Test/redux/test.slice";

type TestResultType = {
	result?: ITestState;
	refetch?: () => void;
};

export default TestResultType;
