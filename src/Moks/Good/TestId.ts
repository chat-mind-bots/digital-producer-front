import { ReactComponent as IconForInsight1 } from '../../Icons/IconForInsight1.svg';

// ПРИМЕР: Тест Id
// URL: /test/id
// METHOD: GET
// AUTH: TRUE

const ТестId = [
  {
    id: 1,
    name: 'string',
    description: 'string',
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
        rule: 'Правило 1 ',
      },
    ],
    questions: [
      {
        id: 0,
        name: 'asdsd',
        answers: [
          {
            id: 1,
            name: 'Ответ 1',
          },
        ],
      },
    ],
  },
];

export interface RootObject {
  id: number;
  name: string;
  description: string;
  status: number;
  countQuestions: number;
  minCountForSuccess: number;
  currentResult: number;
  transitTime: number;
  levelDifficulty: LevelDifficulty;
  rules: Rules[];
}

export interface Rules {
  id: number;
  rule: string;
}

export interface LevelDifficulty {
  curren: number;
  max: number;
}
