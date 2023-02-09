import { TestIdType } from "Types/TestId";

export const TestIdData: TestIdType = {
	id: 1,
	name: "string",
	description: "string",
	status: 200,
	countQuestions: 24,
	minCountForSuccess: 15,
	currentResult: 17,
	transitTime: 60,
	levelDifficulty: {
		curren: 2,
		max: 3,
	},
	rules: [
		{
			id: 1,
			rule: "Правило 1 ",
		},
	],
	questions: [
		{
			id: 0,
			name: "asdsd",
			answers: [
				{
					id: 1,
					name: "Ответ 1",
				},
			],
		},
	],
};
